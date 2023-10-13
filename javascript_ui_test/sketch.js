let input, button1,button2,button3, greeting;

function setup() {

  createCanvas(500, 500);
  background(122)
  
  
  textSize(33);
  textAlign(CENTER)
  text("LED_CONTROLLER",windowWidth/2,windowHeight/7);
  
 
  


  button1 = createButton("pattern1");
  button1.position(width/4,height/4);
  button1.mousePressed(postToPi);
  
  
  button2 = createButton("pattern2");
  button2.position(width/4,height/4 +100);
  button2.mousePressed(pattern2);

  
  button3 = createButton("pattern3");
  button3.position(width/4,height/4 + 200);
  button3.mousePressed(pattern3);
 
  textAlign(CENTER);
  textSize(50);
}




async function postToPi() {
  const response = await fetch("192.168.0.3");
  const reply = await response
  console.log(reply);
}










function pattern1() {
 console.log("pattern1 pressed")
}


function pattern2() {
 console.log("pattern2 pressed")
}


function pattern3() {
 console.log("pattern3 pressed")
}
