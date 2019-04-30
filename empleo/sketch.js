var tablaEmpleo;
var calle;

var numfilas;
var numColumnas;

var i;

var mr;
var mrs;

var posX = 280;
var posY = 630;
var tam = 100;

var contadorAnos = 1988;
var contadorH = 476436;
var contadorM = 579462;
var contar = false;


function preload() {
 // mr = loadImage('assets/a.jpg');
 // mrs = loadImage('assets/b.jpg');
  tablaEmpleo = loadTable('assets/empleo.csv', 'csv', 'header');
  calle= loadImage('assets/empleo_casas.png');
  
}

function setup() {
  createCanvas(1000, 700);
  
  numFilas = tablaEmpleo.getRowCount();
  print(numFilas);
  numColumnas = tablaEmpleo.getColumnCount();

  //image(mr, 0, 0, 500, 350);
  //image(mrs, 500, 0, 500, 350);
  image(calle, 0, 0, 1000,700);

  noStroke();
  fill(255,0,0);
  ellipse(posX, posY, tam, tam);

  contadorAnos = 1988;
  contadorH = 476436;
  contadorM = 579462;
  contar = false;

}

function touchStarted() {

  if (mouseX > posX - 50 &&
    mouseX < posX + tam &&
    mouseY > posY - 50 &&
    mouseY < posY + tam) {
    contar = true;
  }
}

//cuando se deja de tocar la pantalla se activa esta funcion
function touchEnded() {

  //contar vuelve a ser falso y se reinicia el contador
  contar = false;
  contadorAnos = 1988;
  contadorH = 476436;
  contadorM = 579462;
}

function draw() {

  // rectangulos del texto
  fill(255);
  noStroke();
  
  //azul
  rect(40, 230, 120, 30);
  rect(175, 230, 120, 30);
  //verde
  rect(370, 230, 120, 30);
  rect(505, 230, 120, 30);
//rojo
  rect(700, 230, 120, 30);
  rect(835, 230, 120, 30);
  
  //cuadrado texto
  fill(0);
  noStroke();
  rect(0, 0, 400, 50);

  //texto
  fill(255);
  noStroke();
  text("Mantenga presionado el botón rojo para ver cómo el número de trabajadores en Colombia aumenta al pasar los años.", 20, 10, 380, 50);
  
  fill(102,102,102);
  rect(435,630, 50,50);
  fill(255);
  text(contadorAnos, 440, 640);
 

  fill(0);
  text("hombres: " + contadorH, 190, 250);

  fill(0);
  text("mujeres: " + contadorM, 60, 250);



  //contar: la cuenta aumenta si contar es true y si el numero de frame es multiplo de 10
  if ((frameCount % 10 != 0 && contar) && (contadorAnos <= 2007)) {

    //aumenta el valor del contador
    contadorAnos= contadorAnos + 1;
    
     if (contadorAnos == 1989) {
       
     contadorH = tablaEmpleo.getNum(116, 3);
    contadorM =  tablaEmpleo.getNum(119, 3);
      
  }
     if (contadorAnos == 1990) {
     contadorH = tablaEmpleo.getNum(110, 3);
    contadorM =  tablaEmpleo.getNum(113, 3);
  }
    if (contadorAnos == 1991) {
     contadorH = tablaEmpleo.getNum(104, 3);
    contadorM =  tablaEmpleo.getNum(107, 3);
  }
    if (contadorAnos == 1992) {
     contadorH = tablaEmpleo.getNum(98, 3);
    contadorM =  tablaEmpleo.getNum(101, 3);
  }
    if (contadorAnos == 1993) {
     contadorH = tablaEmpleo.getNum(92, 3);
    contadorM =  tablaEmpleo.getNum(95, 3);
  }
    if (contadorAnos == 1994) {
     contadorH = tablaEmpleo.getNum(86, 3);
    contadorM =  tablaEmpleo.getNum(89, 3);
  }
    if (contadorAnos == 1995) {
     contadorH = tablaEmpleo.getNum(80, 3);
    contadorM =  tablaEmpleo.getNum(83, 3);
  }
    if (contadorAnos == 1996) {
     contadorH = tablaEmpleo.getNum(74, 3);
    contadorM =  tablaEmpleo.getNum(77, 3);
  }
    if (contadorAnos == 1997) {
     contadorH = tablaEmpleo.getNum(68, 3);
    contadorM =  tablaEmpleo.getNum(71, 3);
      
  }if (contadorAnos == 1998) {
     contadorH = tablaEmpleo.getNum(62, 3);
    contadorM =  tablaEmpleo.getNum(65, 3);
  
    }if (contadorAnos == 1999) {
     contadorH = tablaEmpleo.getNum(56, 3);
    contadorM =  tablaEmpleo.getNum(60, 3);
  
  }if (contadorAnos == 2000) {
     contadorH = tablaEmpleo.getNum(50, 3);
    contadorM =  tablaEmpleo.getNum(53, 3);
  }

if (contadorAnos == 2001) {
     contadorH = tablaEmpleo.getNum(44, 3);
    contadorM =  tablaEmpleo.getNum(47, 3);
  }
    if (contadorAnos == 2002) {
     contadorH = tablaEmpleo.getNum(38, 3);
    contadorM =  tablaEmpleo.getNum(41, 3);
  }
    if (contadorAnos == 2003) {
     contadorH = tablaEmpleo.getNum(44, 3);
    contadorM =  tablaEmpleo.getNum(47, 3);
  }
    if (contadorAnos == 2004) {
     contadorH = tablaEmpleo.getNum(26, 3);
    contadorM =  tablaEmpleo.getNum(29, 3);
  }
    if (contadorAnos == 2005) {
     contadorH = tablaEmpleo.getNum(20, 3);
    contadorM =  tablaEmpleo.getNum(23, 3);
  }
    if (contadorAnos == 2006) {
     contadorH = tablaEmpleo.getNum(17, 3);
    contadorM =  tablaEmpleo.getNum(14, 3);
  }
    if (contadorAnos == 2007) {
     contadorH = tablaEmpleo.getNum(8, 3);
    contadorM =  tablaEmpleo.getNum(11, 3);
  }
     if (contadorAnos == 2008) {
     contadorH = tablaEmpleo.getNum(2, 3);
    contadorM =  tablaEmpleo.getNum(5, 3);
  }
}
}