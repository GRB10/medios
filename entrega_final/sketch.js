//variable que guarda el lado rosa
var bRosa;
var numBH=0.01;

//variable que guarda el lado azul
var bAzul;
var numBM=0.01;

let fechas;
let boton;

let pantalla;

var foto;

var hombre;
var mujer;

//variables para que el texto de equivalencia aparezca según el año
var textoH;
var textoM;

//variabale para el número de equivalencia para hombres y mujeres
var estadiosH;
var estadiosM;

// tabala empleo construccion de hombres y mujeres
var tablaEmpleoH;
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

var img = 0;

let introduccion;
var face1 = true;

var posXboton = 25;
var posYboton = 30;
var tamboton = 30;

var posXnaranja = 22;
var posYnaranja = 200;
var tamnaranja = 299;

var posXazul = 336;
var posYazul = 200;
var tamazul = 299;

var posXverde = 652;
var posYverde = 200;
var tamverde = 299;


var animacion = 0;
var aumTiempo = 0;
var contarN = false;
var contarA = false;
var contarV = false;


function preload() {

  tablaEmpleoH = loadTable('assets/construccion hombres.csv', 'csv', 'header');

  tablaEmpleoM = loadTable('assets/construccion mujeres.csv', 'csv', 'header');

  torres = loadImage('assets/torres.png');
  tunja = loadImage('assets/tunja.png');
  cobos = loadImage('assets/cobos.jpg');
  

  bold = loadFont('assets/Bold.otf');
  book = loadFont('assets/Book.otf');
  regular = loadFont('assets/Regular.otf');


}

function setup() {
  createCanvas(980, 637);
  


  introduccion = new touchStarted(0, 0, width, height);
}


function draw() {
    //funcion bola
  
    }
    

  function bolaRosa() {

  //variables de posicion
  this.x = width / 4;
  this.y = height / 2;

  //variable de tamaño
  this.tam = numBM;

  //funcion que muestra la bola
  this.aparecer = function() {

    imageMode(CENTER);
    image(foto, this.x, this.y, this.tam, this.tam);

  }
}

function bolaAzul() {

  //variables de posicion
  this.x = width / 2 + width / 4;
  this.y = height / 2;

  //variable de tamaño
  this.tam = numBH;

  //funcion que muestra la bola
  this.aparecer = function() {
    imageMode(CENTER);
    image(foto, this.x, this.y, this.tam, this.tam);


  }
}

//funcion bola
function textoAzul(_x, _y) {

  //variables de posicion
  this.x = 845;
  this.y = 540;

  //variable de tamaño
  this.tam = 20;

  //funcion que muestra la bola
  this.mostrar = function() {

    noStroke();
    push();
    noStroke();
    fill( 250, 210, 31 );
    textSize(24);
    textFont(bold);
    text(estadiosH, this.x, this.y, this.tam, this.tam);
    pop();
  }

}

function textoRosa(_x, _y) {

  //variables de posicion
  this.x = 330;
  this.y = 540;

  //variable de tamano
  this.tam = 20;

  //funcion que muestra la bola
  this.mostrar = function() {

    noStroke();
    push();
    fill(215, 162, 248);
    textSize(24);
    textFont(bold);
    text(estadiosM, this.x, this.y, this.tam, this.tam);
    pop();
  }
}
  
function botonesFecha(){
         //texto equivalencias hombres
      fill( 250, 210, 31 );
  textSize(17);
      text("El número de empleados equivale a __________ veces la capacidad del lugar.", width / 2 + 50, 550, width - 550, 100);

      //texto equivalencias mujeres
      fill(215, 162, 248);
      text("El número de empleados equivale a __________ veces la capacidad del lugar.", 30, 550, width / 2 - 20, 100);


      //texto de generos
      push();
      noStroke();
      fill( 143, 88, 177 );
      rect(3, 80, width / 2, 20);
      fill(255);
      textAlign(CENTER);
      text("Mujeres", width / 4, 95);

      fill(  203, 173, 35  );
      rect(width / 2 - 3, 80, width - 3, 20);
      fill(255);
      textAlign(CENTER);
      text("Hombres", width / 4 * 3, 95);
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
      text("volver", posXvolver + 5, posYvolver + 15);

}

function pantalla0(){
  push();
  background(50);
  fill(255);
 textAlign(CENTER);
  textFont(bold);
  textSize(110);
  text("EMPLEO EN COLOMBIA",50,height/3.5 +20,width-100,height);
  textSize(70);
  textFont(regular);
  text("1998-2008",50,height/3.5 +120,width-100,height/0.5);
  textSize(20);
  text("INFOGRAFIA INTERACTIVA",50,height/3.5 + 200,width-100,height/0.5);
  textFont(book);
  text("Bases de datos recuperados de: http://data.un.org/Default.aspx",50,height -50,width-100,height/0.5);
pop();
}

function pantalla1(){
  push();
  background(50);
  fill(255);
  textFont(regular);
 textAlign(CENTER);
  textSize(43);
  text("En esta infografía encontraras el número de empleados en Colombia desde el año 1998 hasta el 2008 dividido por sector de trabajo y por género. El objetivo de esta visualización es evidenciar las diferencia entre el número de empleados por género en los sectores de construcción, salud, y agricultura.",50,height/3.5,width-100,height/0.5); 
  pop();

}

function pantalla2(){
  push();
  background(204,255,240);
  push();
  textSize(60);
  textAlign(CENTER);
  fill(71,136,156);
  text("Elige un sector...", 180,50,600,50);
  
  noStroke();
  fill(255,124,0);
  rect(20,188,299,299);
  fill(219,123,15);
  rect(50,350,80,135);
  fill(219,123,15);
  rect(20,190,299,30);
  fill(193,229,236,110);
  rect(140,350,150,100);
  fill(255);
  textSize(58);
  textFont(bold);
  text("Construcción", 20,280,299,299);
  
  fill(0,73,255);
  rect(336,188,299,299);
  fill(62,91,188);
  rect(370,350,80,135);
  rect(336,190,299,30);
  fill(193,229,236,110);
  fill(193,229,236,110);
  rect(460,350,150,100);
  fill(255);
  text("Salud", 336,280,299,299);
  
  fill(69,111,70);
  rect(652,188,299,299);
  fill(97,123,85);
  rect(690,350,80,135);
  rect(653,190,299,30);
  fill(193,229,236,110);
  rect(780,350,150,100);
  fill(255);
  text("Agricultura", 652,280,299,299);
  
  fill(80);
  rect(0,487,width,23);
  fill(130);
  rect(0,510,width,height);
  fill(203, 181,59);
  textSize(24);
  textAlign(LEFT);
  textFont(regular);
  text("Cuando dejes de utilizar la infografía por favor haz click en el botón amarillo para volver a la pantalla de inicio.... GRACIAS", 30,540,700,299);
  fill(203, 181,59);
  ellipse(770, 570, 60, 60);
  pop();
}

function pantalla3naranja(){
  push();
  background(238,168,90);
  textAlign(CENTER);
  textSize(60);
  textFont(bold);
  text("Las Torres Gemelas en Nueva York tenían un capacidad de 50.000 trabajadores.",40,height/2-50,width-80,height);
  pop();
}

function pantalla3azul(){
  push();
  background(139,184,245);
  textAlign(CENTER);
  textSize(60);
  textFont(bold);
  text("Los Cobos Medical Center tienen capacidad para atender a 200.000 pacientes",40,height/2 -60,width-80,height);
  pop();
}

function pantalla3verde(){
  push();
  background(151,226,165);
  textAlign(CENTER);
  textSize(60);
  textFont(bold);
  text("La población de tunja en el 2016 fue de 191.878 personas",40,height/2 -50,width-80,height);
  pop();
}




function touchStarted() {

  if (img === 0) {
   panatalla =new pantalla0();
    img = 1;
  } else

  if (img === 1) {
    panatalla =new pantalla1();
    img=2;
    
  }else if (img===2){
      pantalla = new pantalla2();
    img = 3;

  } else if (img===3) {

      if (mouseIsPressed == true) {

        if (mouseX > posXnaranja &&
          mouseX < posXnaranja + tamnaranja &&
          mouseY > posYnaranja &&
          mouseY < posYnaranja + tamnaranja) {
          
          pantalla =new pantalla3naranja();
          img=4;
          
        }

        if (mouseX > posXazul &&
          mouseX < posXazul + tamazul &&
          mouseY > posYazul &&
          mouseY < posYazul + tamazul) {

          pantalla =new pantalla3azul();
          img=5;
          
        }


        if (mouseX > posXverde &&
          mouseX < posXverde + tamverde &&
          mouseY > posYverde &&
          mouseY < posYverde + tamverde) {

           pantalla =new pantalla3verde();
          img=6;
        } 
        
        if (mouseX > 770 &&
          mouseX < 770 + 60 &&
          mouseY > 570 &&
          mouseY < 570 + 60) {

           pantalla =new pantalla0();
          img=0;
        }
      }

}
  else if (img==4){ 
      background(0);
    
    foto= torres;
    
     fechas= new botonesFecha();
    
  //texto pregunta  
      fill(255);
      rect(3, 35, width, 45);
      fill(0);
      text("¿Cuántas Torres Gemelas se llenarían con el número de empleados del sector construcción por año y por género?", 10, 50, width, 200);
            
      hombre = new bolaAzul();
      hombre.aparecer();

      mujer = new bolaRosa();
      mujer.aparecer();

      textoH = new textoAzul();
      textoH.mostrar();

      textoM = new textoRosa();
      textoM.mostrar();
        
    
    if (mouseX > posX98 &&
      mouseX < posX98 + tamW98 &&
      mouseY > posY98 &&
      mouseY < posY98 + tamH98) {
        
      numBH = tablaEmpleoH.getNum(10, 5);
      numBM = tablaEmpleoM.getNum(10, 5);
        
        estadiosH = 7;
        estadiosM = 72/100 ;  
      
    } else
      
      if (mouseX > posX99 &&
      mouseX < posX99 + tamW99 &&
      mouseY > posY99 &&
      mouseY < posY99 + tamH99) {
  
      numBH = tablaEmpleoH.getNum(9, 5);
      numBM = tablaEmpleoM.getNum(9, 5);
        
        estadiosH = 5 ;
        estadiosM = 7/100 ;
    } else
      if (mouseX > posX00 &&
      mouseX < posX00 + tamW00 &&
      mouseY > posY00 &&
      mouseY < posY00 + tamH00) {
  
      numBH = tablaEmpleoH.getNum(8, 5);
      numBM = tablaEmpleoM.getNum(8, 5);
        
        estadiosH = 1 ;
        estadiosM = 32/100 ;
    } else
      if (mouseX > posX01 &&
      mouseX < posX01 + tamW01 &&
      mouseY > posY01 &&
      mouseY < posY01 + tamH01) {
  
      numBH = tablaEmpleoH.getNum(7, 5);
      numBM = tablaEmpleoM.getNum(7, 5);
        
        estadiosH = 12/100 ;
        estadiosM = 1/100 ;
    } else
      if (mouseX > posX02 &&
      mouseX < posX02 + tamW02 &&
      mouseY > posY02 &&
      mouseY < posY02 + tamH02) {
  
      numBH = tablaEmpleoH.getNum(6, 5);
      numBM = tablaEmpleoM.getNum(6, 5);
        
        estadiosH = 16 ;
        estadiosM = 93/100 ;
    } else
      if (mouseX > posX03 &&
      mouseX < posX03 + tamW03 &&
      mouseY > posY03 &&
      mouseY < posY03 + tamH03) {
  
      numBH = tablaEmpleoH.getNum(5, 5);
      numBM = tablaEmpleoM.getNum(5, 5);
        
        estadiosH = 15 ;
        estadiosM = 6/100 ;
    } else
       if (mouseX > posX04 &&
      mouseX < posX04 + tamW04 &&
      mouseY > posY04 &&
      mouseY < posY04 + tamH04) {
  
      numBH = tablaEmpleoH.getNum(4, 5);
      numBM = tablaEmpleoM.getNum(4, 5);
         
         estadiosH = 15 ;
        estadiosM = 73/100 ;
    } else
       if (mouseX > posX05 &&
      mouseX < posX05 + tamW05 &&
      mouseY > posY05 &&
      mouseY < posY05 + tamH05) {
  
      numBH = tablaEmpleoH.getNum(3, 5);
      numBM = tablaEmpleoM.getNum(3, 5);
         
         estadiosH = 16 ;
        estadiosM = 63/100 ;
    } else
       if (mouseX > posX06 &&
      mouseX < posX06 + tamW06 &&
      mouseY > posY06 &&
      mouseY < posY06 + tamH06) {
  
      numBH = tablaEmpleoH.getNum(2, 5);
      numBM = tablaEmpleoM.getNum(2, 5);
         estadiosH = 14 ;
        estadiosM = 88/100 ;
    } else
       if (mouseX > posX07 &&
      mouseX < posX07 + tamW07 &&
      mouseY > posY07 &&
      mouseY < posY07 + tamH07) {
  
      numBH = tablaEmpleoH.getNum(1, 5);
      numBM = tablaEmpleoM.getNum(1, 5);
         estadiosH = 17 ;
        estadiosM = 89/100 ;
    } else
       if (mouseX > posX08 &&
      mouseX < posX08 + tamW08 &&
      mouseY > posY08 &&
      mouseY < posY08 + tamH08) {
  
      numBH = tablaEmpleoH.getNum(0, 5);
      numBM = tablaEmpleoM.getNum(0, 5);
         estadiosH = 17 ;
        estadiosM = 73/100 ;
    } else
       if (mouseX > posXvolver &&
      mouseX < posXvolver + tamWvolver &&
      mouseY > posYvolver &&
      mouseY < posYvolver + tamHvolver) {
  
      img=2;
    }
}else if (img==5){ 
      background(0);
  
  foto= cobos;
    
     fechas= new botonesFecha();
    
  //texto pregunta  
      fill(255);
      rect(3, 35, width, 45);
      fill(0);
      text("¿Cuántos Cobos Medical Centers se llenarían con el número de empleados del sector salud por año y por género?", 10, 50, width, 200);
            
      hombre = new bolaAzul();
      hombre.aparecer();

      mujer = new bolaRosa();
      mujer.aparecer();

      textoH = new textoAzul();
      textoH.mostrar();

      textoM = new textoRosa();
      textoM.mostrar();
        
    
    if (mouseX > posX98 &&
      mouseX < posX98 + tamW98 &&
      mouseY > posY98 &&
      mouseY < posY98 + tamH98) {
        
      numBH = tablaEmpleoH.getNum(21, 5);
      numBM = tablaEmpleoM.getNum(21, 5);
        
        estadiosH = 6;
        estadiosM = 10 ;  
      
    } else
      
      if (mouseX > posX99 &&
      mouseX < posX99 + tamW99 &&
      mouseY > posY99 &&
      mouseY < posY99 + tamH99) {
  
      numBH = tablaEmpleoH.getNum(20, 5);
      numBM = tablaEmpleoM.getNum(20, 5);
        
        estadiosH = 6 ;
        estadiosM = 11 ;
    } else
      if (mouseX > posX00 &&
      mouseX < posX00 + tamW00 &&
      mouseY > posY00 &&
      mouseY < posY00 + tamH00) {
  
      numBH = tablaEmpleoH.getNum(19, 5);
      numBM = tablaEmpleoM.getNum(19, 5);
        
        estadiosH = 5 ;
        estadiosM = 11 ;
    } else
      if (mouseX > posX01 &&
      mouseX < posX01 + tamW01 &&
      mouseY > posY01 &&
      mouseY < posY01 + tamH01) {
  
      numBH = tablaEmpleoH.getNum(18, 5);
      numBM = tablaEmpleoM.getNum(18, 5);
        
        estadiosH = 6 ;
        estadiosM = 26/100 ;
    } else
      if (mouseX > posX02 &&
      mouseX < posX02 + tamW02 &&
      mouseY > posY02 &&
      mouseY < posY02 + tamH02) {
  
      numBH = tablaEmpleoH.getNum(17, 5);
      numBM = tablaEmpleoM.getNum(17, 5);
        
        estadiosH = 6 ;
        estadiosM = 25 ;
    } else
      if (mouseX > posX03 &&
      mouseX < posX03 + tamW03 &&
      mouseY > posY03 &&
      mouseY < posY03 + tamH03) {
  
      numBH = tablaEmpleoH.getNum(16, 5);
      numBM = tablaEmpleoM.getNum(16, 5);
        
        estadiosH = 6 ;
        estadiosM = 26 ;
    } else
       if (mouseX > posX04 &&
      mouseX < posX04 + tamW04 &&
      mouseY > posY04 &&
      mouseY < posY04 + tamH04) {
  
      numBH = tablaEmpleoH.getNum(15, 5);
      numBM = tablaEmpleoM.getNum(15, 5);
         
         estadiosH = 5 ;
        estadiosM = 26 ;
    } else
       if (mouseX > posX05 &&
      mouseX < posX05 + tamW05 &&
      mouseY > posY05 &&
      mouseY < posY05 + tamH05) {
  
      numBH = tablaEmpleoH.getNum(14, 5);
      numBM = tablaEmpleoM.getNum(14, 5);
         
         estadiosH = 5/100 ;
        estadiosM = 25 ;
    } else
       if (mouseX > posX06 &&
      mouseX < posX06 + tamW06 &&
      mouseY > posY06 &&
      mouseY < posY06 + tamH06) {
  
      numBH = tablaEmpleoH.getNum(13, 5);
      numBM = tablaEmpleoM.getNum(13, 5);
         estadiosH =  4;
        estadiosM = 22 ;
    } else
       if (mouseX > posX07 &&
      mouseX < posX07 + tamW07 &&
      mouseY > posY07 &&
      mouseY < posY07 + tamH07) {
  
      numBH = tablaEmpleoH.getNum(12, 5);
      numBM = tablaEmpleoM.getNum(12, 5);
         estadiosH = 4 ;
        estadiosM = 24 ;
    } else
       if (mouseX > posX08 &&
      mouseX < posX08 + tamW08 &&
      mouseY > posY08 &&
      mouseY < posY08 + tamH08) {
  
      numBH = tablaEmpleoH.getNum(11, 5);
      numBM = tablaEmpleoM.getNum(11, 5);
         estadiosH = 4 ;
        estadiosM = 23 ;
    } else
       if (mouseX > posXvolver &&
      mouseX < posXvolver + tamWvolver &&
      mouseY > posYvolver &&
      mouseY < posYvolver + tamHvolver) {
  
      img=2;
    }
}else if (img==6){ 
      background(0);
  
    foto=tunja;
     fechas= new botonesFecha();
    
  //texto pregunta  
      fill(255);
      rect(3, 35, width, 45);
      fill(0);
      text("¿Cuántas veces la población de Tunja llenarían con el número de empleados del sector agricultor por año y por género?", 10, 50, width, 200);
            
      hombre = new bolaAzul();
      hombre.aparecer();

      mujer = new bolaRosa();
      mujer.aparecer();

      textoH = new textoAzul();
      textoH.mostrar();

      textoM = new textoRosa();
      textoM.mostrar();
        
    
    if (mouseX > posX98 &&
      mouseX < posX98 + tamW98 &&
      mouseY > posY98 &&
      mouseY < posY98 + tamH98) {
        
      numBH = tablaEmpleoH.getNum(32, 5);
      numBM = tablaEmpleoM.getNum(32, 5);
        
        estadiosH = 0.2/100;;
        estadiosM = 15/100 ;  
      
    } else
      
      if (mouseX > posX99 &&
      mouseX < posX99 + tamW99 &&
      mouseY > posY99 &&
      mouseY < posY99 + tamH99) {
  
      numBH = tablaEmpleoH.getNum(31, 5);
      numBM = tablaEmpleoM.getNum(31, 5);
        
        estadiosH = 0.3/100; ;
        estadiosM = 0.1/100 ;
    } else
      if (mouseX > posX00 &&
      mouseX < posX00 + tamW00 &&
      mouseY > posY00 &&
      mouseY < posY00 + tamH00) {
  
      numBH = tablaEmpleoH.getNum(30, 5);
      numBM = tablaEmpleoM.getNum(30, 5);
        
        estadiosH = 0.3/100;
        estadiosM = 13/100 ;
    } else
      if (mouseX > posX01 &&
      mouseX < posX01 + tamW01 &&
      mouseY > posY01 &&
      mouseY < posY01 + tamH01) {
  
      numBH = tablaEmpleoH.getNum(29, 5);
      numBM = tablaEmpleoM.getNum(29, 5);
        
        estadiosH = 17/100 ;
        estadiosM = 4/100 ;
    } else
      if (mouseX > posX02 &&
      mouseX < posX02 + tamW02 &&
      mouseY > posY02 &&
      mouseY < posY02 + tamH02) {
  
      numBH = tablaEmpleoH.getNum(28, 5);
      numBM = tablaEmpleoM.getNum(6, 5);
        
        estadiosH = 15 ;
        estadiosM = 3 ;
    } else
      if (mouseX > posX03 &&
      mouseX < posX03 + tamW03 &&
      mouseY > posY03 &&
      mouseY < posY03 + tamH03) {
  
      numBH = tablaEmpleoH.getNum(27, 5);
      numBM = tablaEmpleoM.getNum(27, 5);
        
        estadiosH = 15;
        estadiosM = 5;
    } else
       if (mouseX > posX04 &&
      mouseX < posX04 + tamW04 &&
      mouseY > posY04 &&
      mouseY < posY04 + tamH04) {
  
      numBH = tablaEmpleoH.getNum(26, 5);
      numBM = tablaEmpleoM.getNum(26, 5);
         
         estadiosH = 15 ;
        estadiosM = 4 ;
    } else
       if (mouseX > posX05 &&
      mouseX < posX05 + tamW05 &&
      mouseY > posY05 &&
      mouseY < posY05 + tamH05) {
  
      numBH = tablaEmpleoH.getNum(25, 5);
      numBM = tablaEmpleoM.getNum(25, 5);
         
         estadiosH = 17 ;
        estadiosM = 5;
    } else
       if (mouseX > posX06 &&
      mouseX < posX06 + tamW06 &&
      mouseY > posY06 &&
      mouseY < posY06 + tamH06) {
  
      numBH = tablaEmpleoH.getNum(24, 5);
      numBM = tablaEmpleoM.getNum(24, 5);
         estadiosH = 1;
        estadiosM = 3 ;
    } else
       if (mouseX > posX07 &&
      mouseX < posX07 + tamW07 &&
      mouseY > posY07 &&
      mouseY < posY07 + tamH07) {
  
      numBH = tablaEmpleoH.getNum(23, 5);
      numBM = tablaEmpleoM.getNum(23, 5);
         estadiosH = 14 ;
        estadiosM = 4;
    } else
       if (mouseX > posX08 &&
      mouseX < posX08 + tamW08 &&
      mouseY > posY08 &&
      mouseY < posY08 + tamH08) {
  
      numBH = tablaEmpleoH.getNum(22, 5);
      numBM = tablaEmpleoM.getNum(2, 5);
         estadiosH = 14 ;
        estadiosM =  4/100;
    } else
       if (mouseX > posXvolver &&
      mouseX < posXvolver + tamWvolver &&
      mouseY > posYvolver &&
      mouseY < posYvolver + tamHvolver) {
  
      img=2;
    }
}
}