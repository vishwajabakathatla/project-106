function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifer=ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/WMs9UPi9B/model.json', modelReady);
}
function modelReady(){
    classifer.classify(gotResults);
}