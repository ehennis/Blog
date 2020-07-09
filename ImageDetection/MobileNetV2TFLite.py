"""
    Description: This is the TF Lite MobileNetv2 wrapper class for my blog series on
    adding object detection to my Raspberry Pi.
    
    Link: https://eckronsoftware.wordpress.com/2020/01/15/skynet-w-raspberry-pi/
    
    Attribution:
        Leigh Johnson @grepLeigh
        GitHub: https://github.com/leigh-johnson/rpi-vision
        Blog Post: https://towardsdatascience.com/portable-computer-vision-tensorflow-2-0-on-a-raspberry-pi-part-1-of-2-84e318798ce9
"""
import tflite_runtime.interpreter as tflite
import numpy as np
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input, decode_predictions

class MobileNetV2TFLite():
    def __init__(self):
        self.model_path = 'mobilenetv2.tflite'
        self.interpreter = tflite.Interpreter(self.model_path)
        self.interpreter.allocate_tensors()
        self.tflite_input_details = self.interpreter.get_input_details()
        self.tflite_output_details = self.interpreter.get_output_details()
        

    def Predict(self, frame):
        dtype = self.tflite_input_details[0].get('dtype')
        # expand 3D RGB frame into 4D batch
        sample = np.expand_dims(frame, axis=0)
        processed_sample = preprocess_input(sample.astype(np.float32))
        
        self.interpreter.set_tensor( self.tflite_input_details[0]['index'], processed_sample )
        self.interpreter.invoke()
        
        features = self.interpreter.get_tensor( self.tflite_output_details[0]['index'] )
        decode_features = decode_predictions(features)
        return decode_features
                                            
