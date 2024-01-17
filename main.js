left_wristX=0;
right_wristX=0;
dif=0;

function setup(){
    canvas=createCanvas(500,450);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,600);
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',got_poses);

}
function got_poses(results){
    if(results.length>0){
    console.log(results);
    left_wristX=results[0].pose.leftWrist.x;
    right_wristX=results[0].pose.rightWrist.x;
    dif=floor(left_wristX - right_wristX);
     
    }
}
function model_loaded(){
    console.log("model loaded");
}
function draw(){
    background('#e09da4');
    textSize(dif);
    fill('#f5f5f5');
    text('Aarav',50,300);
    }