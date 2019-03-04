var shape = 20;        // Width of the shape 

var xspeed = 2;  // Speed of the shape
var yspeed = 2;  // Speed of the shape

var xdirection = 1;  // Left or Right
var ydirection = 1;

var x2speed = 2;  // Speed of the shape
var y2speed = 2;  // Speed of the shape

var x2direction = 1;  // Left or Right
var y2direction = 1;

var posx1 = 0;
var posy1= 0;
var tam1 = 20;

var posx2 = 0;
var posy2= 0;
var tam2 = 20;

var posxE = 0;
var posyE = 0;
var tamE = 20;


var gris=70;
var p=12;
var p2=12;



function setup() {
  createCanvas(400, 400);


  posxE= random(0, width);
  posyE= random(15, height);


  posx= random(0, width);
  posy= random(15, height);

  posx=posx+10;
  xdirection = 1;
  ydirection= 0;


  posx2= random(0, width);
  posy2= random(15, height);

  posx=posx+10;
  y2direction = 0;
  x2direction = -1;
}

function draw() {
  background(gris);  
  fill(50, 120, 50);
  rect(-12, 0, p, 12);
  fill(180, 0, 50);
  rect(400, 0, p2, 12);

  // carro verde
  noStroke();
  fill(50, 120, 50);
  rect(posx, posy, 40, 20);
  quad(posx+20, posy-4, posx+25, posy, posx+22, posy, posx+17, posy-3);
  quad(posx+20, posy+22, posx+22, posy+20, posx+25, posy+20, posx+22, posy+24);
  fill(255);
  rect(posx, posy+6, 40, 3);
  rect(posx, posy+12, 40, 2);
  fill(0);
  quad(posx+3, posy+3, posx+9, posy+5, posx+9, posy+16, posx+3, posy+18);
  quad(posx+20, posy+5, posx+28, posy+2, posx+28, posy+18, posx+20, posy+16);
  quad(posx+34, posy+4, posx+37, posy+4, posx+37, posy+16, posx+34, posy+16);

  //carro rojo

  fill(180, 0, 50);
  rect(posx2, posy2, 40, 20);
  quad(posx2+20, posy2-4, posx2+25, posy2, posx2+22, posy2, posx2+17, posy2-3);
  quad(posx2+20, posy2+22, posx2+22, posy2+20, posx2+25, posy2+20, posx2+22, posy2+24);
  fill(255);
  rect(posx2, posy2+6, 40, 3);
  rect(posx2, posy2+12, 40, 2);
  fill(0);
  quad(posx2+3, posy2+3, posx2+9, posy2+5, posx2+9, posy2+16, posx2+3, posy2+18);
  quad(posx2+20, posy2+5, posx2+28, posy2+2, posx2+28, posy2+18, posx2+20, posy2+16);
  quad(posx2+34, posy2+4, posx2+37, posy2+4, posx2+37, posy2+16, posx2+34, posy2+16);

  fill(253, 122, 6);
  rect(posxE, posyE, 25, 25);
  fill(0);
  quad(posxE+7, posyE+15, posxE+18, posyE+15, posxE+14, posyE+4);
  ellipse(posxE+13, posyE+15, 12, 12);

  //66004150

  //acercamiento al circulo

  if (dist(posx, posy, posxE, posyE)<25) {
    posxE= random(0, width);
    posyE= random(15, height);
    p=p+40;
  }

  if (dist(posx2, posy2, posxE, posyE)<25) {
    posxE= random(0, width);
    posyE= random(15, height);
    p2=p2-40;
  }

  if (dist(posx2, posy2, posx, posy)<25) {
    p=0;
    p2=0;
    posx= random(0, width);
    posy= random(15, height);
    posx2= random(15, width);
    posy2= random(0, height);
  }

  //el cuadrado x vuelva a aparecer cuando se sale del canvas

  if (posx>width) {
    posx=0;
  }

  if (posx<0) {
    posx=width;
  }

  if (posy>height) {
    posy=15;
  }

  if (posy<15) {
    posy=height;
  }

  //el cuadrado x2 vuelva a aparecer cuando se sale del canvas

  if (posx2>width) {
    posx2=0;
  }

  if (posx2<0) {
    posx2=width;
  }

  if (posy2>height) {
    posy2=15;
  }

  if (posy2<15) {
    posy2=height;
  }

  posx = posx + ( xspeed * xdirection );
  posy = posy + ( yspeed * ydirection );

  posx2 = posx2 + ( x2speed * x2direction );
  posy2 = posy2 + ( y2speed * y2direction );
}


// movimiento con las flechas
function keyReleased() {


  if (keyCode == RIGHT_ARROW) {
    posx=posx+10;
    xdirection = 1;
    ydirection= 0;
  } 

  if (keyCode == LEFT_ARROW) {
    posx=posx+10;
    xdirection = -1;
    ydirection= 0;
  } 


  if (keyCode == UP_ARROW) {
    posy=posy+10;
    ydirection = -1;
    xdirection = 0;
  } 

  if (keyCode == DOWN_ARROW) {
    posy=posy+10;
    ydirection = 1;
    xdirection = 0;
  }
}

//movimiento con las letras
function keyPressed() {

  if (key == 'd') {
    posx2=posx2+10;

    x2direction = 1;
    y2direction = 0;
  } 

  if (key == 'a') {
    posx2=posx2-10;

    x2direction = -1;
    y2direction = 0;
  } 

  if (key == 'w') {
    posy2=posy2-10;
    y2direction = -1;
    x2direction = 0;
  } 

  if (key == 's') {
    posy2=posy2+10;
    y2direction = 1;
    x2direction = 0;
  }
}
