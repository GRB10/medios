//variable que guarda la bola rosa
var bRosa;
var numBH;

//variable que guarda la bola azul
var bAzul;
var numBM;

//arreglo de catidad de 
var hombre;
var mujer;

var textoH;
var textoM;

var estadiosH;
var estadiosM;

// tabala empleo construccion de hombres y mujeres
var tablaEmpleoH;
var tablaEmpleoH;

var tablaEmpleoM;
var tablaEmpleoM;

//seleccionador del boton
var botonSel;

//variables botones por año cada año 
//98
var posX98 = 5;
var posY98 = 10;
var tamW98 = 45;
var tamH98 = 20;

//99
var posX99 = 55;
var posY99 = 10;
var tamW99 = 45;
var tamH99 = 20;

//2000
var posX00 = 105;
var posY00 = 10;
var tamW00 = 45;
var tamH00 = 20;

//2001
var posX01 = 155;
var posY01 = 10;
var tamW01 = 45;
var tamH01 = 20;

//2002
var posX02 = 205;
var posY02 = 10;
var tamW02 = 45;
var tamH02 = 20;

//2003
var posX03 = 255;
var posY03 = 10;
var tamW03 = 45;
var tamH03 = 20;

//2004
var posX04 = 305;
var posY04 = 10;
var tamW04 = 45;
var tamH04 = 20;

//2005
var posX05 = 355;
var posY05 = 10;
var tamW05 = 45;
var tamH05 = 20;

//2006
var posX06 = 405;
var posY06 = 10;
var tamW06 = 45;
var tamH06 = 20;

//2007
var posX07 = 455;
var posY07 = 10;
var tamW07 = 45;
var tamH07 = 20;

//2008
var posX08 = 505;
var posY08 = 10;
var tamW08 = 45;
var tamH08 = 20;

//boton volver
var posXvolver = 555;
var posYvolver = 10;
var tamWvolver = 55;
var tamHvolver = 20;

function preload() {
  tablaEmpleoH = loadTable('assets/construccion hombres.csv', 'csv', 'header');
  tablaEmpleoM = loadTable('assets/construccion mujeres.csv', 'csv', 'header');
  
  estadioCampin = loadImage('assets/estadioCampin.png');
}

function setup() {

  //crea un canvas del tamano de la ventana
  createCanvas(980, 637);
  
}

function draw() {
  background(0);

  hombre = new bolaAzul();
  hombre.aparecer();
  
    mujer = new bolaRosa();
  mujer.aparecer();
  
   textoH = new textoAzul ();
      textoH.mostrar();
  
    textoM = new textoRosa();
      textoM.mostrar();
  
    if (mouseIsPressed==true){
   
      if (mouseX > posX98 &&
      mouseX < posX98 + tamW98 &&
      mouseY > posY98 &&
      mouseY < posY98 + tamH98) {
  
      numBH = tablaEmpleoH.getNum(10, 5);
      numBM = tablaEmpleoM.getNum(10, 5);
        
        estadiosH = 9;
        estadiosM = 72/100 ;
    }
      if (mouseX > posX99 &&
      mouseX < posX99 + tamW99 &&
      mouseY > posY99 &&
      mouseY < posY99 + tamH99) {
  
      numBH = tablaEmpleoH.getNum(9, 5);
      numBM = tablaEmpleoM.getNum(9, 5);
        
        estadiosH = 7 ;
        estadiosM = 7/100 ;
    }
      if (mouseX > posX00 &&
      mouseX < posX00 + tamW00 &&
      mouseY > posY00 &&
      mouseY < posY00 + tamH00) {
  
      numBH = tablaEmpleoH.getNum(8, 5);
      numBM = tablaEmpleoM.getNum(8, 5);
        
        estadiosH = 69/100 ;
        estadiosM = 32/100 ;
    }
      if (mouseX > posX01 &&
      mouseX < posX01 + tamW01 &&
      mouseY > posY01 &&
      mouseY < posY01 + tamH01) {
  
      numBH = tablaEmpleoH.getNum(7, 5);
      numBM = tablaEmpleoM.getNum(7, 5);
        
        estadiosH = 17/100 ;
        estadiosM = 1/100 ;
    }
      if (mouseX > posX02 &&
      mouseX < posX02 + tamW02 &&
      mouseY > posY02 &&
      mouseY < posY02 + tamH02) {
  
      numBH = tablaEmpleoH.getNum(6, 5);
      numBM = tablaEmpleoM.getNum(6, 5);
        
        estadiosH = 22 ;
        estadiosM = 93/100 ;
    }
      if (mouseX > posX03 &&
      mouseX < posX03 + tamW03 &&
      mouseY > posY03 &&
      mouseY < posY03 + tamH03) {
  
      numBH = tablaEmpleoH.getNum(5, 5);
      numBM = tablaEmpleoM.getNum(5, 5);
        
        estadiosH = 20 ;
        estadiosM = 6/100 ;
    }
       if (mouseX > posX04 &&
      mouseX < posX04 + tamW04 &&
      mouseY > posY04 &&
      mouseY < posY04 + tamH04) {
  
      numBH = tablaEmpleoH.getNum(4, 5);
      numBM = tablaEmpleoM.getNum(4, 5);
         
         estadiosH = 21 ;
        estadiosM = 73/100 ;
    }
       if (mouseX > posX05 &&
      mouseX < posX05 + tamW05 &&
      mouseY > posY05 &&
      mouseY < posY05 + tamH05) {
  
      numBH = tablaEmpleoH.getNum(3, 5);
      numBM = tablaEmpleoM.getNum(3, 5);
         
         estadiosH = 22 ;
        estadiosM = 63/100 ;
    }
       if (mouseX > posX06 &&
      mouseX < posX06 + tamW06 &&
      mouseY > posY06 &&
      mouseY < posY06 + tamH06) {
  
      numBH = tablaEmpleoH.getNum(2, 5);
      numBM = tablaEmpleoM.getNum(2, 5);
         estadiosH = 20 ;
        estadiosM = 88/100 ;
    }
       if (mouseX > posX07 &&
      mouseX < posX07 + tamW07 &&
      mouseY > posY07 &&
      mouseY < posY07 + tamH07) {
  
      numBH = tablaEmpleoH.getNum(1, 5);
      numBM = tablaEmpleoM.getNum(1, 5);
         estadiosH = 24 ;
        estadiosM = 89/100 ;
    }
       if (mouseX > posX08 &&
      mouseX < posX08 + tamW08 &&
      mouseY > posY08 &&
      mouseY < posY08 + tamH08) {
  
      numBH = tablaEmpleoH.getNum(0, 5);
      numBM = tablaEmpleoM.getNum(0, 5);
         estadiosH = 23 ;
        estadiosM = 73/100 ;
    }
    }
  
   //texto pequivalencias hombres
fill(0,100,200);
  text("El número de empleados equivale a __________ veces la capacidad del estadio el Campín.", width/2 +50,550, width -550,100);
  
   //texto pequivalencias mujeres
fill(255, 51, 107);
  text("El número de empleados equivale a __________ veces la capacidad del estadio el Campín.", 30,550, width/2- 20,100);
  
    //texto pregunta  
fill(255);
  rect(3,35,width,45);
  fill(0);
  text("¿Cuántos estadios el capín se llenarían con el número de empleados del sector construcción por año y por género?", 10,50, width,200);
  
  
  //texto de generos
  push();
  noStroke();
  fill(255, 51, 107);
  rect(3,80,width/2,20);
  fill(255);
  textAlign(CENTER);
  text("Mujeres", width/4,95);
  
  fill(0,0,255);
  rect(width/2 - 3,80,width -3,20);
  fill(255);
  textAlign(CENTER);
  text("Hombres", width/4 *3,95);
  pop();
  
  
  //Dibujar los botones en la pantalla
  //98
  fill(255);
  rect(posX98, posY98, tamW98, tamH98);
  fill(0, 0, 255);
  textSize(16);
  text("1998", posX98 + 5, posY98 + 15);

  //99
  fill(255);
  rect(posX99, posY99, tamW99, tamH99);
  fill(0, 0, 255);
  text("1999", posX99 + 5, posY99 + 15);

  //2000
  fill(255);
  rect(posX00, posY00, tamW00, tamH00);
  fill(0, 0, 255);
  text("2000", posX00 + 5, posY00 + 15);

  //2001
  fill(255);
  rect(posX01, posY01, tamW01, tamH01);
  fill(0, 0, 255);
  text("2001", posX01 + 5, posY01 + 15);


  //2002
  fill(255);
  rect(posX02, posY02, tamW02, tamH02);
  fill(0, 0, 255);
  text("2002", posX02 + 5, posY02 + 15);

  //2003
  fill(255);
  rect(posX03, posY03, tamW03, tamH03);
  fill(0, 0, 255);
  text("2003", posX03 + 5, posY03 + 15);

  //2004
  fill(255);
  rect(posX04, posY04, tamW04, tamH04);
  fill(0, 0, 255);
  text("2004", posX04 + 5, posY04 + 15);

  //2005
  fill(255);
  rect(posX05, posY05, tamW05, tamH05);
  fill(0, 0, 255);
  text("2005", posX05 + 5, posY05 + 15);

  //2006
  fill(255);
  rect(posX06, posY06, tamW06, tamH06);
  fill(0, 0, 255);
  text("2006", posX06 + 5, posY06 + 15);

  //2007
  fill(255);
  rect(posX07, posY07, tamW07, tamH07);
  fill(0, 0, 255);
  text("2007", posX07 + 5, posY07 + 15);

  //2008
  fill(255);
  rect(posX08, posY08, tamW08, tamH08);
  fill(0, 0, 255);
  text("2008", posX08 + 5, posY08 + 15);
  
  //boton para regresar
  fill(255);
  rect(posXvolver, posYvolver, tamWvolver, tamHvolver);
  fill(120);
  text("volver", posXvolver +5, posYvolver+15);
}



//funcion bola
function bolaRosa(_x, _y) {

  //variables de posicion
  this.x = width/4;
  this.y = height/2;

  //variable de tamaño
  this.tam = numBM;

  //funcion que muestra la bola
  this.aparecer = function() {
    
    imageMode(CENTER);
     image(estadioCampin,this.x, this.y, this.tam,this.tam);

  }
}

function bolaAzul(_x, _y) {

  //variables de posicion
  this.x = width/2 + width/4;
  this.y = height/2;

  //variable de tamaño
  this.tam = numBH;

  //funcion que muestra la bola
  this.aparecer = function() {
    imageMode(CENTER);
    image(estadioCampin,this.x, this.y, this.tam,this.tam);

    
  } 
}

//funcion bola
function textoAzul(_x, _y) {

  //variables de posicion
  this.x = 825;
  this.y = 540;

  //variable de tamaño
  this.tam = 20;

  //funcion que muestra la bola
  this.mostrar = function() {
 
    noStroke();
    push();
    noStroke();
    fill(0,100,200);
    textSize(24);
    text(estadiosH, this.x, this.y, this.tam, this.tam);
    pop();
  }

}

function textoRosa(_x, _y) {

  //variables de posicion
  this.x = 310;
  this.y = 540;

  //variable de tamano
  this.tam = 20;

  //funcion que muestra la bola
  this.mostrar = function() {

   noStroke();
    push();
    fill(255, 51, 107);
    textSize(24);
    text(estadiosM, this.x, this.y, this.tam, this.tam);
    pop();
  }
}
