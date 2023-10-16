import serial 
import time

baud = 9600 # example baudrate
portPath = 'COM11'

conn = serial.Serial(portPath, baud)

def turnOn():
  ser.write(b'turnonmsg') # replace with actual command
  time.sleep(2) # delay for msg handshake

def tare():
  ser.write(b'taremsg') # replace with actual command
  time.sleep(2) # delay for msg handshake

