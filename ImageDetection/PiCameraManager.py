"""
    Description: This is the camera wrapper class for my blog series on
    adding object detection to my Raspberry Pi.
    
    Link: https://eckronsoftware.wordpress.com/2020/01/15/skynet-w-raspberry-pi/
    
    Attribution:
        Leigh Johnson @grepLeigh
        GitHub: https://github.com/leigh-johnson/rpi-vision
        Blog Post: https://towardsdatascience.com/portable-computer-vision-tensorflow-2-0-on-a-raspberry-pi-part-1-of-2-84e318798ce9
"""

from picamera.array import PiRGBArray
from picamera import PiCamera
from threading import Thread
import numpy as np

class PiCameraManager(object):
    """
        Wrapper for the PiCamera       
    """
    def __init__(self):
        self.stopped = True
        self.camera = PiCamera()
        self.camera.resolution = (320,240)
        self.camera.framerate = 24
        self.camera.vflip = True
        self.camera.hflip = True
        self.camera.rotation = 270
        self.data_container = PiRGBArray(self.camera, size=(320,240))

        self.stream = self.camera.capture_continuous(self.data_container, format="bgr", use_video_port=True)
        
        #Create frame
        self.frame = None

    def Preview(self):
        pos_x = 100
        pos_y = 100
        size_x = 300
        size_y = 400
        self.camera.start_preview(fullscreen=False,window=(pos_x,pos_y,size_x,size_y))
        
    def Start(self):
        self.stopped = False
        Thread(target=self.StartCamera, args=()).start()

    def StartCamera(self):
        for f in self.stream:
            self.frame = f.array
            self.data_container.truncate(0)
            #print("Streaming")
            if self.stopped:
                self.stream.close()
                self.data_container.close()
                self.camera.close()
                print("Stopped")
                
    def Stop(self):
        self.stopped = True
        print("Stop Called")
        
    def Read(self):
        #self.camera.capture('/home/pi/Desktop/mdl.jpg')
        return self.frame[0:224, 48:272, :]


