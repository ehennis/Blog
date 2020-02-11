"""
    Description: This is the Keras MobileNetv2 wrapper class for my blog series on
    adding object detection to my Raspberry Pi.
    
    Link: https://eckronsoftware.wordpress.com/2020/01/15/skynet-w-raspberry-pi/
    
    Attribution:
        Leigh Johnson @grepLeigh
        GitHub: https://github.com/leigh-johnson/rpi-vision
        Blog Post: https://towardsdatascience.com/portable-computer-vision-tensorflow-2-0-on-a-raspberry-pi-part-1-of-2-84e318798ce9
"""
import tensorflow as tf
import numpy as np
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input, decode_predictions

class MobileNetV2Base():
    def __init__(self):
        self.input_shape = None
        self.include_top = True
        #weights='imagenet' means that we use the weights that were built
        #training on imagenet.
        self.model_base = tf.keras.applications.mobilenet_v2.MobileNetV2(
            alpha=1.0, classes=1000, include_top = True, input_shape = None,
            input_tensor=None, pooling=None, weights='imagenet')

    def Predict(self, frame):
        # expand 3D RGB frame into 4D batch
        sample = np.expand_dims(frame, axis=0)
        processed_sample = preprocess_input(sample.astype(np.float32))
        features = self.model_base.predict(processed_sample)
        decode_features = decode_predictions(features)
        return decode_features
                                            