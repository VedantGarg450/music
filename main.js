var s1=""
var s2=""
function  preload(){
}
function setup(){
    canvas= createCanvas(700, 700)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 0, 0, 700, 700)
}