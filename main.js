function preload() {
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
    }
}

function draw() {
    image(video, 0, 0, 300, 300)
}

function snap() {
    save("myClownedImage");
}

