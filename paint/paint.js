var posXblanco = 10;
var posYblanco = 10;
var tamBlanco = 20;

var posXamarillo = 35;
var posYamarillo = 10;
var tamAmarillo = 20;

var posXnaranja = 60;
var posYnaranja = 10;
var tamNaranja = 20;

var posXrojo = 85;
var posYrojo = 10;
var tamRojo = 20;

var posXmagenta = 110;
var posYmagenta = 10;
var tamMagenta = 20;

var posXmorado = 10;
var posYmorado = 35;
var tamMorado = 20;

var posXazul = 35;
var posYazul = 35;
var tamAzul = 20;

var posXcian = 60;
var posYcian = 35;
var tamCian = 20;

var posXverde = 85;
var posYverde = 35;
var tamVerde = 20;

var posXnegro = 110;
var posYnegro = 35;
var tamNegro = 20;

var posXher0 = 10;
var posYher0 = 110;
var tamHer0 = 25;

var posXher1 = 10;
var posYher1 = 140;
var tamHer1 = 25;

var posXher2 = 10;
var posYher2 = 170;
var tamHer2= 25;

var posXher3 = 10;
var posYher3 = 200;
var tamHer3 = 25;

var posXher4 = 10;
var posYher4 = 230;
var tamHer4 = 25;

var posXher5 = 10;
var posYher5 = 260;
var tamHer5 = 25;

var posXher6 = 10;
var posYher6 = 290;
var tamHer6 = 25;

var posXher7 = 10;
var posYher7 = 320;
var tamHer7 = 25;

var posXher8 = 10;
var posYher8 = 350;
var tamHer8 = 25;

var posXher9 = 10;
var posYher9 = 380;
var tamHer9 = 25;

var posXclean = 10;
var posYclean = 410;
var tamClean = 25;


var colSel = 0;
var herSel = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);
}

function draw() {
  noStroke();

  // Imagenes Botones de colores
  fill(255);
  rect(posXblanco, posYblanco, tamBlanco, tamBlanco);
  fill(255, 255, 0);
  rect(posXamarillo, posYamarillo, tamAmarillo, tamAmarillo);
  fill(244, 70, 17);
  rect(posXnaranja, posYnaranja, tamNaranja, tamNaranja);
  fill(255, 0, 0);
  rect(posXrojo, posYrojo, tamRojo, tamRojo);
  fill(255, 0, 255);
  rect(posXmagenta, posYmagenta, tamMagenta, tamMagenta);
  fill(128, 0, 128);
  rect(posXmorado, posYmorado, tamMorado, tamMorado);  
  fill(0, 0, 255);
  rect(posXazul, posYazul, tamAzul, tamAzul);
  fill(0, 255, 255);
  rect(posXcian, posYcian, tamCian, tamCian);
  fill(0, 255, 0);
  rect(posXverde, posYverde, tamVerde, tamVerde);
  fill(0);
  rect(posXnegro, posYnegro, tamNegro, tamNegro);

  // Imagenes Botones de herramientas

  fill(60);
  rect(posXher0, posYher0, tamHer0, tamHer0);
  fill(60);
  rect(posXher1, posYher1, tamHer1, tamHer1);
  fill(60);
  rect(posXher2, posYher2, tamHer2, tamHer2);
  fill(60);
  rect(posXher3, posYher3, tamHer3, tamHer3);
  fill(60);
  rect(posXher4, posYher4, tamHer4, tamHer4);
  fill(60);
  rect(posXher5, posYher5, tamHer5, tamHer5);
  fill(60);
  rect(posXher6, posYher6, tamHer6, tamHer6);
  fill(60);
  rect(posXher7, posYher7, tamHer7, tamHer7);
  fill(60);
  rect(posXher8, posYher8, tamHer8, tamHer8);
  fill(60);
  rect(posXher9, posYher9, tamHer9, tamHer9);

  fill(190);
  rect(posXclean, posYclean, tamClean, tamClean);

  // Seleccion Color
  if (colSel == 0) {
    // Blanco
    fill(255);
    stroke(255);
  } else if (colSel == 1) { 
    // amarillo
    fill(255, 255, 0);
    stroke(255, 255, 0);
  } else if (colSel == 2) { 
    // naranja
    fill(244, 70, 17);
    stroke(244, 70, 17);
  } else if (colSel == 3) { 
    // rojo
    fill(255, 0, 0);
    stroke(255, 0, 0);
  } else if (colSel == 4) { 
    // Magenta
    fill(255, 0, 255);
    stroke(255, 0, 255);
  } else if (colSel == 5) { 
    // Morado
    fill(128, 0, 128);
    stroke(128, 0, 128);
  } else if (colSel == 6) { 
    // azul
    fill(0, 0, 255);
    stroke(0, 0, 255);
  } else if (colSel == 7) { 
    // cian
    fill(0, 255, 255);
    stroke(0, 255, 255);
  } else if (colSel == 8) { 
    // cian
    fill(0, 255, 0);
    stroke(0, 255, 0);
  } else if (colSel == 9) { 
    // negro
    fill(0);
    stroke(0);
  }    

  if (mouseIsPressed == true) {

    if (herSel == 0) {
      arc(mouseX, mouseY, 40, 20, PI, TWO_PI);
    } else if (herSel == 1) {
      arc(mouseX, mouseY, 30, 30, radians(120), radians(300));
      ellipse(mouseX+3, mouseY+3, 10, 10);
    } else if (herSel == 2) {
      quad(mouseX, mouseY, mouseX+15, mouseY, mouseX+5, mouseY-10, mouseX-10, mouseY-10);
    } else if (herSel == 3) {
      quad(mouseX-5, mouseY-5, mouseX+15, mouseY-5, mouseX+5, mouseY+5, mouseX-15, mouseY+5);
      quad(mouseX-15, mouseY+5, mouseX-5, mouseY+5, mouseX-10, mouseY+15);
    } else if (herSel == 4) {
      quad(mouseX, mouseY-15, mouseX+5, mouseY-5, mouseX+15, mouseY, mouseX+5, mouseY+5); 
      quad(mouseX, mouseY+15, mouseX-5, mouseY+5, mouseX-15, mouseY, mouseX-5, mouseY-5);
    } else if (herSel == 5) {
      rect(mouseX, mouseY, 15, 5);
      rect(mouseX, mouseY, 5, 15);
    } else if (herSel == 6) {
      quad(mouseX, mouseY-5, mouseX+15, mouseY+15, mouseX, mouseY);
      quad(mouseX, mouseY-5, mouseX-15, mouseY+15, mouseX, mouseY);
    } else if (herSel == 7) {
      quad(mouseX, mouseY-10, mouseX+5, mouseY-10, mouseX+10, mouseY, mouseX+5, mouseY+10, mouseX, mouseY-15);
      quad(mouseX, mouseY-10, mouseX-5, mouseY-10, mouseX-10, mouseY, mouseX-5, mouseY+10, mouseX, mouseY-15);
    } else if (herSel == 8) {
      quad(mouseX-10, mouseY-5, mouseX+10, mouseY-5, mouseX+15, mouseY+5, mouseX-15, mouseY+5);
    } else if (herSel == 9) {
      quad(mouseX, mouseY-5, mouseX+10, mouseY-10, mouseX+12, mouseY-8, mouseX+2, mouseY);
      quad(mouseX+2, mouseY, mouseX+12, mouseY+8, mouseX+10, mouseY+10, mouseX, mouseY+5);
      quad(mouseX, mouseY-5, mouseX-10, mouseY-10, mouseX-12, mouseY-8, mouseX-2, mouseY);
      quad(mouseX-2, mouseY, mouseX-12, mouseY+8, mouseX-10, mouseY+10, mouseX, mouseY+5);
    } else if (herSel == 10) {
      background(230);
    }


    // Zona Sensible de los botones de colores
    if (mouseX > posXblanco 
      && mouseX < posXblanco   + tamBlanco  
      && mouseY > posYblanco  
      && mouseY < posYblanco   + tamBlanco  ) {
      colSel = 0;
    } 


    if (mouseX > posXamarillo 
      && mouseX < posXamarillo  + tamAmarillo 
      && mouseY > posYamarillo 
      && mouseY < posYamarillo  + tamAmarillo ) {
      colSel = 1;
    }

    if (mouseX > posXnaranja 
      && mouseX < posXnaranja  + tamNaranja 
      && mouseY > posYnaranja 
      && mouseY < posYnaranja  + tamNaranja ) {
      colSel = 2;
    }

    if (mouseX > posXrojo 
      && mouseX < posXrojo   + tamRojo  
      && mouseY > posYrojo  
      && mouseY < posYrojo   + tamRojo ) {
      colSel = 3;
    }

    if (mouseX > posXmagenta
      && mouseX < posXmagenta  + tamMagenta
      && mouseY > posYmagenta 
      && mouseY < posYmagenta  + tamMagenta ) {
      colSel = 4;
    }

    if (mouseX > posXmorado 
      && mouseX < posXmorado  + tamMorado 
      && mouseY > posYmorado 
      && mouseY < posYmorado  + tamMorado ) {
      colSel = 5;
    }

    if (mouseX > posXazul 
      && mouseX < posXazul  + tamAzul 
      && mouseY > posYazul 
      && mouseY < posYazul  + tamAzul ) {
      colSel = 6;
    }

    if (mouseX > posXcian
      && mouseX < posXcian  + tamCian
      && mouseY > posYcian 
      && mouseY < posYcian  + tamCian ) {
      colSel = 7;
    }

    if (mouseX > posXverde
      && mouseX < posXverde  + tamVerde 
      && mouseY > posYverde 
      && mouseY < posYverde  + tamVerde ) {
      colSel = 8;
    }

    if (mouseX > posXnegro 
      && mouseX < posXnegro  + tamNegro 
      && mouseY > posYnegro 
      && mouseY < posYnegro  + tamNegro ) {
      colSel = 9;
    }


    //Zona Sensible de los botones de herramientas
    if (mouseX > posXher0 
      && mouseX < posXher0   + tamHer0  
      && mouseY > posYher0  
      && mouseY < posYher0   + tamHer0  ) {
      herSel = 0;
    }


    if (mouseX > posXher1 
      && mouseX < posXher1   + tamHer1  
      && mouseY > posYher1  
      && mouseY < posYher1   + tamHer1  ) {
      herSel = 1;
    }

    if (mouseX > posXher2 
      && mouseX < posXher2   + tamHer2  
      && mouseY > posYher2  
      && mouseY < posYher2   + tamHer2  ) {
      herSel = 2;
    }

    if (mouseX > posXher3 
      && mouseX < posXher3   + tamHer3  
      && mouseY > posYher3  
      && mouseY < posYher3   + tamHer3  ) {
      herSel = 3;
    }


    if (mouseX > posXher4 
      && mouseX < posXher4   + tamHer4  
      && mouseY > posYher4  
      && mouseY < posYher4   + tamHer4  ) {
      herSel = 4;
    }

    if (mouseX > posXher5 
      && mouseX < posXher5   + tamHer5  
      && mouseY > posYher5  
      && mouseY < posYher5   + tamHer5  ) {
      herSel = 5;
    }

    if (mouseX > posXher6 
      && mouseX < posXher6   + tamHer6  
      && mouseY > posYher6  
      && mouseY < posYher6   + tamHer6  ) {
      herSel = 6;
    }

    if (mouseX > posXher7 
      && mouseX < posXher7   + tamHer7  
      && mouseY > posYher7  
      && mouseY < posYher7   + tamHer7  ) {
      herSel = 7;
    }

    if (mouseX > posXher8 
      && mouseX < posXher8  + tamHer8 
      && mouseY > posYher8  
      && mouseY < posYher8   + tamHer8  ) {
      herSel = 8;
    }

    if (mouseX > posXher9 
      && mouseX < posXher9   + tamHer9  
      && mouseY > posYher9  
      && mouseY < posYher9   + tamHer9  ) {
      herSel = 9;
    }

    if (mouseX > posXclean 
      && mouseX < posXclean   + tamClean  
      && mouseY > posYclean  
      && mouseY < posYclean   + tamClean  ) {
      herSel = 10;
    }
  }
}
