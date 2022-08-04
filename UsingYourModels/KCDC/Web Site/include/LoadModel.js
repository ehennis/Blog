
var prediction = 50;
var CtoF_model = tf.loadLayersModel('include/model.json');

CtoF_model.then(function (value) {
    CtoF_model = value;
    document.getElementById("divModelStatus").innerHTML = "Model Loaded";    
});

function getResults(celsius) {
    var c_int = Number( celsius );
    var input_vals = tf.tensor2d([[c_int]]);
    prediction = Number( CtoF_model.predict(input_vals).dataSync() );
    var pred_explain = prediction.toFixed(3) + " degrees Fahrenheit";
    document.getElementById("divResults").innerHTML = pred_explain;
}
