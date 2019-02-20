let a;
let x;
let fotob;
let foton;
let t;
let tb;
let ta;
let flash;

function setup() {
createCanvas(400,300);
background(103,70,129);
  
// variables
a=1;
x=15;
fotob=0;
foton=0;
t=255;
tb=255;
ta=255;
flash= 1;

//CAMARA
//gran cuadrado blanco
fill(255,255,255);
noStroke();
rect(125,50,150,80);


//boton click
fill(40,40,40);
rect(175,45,50,5);


//franja gris
fill(230,230,230);
rect(125,50,150,15);

//flash
fill(215,215,215);
rect(255,57,15,15);
fill(0,0,0);
ellipse(262.5,64.5,12,12);
fill(30,30,30);
ellipse(262.5,64.5,8,8);
fill(90,90,90);
ellipse(265,62,2,2);
fill(90,90,90);
ellipse(263,63.5,1,1);

//rectangulo negro superior
fill(40,40,40);
rect(138,75,22,7);

//boton rojo
fill(247,94,37);
stroke(216,75,32);
ellipse(149,90,9,9);

//lineas de colores (a)
noStroke();
fill(247,94,37);
rect(185,105,10,30);
fill(248,243,53);
rect(195,105,10,30);
fill(59,131,189);
rect(205,105,10,30);

//lente grande
fill(30,30,30);
ellipse(200,85,50,50);
fill(50,50,50);
ellipse(200,85,35,35);
fill(40,40,40);
arc(200,85,30,30,radians(120),radians(300));
fill(45,45,45);
arc(200,85,30,30,radians(300),radians(120));
fill(43,43,43);
ellipse(200,85,20,20);
fill(90,90,90);
ellipse(202,82,7,7);
fill(90,90,90);
ellipse(210,93,7,7);
fill(90,90,90);
ellipse(196,88,2,2);


//diagonal pequeño
fill(235,235,235);
quad(125,130,275,130,285,138,115,138);

//lineas de colores (b)
fill(216,75,32);
quad(185,130,195,130,190,138,175,138);
fill(245,208,51);
quad(195,130,205,130,210,138,190,138);
fill(47,105,151);
quad(205,130,215,130,225,138,210,138);

//rectangulo blanco en la mitad
fill(255,255,255);
rect(115,138,170,10);

//parte del revelado
fill(40,40,40);
quad(115,148,285,148,275,180,125,180);
fill(20,20,20);
rect(145,156,110,8);

}


function draw() {
// flash
  
    
 fill(255,255,255,flash); 
 ellipse(262.5, 64.5, 100, 100);
 
  if (flash>0){
    flash= flash + 5;
  }
  
  if (flash=100){
    flash= flash - 5;
  }
  
//imagen 
  
    
  fill(255,255,255);
  rect(143,154,108,fotob);
   fotob= fotob + 2;
   
   if (fotob>120){
     fotob = fotob -2;
   }
  
  fill(124, 174, 158);
  rect(158,154,78,94);
  fill(247,199,22);
  ellipse(182,190,42,42);
  fill(198, 45, 24);
  triangle(180,200, 160, 248, 200, 248);
  fill(190, 79, 64);
  triangle(205,180, 175, 248, 230, 248);
  fill(235, 55, 30);
  triangle(232,215, 190, 248, 235, 248);
  
//esconder
fill(103,70,129, ta);
rect(158,180,78,70);
fill(40,40,40,tb);
quad(115,148,285,148,275,180,125,180);
tb = tb - 2;
ta = ta -0.5;
  
  //foto blanco
  
  fill(255,255,255,t);
  rect(143,154,108,fotob);
   fotob= fotob + 1;
   
   if (fotob>120){
   fotob = fotob -1;
   } 
  
   //foto negro 
  
   fill(0,0,0,t);
  rect(158,154,78,foton);
  foton=foton + 2.4;
  
  if (foton>95){
     foton = foton - 2.4;
   }
 
  t=t-0.6;
  
   /*if (frameCount<100){
     saveCanvas("miFlipbook"+frameCount, 'jpg');
     
   // para que salgan solo los pares 
   if (frameCount %2 == 0){
   }
   */
}
