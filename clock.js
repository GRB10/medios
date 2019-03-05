var miHora;
var miMinuto;
var miSegundo;

function setup() {
  createCanvas(400, 400); 
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  miHora= hour();
  miMinuto= minute();
  miSegundo= second();
  
  
  miSegundoMod= map(miSegundo, 0, 60, 0, 360);
  miMinutoMod= map(miMinuto, 0, 60, 0, 360);
  miHoraMod= map(miHora, 0, 12, 0, 360);
  
  if( miHora==12){
    miHora= miHora-12;
  }
  
  
  translate(width/2, height/2);
  ellipse(0,0,width,height);
  
  push();
  rotate(miSegundoMod);
  line(0,0, 0, -170);
  pop();
  
  push();
  rotate(miMinutoMod);
  line(0,0, 0, -170);
  pop();
  
  push();
  rotate(miHoraMod);
  line(0,0, 0, -130);
  pop();
  
}
