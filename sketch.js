let startX;
let startY;
let endX;
let endY;

let deltaStartX;
let deltaStartY;
let deltaEndX;
let deltaEndY;
let dotArray = [];
let cap = 500;
var tempX;
var tempY;
var speed = 10;
var ready = true;
let r;
let g;
let b;
let timer =20;
let k = 0;
let clr; 
      
let images = [];

function preload() {
  
  
    cook = loadImage('resources\\cook.png');
    doctor = loadImage('resources\\doctor.png');
    engineer = loadImage('resources\\engineer.png');
    nurse = loadImage('resources\\nurse.png');
    painter = loadImage('resources\\painter.png');
    student = loadImage('resources\\student.png');
    
    images = [cook, doctor, engineer, nurse, painter, student];
}

function setup() {
  createCanvas(400, 600);
  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);

  const range = 10;
  deltaStartX = random(-range, range);
  deltaStartY = random(-range, range);
  deltaEndX = random(-range, range);
  deltaEndY = random(-range, range);
    
 
    
  
  
 

    
  dotArray.push(new Dot(startX, startY, endX, endY));
  noFill();
  background(0);
    
setInterval(()=>{
    timer = 0;
}, 20000)
    
}


const callDrawFunction = (array) => {
  array.forEach((element) => {
    element.showLine();
  });
};

function draw() {
    
    if (ready == true){
    if(timer!== 0){
    
  background(255);
  callDrawFunction(dotArray);

  if (startX < 0 || startX > width) {
    deltaStartX *= -1;
  }

  if (startY < 0 || startY > height) {
    deltaStartY *= -1;
  }

  if (endX < 0 || endX > width) {
    deltaEndX *= -1;
  }

  if (endY < 0 || endY > height) {
    deltaEndY *= -1;
  }
  startX += deltaStartX;
  startY += deltaStartY;
  endX += deltaEndX;
  endY += deltaEndY;
  dotArray.push(new Dot(startX, startY, endX, endY));

  if (dotArray.length > cap) {
    dotArray.splice(0, 1);
  }
 
  image(images[k], 80, 100);
  
    
}
    else{
        
        dotArray=[];
        background(255);
        timer = 20;
        if(k<5){
        k++;
        }
        else{
            k = 0;
        }
    }
        
  }
}

function touchStarted() {

   ready = false;
   background(255);
   
 //   this.clr = color(50, 50, 50, 100);   
 // redraw(10);
     
  
}



function mouseReleased() {
    
    ready = true;

      

}

class Dot {
  constructor(SX, SY, EX, EY) {
    this.startX = SX;
    this.startY = SX;
    this.endX = EX;
    this.endY = EY;
 //  this.clr = color(random(0, 200), random(0, 200), random(0, 200), 100); 
      
             
  }

    clr = color(random(0, 200), random(0, 200), random(0, 200), 100); 

  showLine() {
      
    push();
  
   
    stroke(this.clr);
      
    strokeWeight(3);
    line(this.startX, this.startY, this.endX, this.endY);
//   curve(this.startX, this.startY, this.startX+100, this.startY+100, this.startX+200, this.startY+200 this.endX, this.endY) 
      pop();
  }

}
