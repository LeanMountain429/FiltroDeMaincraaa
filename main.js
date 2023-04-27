var noseX
var noseY
var handX
var handY
var handX1
var handY1
var img2= 1
function preload(){
    imganimation= loadImage("FILTRO.png")
    imganimation2= loadImage("FILTRO 2.png")
    imganimation3= loadImage("FILTRO 3.png")
    imganimation4= loadImage("FILTRO 4.png")
}
function setup(){
    caanvas= createCanvas(500,450)
    camaweb= createCapture(VIDEO)
    camaweb.hide()
    reneuro= ml5.poseNet(camaweb,chicargo)
    reneuro.on("pose",resultados)
}
function draw(){
    image(camaweb,0,0,500,450)
    image(imganimation3,handX,handY,200,200)
    image(imganimation4,handX1,handY1,200,200)
    if (img2==2){
        image(imganimation2,noseX,noseY,200,200)
    }
    else{
        image(imganimation,noseX,noseY,200,200)
    }
}
function buttonclick(){
    if (img2==1){
        img2= img2+1
    }
    else{
        img2= 1
    }
}
function chicargo(){
    console.log("Chi cargo menso ajajajaja por bot t comiste mi chi cargo menso ajajajajajajajaja")
}
function resultados(resultspro){
    console.log(resultspro)
    noseY= resultspro[0].pose.nose.y-100
    noseX= resultspro[0].pose.nose.x-200
    handY= resultspro[0].pose.rightWrist.y-250
    handX= resultspro[0].pose.rightWrist.x-50
    handY1= resultspro[0].pose.leftWrist.y-250
    handX1= resultspro[0].pose.leftWrist.x-250
}