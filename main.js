Webcam.set({
    width: 320,
    height: 300,
    image_format : 'png',
    png_quality : 90,

    constraints:{
        facingMode: 'environment'
    }
});
Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture_img' src="+data_uri+">"
    });
}
console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier('mobilenet', modelLoaded);
function modelLoaded(){
    console.log("Model is loaded.");
}
function check(){
    img = document.getElementById("capture_img");
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
  if(error){
      console.error(error);
  }
  else{
      console.log(result);
      document.getElementById("object_name").innerHTML=result[0].label;
  }
}
