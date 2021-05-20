var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start()
{
   document.getElementById("textbox").innerHTML="";
   recognition.start();
}
recognition.onresult=function run(event)
{
   console.log(event);
   var content=event.results[0][0].transcript;
   console.log(content);
   document.getElementById("textbox").innerHTML=content;
   speak();
}
 function speak()
 {
    var sync= window.speechSynthesis;
    match="Get Ready For the Selfie In 5 Seconds!";
    alert(match);
    var utter= new SpeechSynthesisUtterance(match);
    sync.speak(utter); 
    Webcam.attach(camera);
    setTimeout(function(){
       take_snapshot();
       save();
    },5000);
 }
 camera=document.getElementById("camera");
 Webcam.set({
   width:300,
   height:350,
   image_format:'png',
   png_quality:100
 });

function take_snapshot(){
   Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie">';
   });
}

function save(){
   link=document.getElementById("link");
   img=document.getElementById("selfie").src;
   link.href=img;
   link.click();
}