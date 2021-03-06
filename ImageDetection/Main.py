"""
    Description: This is the Main class for my blog series on
    adding object detection to my Raspberry Pi.
    
    Link: https://eckronsoftware.wordpress.com/2020/01/15/skynet-w-raspberry-pi/
    
    Attribution:
        Leigh Johnson @grepLeigh
        GitHub: https://github.com/leigh-johnson/rpi-vision
        Blog Post: https://towardsdatascience.com/portable-computer-vision-tensorflow-2-0-on-a-raspberry-pi-part-1-of-2-84e318798ce9
"""
from PiCameraManager import PiCameraManager
from MobileNetV2Base import MobileNetV2Base
from MobileNetV2TFLite import MobileNetV2TFLite
from PredictionResult import PredictionResult

def main():
    model = True
    camera = PiCameraManager()
    camera.Start()
    camera.Preview()
    #model = MobileNetV2Base()
    tflite_model = MobileNetV2TFLite()
    
    while not camera.stopped:
        if camera.frame is not None:
            frame = camera.Read()
            #prediction = model.Predict(frame)
            prediction = tflite_model.Predict(frame)
            pred = PredictionResult(prediction)

            print('%s: %s %s: %s' %
                  (pred.PrimaryName,pred.PrimaryScore,
                   pred.SecondaryName, pred.SecondaryScore))
            
            #camera.Stop()

    print('Finished')

if __name__ == "__main__":
    main()
