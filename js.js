Webcam.set({
    width:350 
    ,height:300,
    image_format:"png",
    png_quality:90
}) ;

camera=document.getElementById("camera");
Webcam.attach("#camera");


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"> '
    });
}

console.log("ml5 version: ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4W7kjTpRb/model.json",model_loaded);

function model_loaded(){
    console.log("model is loaded");
}
function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img,got_result);
}

function got_result(error,results){
if(error){
    console.error(error);
}

else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_acuraccy").innerHTML=results[0].confidence.toFixed(2);
}

}