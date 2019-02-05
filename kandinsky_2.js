function setup() {
   createCanvas (200,200);
  
  //verde amarillos gigante cuandrado del fondo
  fill(153,153,51);
  noStroke();
  quad(0,0,105,0,135,40,40,110);
  triangle(0,0,0,80,40,110);
  
   //arcos naranja - blanco
  fill(255,255,255);
  stroke(255,100,20);
  ellipse(46,22,10,10);
  ellipse(36,30,15,15); 
  ellipse(22,40,20,20); 
  ellipse(4,54,25,25); 
  ellipse(70,0,15,15); 
  
  //rayon negro
  fill(0,0,0);
  noStroke();
  triangle(0,0,75,0,0,60);
  triangle(67,7,200,140,50,10);
  triangle(60,10,73,20,50,20);
  
  //verde amarillo triangulos sobre rayon negro
  fill(153,153,51);
  beginShape();
    vertex(0,10);
    vertex(0,50); 
    vertex(40,20);
    vertex(11,22);
  endShape(CLOSE);
  triangle(52,0,54,2,56,0);
  triangle(17,0,25,7,33,0);
  
  //triangulo blanco - amarillo
  fill(255,255,255);
  quad(0,17,5,16,7,18,0,20);
  fill(255,204,51);
  triangle(5,16,25,12,7,18);
  
  //triangulo blanco
  fill(255,255,255);
  triangle(67,32,38,25,65,35);
  
  //cuadrado negro
  stroke(0,0,0);
  quad(90,2,118,2,118,33,90,33);
  //vertical
  line(97,2,97,32);
  line(104,2,104,32);
  line(111,2,111,32);
  //horizontal
  line(90,9,117,9);
  line(90,17,117,17);
  line(90,25,117,25);
  
  noStroke();
  //transparencia amarilla
  fill(255,204,51);
  quad(20,70,65,45,110,90,25,160);
  
  //parte naranja
  fill(255,100,20);
  beginShape();
    vertex(20,70);
    vertex(65,45); 
    vertex(92,72);
    vertex(40,115);
    vertex(22,100);
  endShape(CLOSE);

  //circulos blancos
  fill(255,255,255);
  ellipse(30,70,3,3);
  ellipse(40,107,4,4);
   ellipse(77,76,3,3);
  ellipse(49,68,4,4);
  
  //puntos negros
  fill(0,0,0)
    ellipse(30,70,1,1);
  ellipse(40,107,1,1);
   ellipse(77,76,1,1);
  ellipse(49,68,1,1);
  
  
  //3 lineas
  fill(0,0,0);
  quad(120, 105, 180, 150, 178, 152, 118,107);
  quad(115, 110, 175, 155, 173, 157, 112,112);
  quad(110, 115, 170, 160, 168, 162, 108,117);
  
  //mini triangulos amarillos
  fill(255,204,51);
  triangle(48,64,50,55,51,64);
  triangle(46,71,40,76,49,73); 
  triangle(32,98,38,103,36,105);
  //triangle(36,115,38,118,32,120); amarilo sobre amarillo
  triangle(72,80,74,82,65,90);
  triangle(72,60,76,62,65,60);
  
  noFill();
  stroke(0,0,0);
  curve(-100,0,20,45,0,98,-80,-10);
  curve(20,50,0,60,25,72,70,50);
  curve(50,50,0,80,25,72,70,50);
  
  //curva morada
  stroke(150,0,100);
  curve(-800,-200,80,55,65,-5,-10,800,50);
 

}

function draw() {
  
}
