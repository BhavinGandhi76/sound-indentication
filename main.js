function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZDoKsnZ0W/model.json", modelloaded);
}

function modeloaded(){
    classifier.classify(gotresult);
}