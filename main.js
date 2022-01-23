nosex = 0
nosey = 0

function preload() {
    clown_image = loadImage("https://i.postimg.cc/WpXjGc43/imageedit-3-5942487835.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide()
    console.log("READING.SETUP.TRUE()");

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded( ) {
    console.log( 'PoseNet Is LODEOD' );
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
        console.log("NOSE.X.CORDS=" + results[0].pose.nose.x);
        console.log("NOSE.Y.CORDS=" + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x-20
        nosey = results[0].pose.nose.y
    }
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(clown_image, nosex, nosey, 60, 30)
}

function snap() {
    save("myClownedImage");
}

