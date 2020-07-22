class PredictionResult():
    
    def __init__(self, prediction):
        self.PrimaryClass = prediction[0][0][0]
        self.PrimaryName = prediction[0][0][1]
        self.PrimaryScore = "{0:.0%}".format(prediction[0][0][2])
        
        self.SecondaryClass = prediction[0][1][0]
        self.SecondaryName = prediction[0][1][1]
        self.SecondaryScore = "{0:.0%}".format(prediction[0][1][2])
        
        