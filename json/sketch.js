//http://shrouded-badlands-7922.herokuapp.com/artists

var datos;
var cuantos;
var img;

//Variables de posicion y tamaño para el punto del cuadro de Barot Bellingham
var posXA = 570;
var posYA = 395;
var tamA = 10;


//Variables de posicion y tamaño para el punto del cuadro de Jonathan Ferrar
var posXB = 142;
var posYB = 95;
var tamB = 10;


//Variables de posicion y tamaño para el punto del cuadro de Hillary Goldwynn
var posXC = 350;
var posYC = 50;
var tamC = 10;


//Variables de posicion y tamaño para el punto del cuadro de Hassum Harrod
var posXD = 465;
var posYD = 240;
var tamD = 10;


//Variables de posicion y tamaño para el punto del cuadro de Jennifer Jerome
var posXE = 330;
var posYE = 425;
var tamE = 10;


//Variables de posicion y tamaño para el punto del cuadro de LaVonne LaRue
var posXF = 485;
var posYF = 95;
var tamF = 10;


//Variables de posicion y tamaño para el punto del cuadro de Constance Smith
var posXG = 150;
var posYG = 245;
var tamG = 10;


//Variables de posicion y tamaño para el punto del cuadro de Riley Rewington
var posXH = 175;
var posYH = 370;
var tamH = 10;


//Variables de posicion y tamaño para el punto del cuadro de Xhou Ta
var posXI = 315;
var posYI = 235;
var tamI = 10;

//funcion para precargar las pared con las imagenes y la base de datos
function preload() {
  datos = loadJSON('assets/data.json');
  img = loadImage('assets/pared.png');
}


function setup() {
  createCanvas(800, 600);
}

function draw() {

  image(img, -74, 0);

  //dibujo del cuadro de en donde aparece el conteo de artistas en exibición
  noStroke();
  fill(200);
  rect(0, 0, 150, 30);
  fill(0);
  text('Artistas en exhibición:', 10, 20);
  text(datos.numero, 134, 20);
  cuantos = datos.numero;

  //Jonathan Ferrar
  fill(255, 0, 0);
  ellipse(142, 95, 10, 10);

  //Hillary Goldwynn
  fill(255, 0, 0);
  ellipse(350, 50, 10, 10);

  //LaVonne LaRue
  fill(255, 0, 0);
  ellipse(485, 95, 10, 10);

  //Constance Smit
  fill(255, 0, 0);
  ellipse(150, 245, 10, 10);

  //Xhou Ta
  fill(255, 0, 0);
  ellipse(315, 235, 10, 10);

  //Hassum Harrod
  fill(255, 0, 0);
  ellipse(465, 240, 10, 10);

  //Riley Rewington
  fill(255, 0, 0);
  ellipse(175, 370, 10, 10);

  //Jennifer Jerome
  fill(255, 0, 0);
  ellipse(330, 425, 10, 10);

  //Barot Bellingham
  fill(255, 0, 0);
  ellipse(570, 395, 10, 10);

  //Si el mouse esta presionando el boton rojo se abrira la descripción del artista.

  //solo se puede ver mientras el mouse esta presionado, al dejar de presionar la descripción desaparece. 

  //descripcion del artista Barot Bellingha
  if (mouseIsPressed == true) {
    if (mouseX > posXA &&
      mouseX < posXA + tamA &&
      mouseY > posYA &&
      mouseY < posYA + tamA) {
      for (var a = 0; a < 1; a = random) {

        fill(0, 0, 0, 170);
        rect(150, 80, 500, 440);

        var nombreA = datos.artistas[a].name;
        fill(255);
        textSize(40);
        text(nombreA, 395, 220);

        var shortNameA = datos.artistas[a].shortname;
        fill(255);
        textSize(20);
        text(shortNameA, 395, 260);


        var biografiaA = datos.artistas[a].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaA, 170, 300, 455, 400);

        var reknownA = datos.artistas[a].reknown;
        fill(255);
        textSize(12);
        text(reknownA, 410, 460);

      }
    }
  }

  //descripcion del artista Jonathan Ferrar
  if (mouseIsPressed == true) {
    if (mouseX > posXB &&
      mouseX < posXB + tamB &&
      mouseY > posYB &&
      mouseY < posYB + tamB) {

      for (var b = 1; b < 2; b = random) {

        fill(0, 0, 0, 200);
        rect(150, 80, 500, 440);

        var nombreB = datos.artistas[b].name;
        fill(255);
        textSize(40);
        text(nombreB, 390, 220);

        var shortNameB = datos.artistas[b].shortname;
        fill(255);
        textSize(20);
        text(shortNameB, 390, 260);


        var biografiaB = datos.artistas[b].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaB, 170, 300, 455, 400);

        var reknownB = datos.artistas[b].reknown;
        fill(255);
        textSize(12);
        text(reknownB, 410, 440);

      }
    }
  }

  //descripcion del artista Hillary Goldwynn
  if (mouseIsPressed == true) {
    if (mouseX > posXC &&
      mouseX < posXC + tamC &&
      mouseY > posYC &&
      mouseY < posYC + tamC) {
      for (var c = 2; c < 3; c = random) {

        fill(0, 0, 0, 170);
        rect(150, 80, 500, 440);

        var nombreC = datos.artistas[c].name;
        fill(255);
        textSize(36);
        text(nombreC, 400, 220);

        var shortNameC = datos.artistas[c].shortname;
        fill(255);
        textSize(20);
        text(shortNameC, 400, 260);


        var biografiaC = datos.artistas[c].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaC, 170, 300, 455, 400);

        var reknownC = datos.artistas[c].reknown;
        fill(255);
        textSize(12);
        text(reknownC, 410, 440);

      }
    }
  }

  //descripcion del artista Hassum Harrod
  if (mouseIsPressed == true) {
    if (mouseX > posXD &&
      mouseX < posXD + tamD &&
      mouseY > posYD &&
      mouseY < posYD + tamD) {
      for (var d = 3; d < 4; d = random) {

        fill(0, 0, 0, 170);
        rect(150, 80, 500, 440);

        var nombreD = datos.artistas[d].name;
        fill(255);
        textSize(36);
        text(nombreD, 395, 220);

        var shortNameD = datos.artistas[d].shortname;
        fill(255);
        textSize(20);
        text(shortNameD, 395, 260);


        var biografiaD = datos.artistas[d].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaD, 170, 300, 455, 400);

        var reknownD = datos.artistas[d].reknown;
        fill(255);
        textSize(12);
        text(reknownD, 410, 440);

      }
    }
  }

  //descripcion del artista Jennifer Jerome
  if (mouseIsPressed == true) {
    if (mouseX > posXE &&
      mouseX < posXE + tamE &&
      mouseY > posYE &&
      mouseY < posYE + tamE) {
      for (var e = 4; e < 5; e = random) {

        fill(0, 0, 0, 170);
        rect(150, 80, 500, 440);

        var nombreE = datos.artistas[e].name;
        fill(255);
        textSize(36);
        text(nombreE, 395, 220);

        var shortNameE = datos.artistas[e].shortname;
        fill(255);
        textSize(20);
        text(shortNameE, 395, 260);


        var biografiaE = datos.artistas[e].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaE, 170, 300, 455, 400);

        var reknownE = datos.artistas[e].reknown;
        fill(255);
        textSize(12);
        text(reknownE, 410, 440);

      }
    }
  }

  //descripcion del artista LaVonne LaRue
  if (mouseIsPressed == true) {
    if (mouseX > posXF &&
      mouseX < posXF + tamF &&
      mouseY > posYF &&
      mouseY < posYF + tamF) {
      for (var f = 5; f < 6; f = random) {

        fill(0, 0, 0, 170);
        rect(150, 80, 500, 440);

        var nombreF = datos.artistas[f].name;
        fill(255);
        textSize(36);
        text(nombreF, 395, 220);

        var shortNameF = datos.artistas[f].shortname;
        fill(255);
        textSize(20);
        text(shortNameF, 395, 260);


        var biografiaF = datos.artistas[f].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaF, 170, 300, 455, 400);

        var reknownF = datos.artistas[f].reknown;
        fill(255);
        textSize(12);
        text(reknownF, 410, 440);

      }
    }
  }

  //descripcion del artista Constance Smith
  if (mouseIsPressed == true) {
    if (mouseX > posXG &&
      mouseX < posXG + tamG &&
      mouseY > posYG &&
      mouseY < posYG + tamG) {
      for (var g = 6; g < 7; g = random) {

        fill(0, 0, 0, 170);
        rect(150, 80, 500, 440);

        var nombreG = datos.artistas[g].name;
        fill(255);
        textSize(36);
        text(nombreG, 395, 220);

        var shortNameG = datos.artistas[g].shortname;
        fill(255);
        textSize(20);
        text(shortNameG, 390, 260);


        var biografiaG = datos.artistas[g].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaG, 170, 300, 455, 400);

        var reknownG = datos.artistas[g].reknown;
        fill(255);
        textSize(12);
        text(reknownG, 410, 440);

      }
    }
  }

  //descripcion del artista Riley Rewingthon
  if (mouseIsPressed == true) {
    if (mouseX > posXH &&
      mouseX < posXH + tamH &&
      mouseY > posYH &&
      mouseY < posYH + tamH) {
      for (var h = 7; h < 8; h = random) {

        fill(0, 0, 0, 170);
        rect(150, 80, 500, 440);

        var nombreH = datos.artistas[h].name;
        fill(255);
        textSize(36);
        text(nombreH, 395, 220);

        var shortNameH = datos.artistas[h].shortname;
        fill(255);
        textSize(20);
        text(shortNameH, 395, 260);


        var biografiaH = datos.artistas[h].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaH, 170, 300, 455, 400);

        var reknownH = datos.artistas[h].reknown;
        fill(255);
        textSize(12);
        text(reknownH, 410, 470);

      }
    }
  }

  //descripcion del artista Xhou Ta
  if (mouseIsPressed == true) {
    if (mouseX > posXI &&
      mouseX < posXI + tamI &&
      mouseY > posYI &&
      mouseY < posYI + tamI) {
      for (var i = 8; i < 9; i = random) {

        fill(0, 0, 0, 170);
        rect(150, 80, 500, 440);

        var nombreI = datos.artistas[i].name;
        fill(255);
        textSize(36);
        text(nombreI, 395, 220);

        var shortNameI = datos.artistas[i].shortname;
        fill(255);
        textSize(20);
        text(shortNameI, 395, 260);


        var biografiaI = datos.artistas[i].bio;
        fill(255);
        textSize(14);
        textAlign(CENTER);
        text(biografiaI, 170, 300, 455, 400);

        var reknownI = datos.artistas[i].reknown;
        fill(255);
        textSize(12);
        text(reknownI, 410, 440);

      }
    }
  }

}