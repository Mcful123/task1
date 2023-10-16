import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import React, { useState } from "react";

const router = express.Router();

function comb(cursorArr, arr){
    if(arr.length == 0){
        return cursorArr.map(obj=>obj.prediction_key);
    }
    const newArr = new Set(cursorArr.map(obj=>obj.prediction_key));
    const retArr= arr.filter(pk => newArr.has(pk));
    return retArr;
}


var finalArr = [];
let printArr = [];

router.get("/", async (req, res) => {
  const jsonarr = finalArr.map((str, index)=>({
    key:`id_${index+1}`,
    prediction_key:str
  }))
  res.send(jsonarr).status(200);
});


router.post("/", async (req, res) => {

  console.log("*********new query**********")
  finalArr = [];
  let collection = await db.collection("mass");
  let query = {mass:{$lt:req.body.maxMass_, $gt:req.body.minMass_}}
  let results = await collection.find(query).toArray();
  finalArr = comb(results, finalArr);
  printArr = new Set(results.map(obj=>obj.prediction_key));
  console.log(results)
  console.log(printArr)
  console.log(finalArr)

  console.log("*********temp**********")
  collection = await db.collection("temperature");
  query = {temperature:{$lt:req.body.maxTemp_, $gt:req.body.minTemp_}}
  results = await collection.find(query).toArray();
  finalArr = comb(results, finalArr);
  printArr = new Set(results.map(obj=>obj.prediction_key));
  console.log(results)
  console.log(printArr)
  console.log(finalArr)

  console.log("*********color**********")
  if(req.body.color_.length != 0){
    collection = await db.collection("color");
    query = {color:{$eq:req.body.color_}}
    results = await collection.find(query).toArray();
    finalArr = comb(results, finalArr);
    printArr = new Set(results.map(obj=>obj.prediction_key));
    console.log(results)
    console.log(printArr)
    console.log(finalArr)
  }

  console.log("*********composition**********")
  if(req.body.composition_.length != 0){
    collection = await db.collection("composition");
    const origString = req.body.composition_.replace(/\s/g, '')
    const compArray = origString.split(',')
    query = {composition:{$all:compArray}}
    results = await collection.find(query).toArray();
    finalArr = comb(results, finalArr);
    printArr = new Set(results.map(obj=>obj.prediction_key));
    console.log(results)
    console.log(printArr)
    console.log(finalArr)
  }

  console.log("*********composition length**********")
  collection = await db.collection("composition");
  let tempArray=[]
  for (let i=0; i<req.body.complength_;i++){
    query = {composition:{$size:i}};
    results = await collection.find(query).toArray();
    tempArray.push(...results);
  }
//   console.log(tempArray)
  finalArr = comb(tempArray, finalArr);
  printArr = new Set(tempArray.map(obj=>obj.prediction_key));
//   console.log(printArr)
//   console.log(finalArr)

  console.log("*********pressure**********")
  collection = await db.collection("pressure");
  query = {pressure:{$lt:req.body.maxPress_, $gt:req.body.minPress_}}
  results = await collection.find(query).toArray();
  finalArr = comb(results, finalArr);
  printArr = new Set(results.map(obj=>obj.prediction_key));
//   console.log(results)
//   console.log(printArr)
//   console.log(finalArr)
  res.send(finalArr).status(200);
});


export default router;