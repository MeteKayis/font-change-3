 leftx = 0;
 righx = 0;
 diff = 0;
 
 
 
 function setup()
 {
    video = createCapture(VIDEO);
    video.size(450,450);

    canvas = createCanvas(450,450);
    canvas.position(460, 100);

    poseNet = ml5.poseNet(video, modelLoaded)  
    poseNet.on('pose', gotPoses);                     
 }

  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

  function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftx = results[0].pose.leftWrist.x;
        rightx = results[0].pose.rightWrist.x;
        diff = floor(leftx - rightx);                     
    }
  }

  function draw()
  {
    background("lightgrey");
    textSize(diff);
    fill("blue");
    text("Mete Kayis", 50,400);
  }

