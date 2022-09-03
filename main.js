mustacheX=0;
mustacheY=0;
function preload() {
 clown_nose = loadImage('https://i.postimg.cc/250bqgVm/mustache-p-ng.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x -10;
        mustacheY = results[0].pose.nose.y -10;
        console.log("nose x = " + mustacheX);
        console.log("nose y = " + mustacheY);
    }
}


function draw() {
    
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}