import React from 'react';
import Draggable from 'react-draggable';
import './styles.css';

const block1 = Math.floor(Math.random()*(1000));
const block2 = Math.floor(Math.random()*(1000));
const block3 = Math.floor(Math.random()*(1000));
const block4 = Math.floor(Math.random()*(1000));
const block5 = Math.floor(Math.random()*(1000));
const block6 = Math.floor(Math.random()*(1000));
const block7 = Math.floor(Math.random()*(1000));
const block8 = Math.floor(Math.random()*(1000));
var x1, y1;
class App extends React.Component {
  stopHandler = (position)=>{
    const {x,y} = position;
    console.log({x,y})
    x1=x;
    y1=y;
  }

  render() {
    return (
    <>
        <Draggable
          position={{x:x1, y: y1}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.stopHandler}>
          <div className="boxH">{block1}</div>
        </Draggable>
        <Draggable
          // position={{x: 0, y: 0}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="boxH">{block2}</div>
        </Draggable>
        <Draggable
          // position={{x: 0, y: 0}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="boxH">{block3}</div>
        </Draggable>
        <Draggable
          // position={{x: 0, y: 0}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="boxH">{block4}</div>
        </Draggable><Draggable
          // position={{x: 0, y: 0}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="boxH">{block5}</div>
        </Draggable>
        <Draggable
          // position={{x: 0, y: 0}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="boxH">{block6}</div>
        </Draggable><Draggable
          // position={{x: 0, y: 0}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="boxH">{block7}</div>
        </Draggable>
        <Draggable
          // position={{x: 0, y: 0}}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="boxH">{block8}</div>
        </Draggable>
    </>
    );
  }
}

export default App;