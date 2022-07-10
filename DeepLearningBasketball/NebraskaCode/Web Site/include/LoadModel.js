
var prediction = 50;
var bball_model = tf.loadLayersModel('include/model.json');

bball_model.then(function (value) {
    bball_model = value;
    document.getElementById("divModelStatus").innerHTML = "Model Loaded";    
});

function NormalizeHelper(val, mean, std){
  val = val - mean
  val /= std
  return val
}

const HomeScoringAVG = 78.17413007088227
const HomeScoringSTD = 7.652063168745587
const HomeDefenseAVG = 68.27736143877738
const HomeDefenseSTD = 6.912821378323477
const AwayScoringAVG = 69.55043507911432
const AwayScoringSTD = 7.199965675227158
const AwayDefenseAVG = 76.0006253268566
const AwayDefenseSTD = 7.541115665273164

function NormalizeData(home_off, home_def, away_off, away_def){
    
    return [[
        NormalizeHelper(home_off, HomeScoringAVG, HomeScoringSTD), 
        NormalizeHelper(home_def, HomeDefenseAVG, HomeDefenseSTD),
        NormalizeHelper(away_off, AwayScoringAVG, AwayScoringSTD),
        NormalizeHelper(away_def, AwayDefenseAVG, AwayDefenseSTD),
    ]];
}

function getResults(home_off, home_def, away_off, away_def) {
    var input_vals = tf.tensor2d(NormalizeData(home_off, home_def, away_off, away_def));
    prediction = Number( bball_model.predict(input_vals).dataSync() );
    var pred_explain = prediction;
    if( prediction >= 0){
        pred_explain = "The home team will win by " + prediction.toFixed(2);
    }else{
        pred_explain = "The away team will win by " + Math.abs(prediction.toFixed(2));
    }
    document.getElementById("divResults").innerHTML = pred_explain;
}
