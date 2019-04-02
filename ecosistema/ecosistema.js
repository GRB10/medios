// VARIABLES 
var viva = true;
var direccion= 10;

//los peces
var escamas;
var cardumen = [];
var numEscamas = 50;
var azul;

//los buzos
var tim;
var jack
  var excursion = [];
var numJack = 1;

//la ballena
var shamu;
var numShamu = 0;

//las medusas
var squishy;
var familia = [];
var numSquishy = 7;

// los caballitos de mar
var sheldon;
var grupo = [];
var numSheldon = 10;




function setup() {
  createCanvas(windowWidth, windowHeight);

  //NUMERO Y POSICION DE ANIAMLES QUE SE DIBUJAN EN EL CANVAS

  //los peces
  escamas = new pez(random(width), random(height));
  azul = new pez(random(width), random(height));

  for (var i = 0; i < numEscamas; i = i + 1) {
    cardumen[i] = new pez(random(width), random(height));
  }


  //los buzos
  tim = new buzo(random(width), random(height));

  jack = new buzo2(random(width), random(height));
  for (var z = 0; z < numJack; z = z + 1) {
    excursion[z] = new buzo2(random(width), random(height));
  }

  //la ballena
  shamu = new ballena(random(width), random(height));

  //las medusas
  squishy = new medusa(random(width), random(height));

  for (var m = 0; m < numSquishy; m = m + 1) {
    familia[m] = new medusa(random(width), random(height));
  }

  //los caballitos de mar
  sheldon = new caballo(random(width), random(height));

  for (var c = 0; c < numSheldon; c = c + 1) {
    grupo[c] = new caballo(random(width), random(height));
  }
}


function draw() {
  background(220);

  //DIBUJO DE LOS ANIMALES EN EL CANVAS

  //los peces
  escamas.dibujarse();
  escamas.moverse();

  for (var i = 0; i < numEscamas; i = i + 1) {
    cardumen[i].dibujarse();
    cardumen[i].moverse();

    //funcion para que la ballena se coma los peces
    if (dist(shamu.miX+180, shamu.miY, cardumen[i].miX, cardumen[i].miY) < 25) {
      cardumen[i].morir();
    }
  }

  //los buzos
  tim.dibujarse();
  tim.moverse();

  jack.dibujarse();
  jack.moverse();

  for (var z = 0; z < numJack; z = z + 1) {
    excursion[z].dibujarse();
    excursion[z].moverse();
  }

  //la ballena
  shamu.dibujarse();
  shamu.moverse();

  // las medusas
  squishy.dibujarse();
  squishy.moverse();

  for (var m = 0; m < numSquishy; m = m + 1) {
    familia[m].dibujarse();
    familia[m].moverse();
  }

  //los caballitos de mar
  sheldon.dibujarse();
  sheldon.moverse();

  //funcion para que el buzo tim mate a el caballitos de mar sheldon y al resto del grupo, por medio del click del mouse
  if (dist(mouseX, mouseY, sheldon.miX, sheldon.miY) < 25) {
    if (mouseIsPressed == true) {
      sheldon.morir();
    }
  }

  for (var c = 0; c < numSheldon; c = c + 1) {
    grupo[c].dibujarse();
    grupo[c].moverse();
    if (dist(mouseX, mouseY, grupo[c].miX, grupo[c].miY) < 25) {
      if (mouseIsPressed == true) {
        grupo[c].morir();
      }
    }
  }
}

//FUNCION PARA LA ESPECIE PEZ
function pez(_x, _y) {

  this.miX = _x;
  this.miY = _y;
  this.miXtam = 35;
  this.miYtam = 15;
  this.viva = true;
  this.direccion = 1;

  //dibujo de la forma del pez que solo se dibuja si la afirmacion this.viva es verdadera

  this.dibujarse = function() {
    if (this.viva == true) {

      noStroke();
      fill(143, 174, 187);
      ellipse(this.miX, this.miY, this.miXtam, this.miYtam);
      triangle(this.miX + 12, this.miY - 4, this.miX + 35, this.miY - 5, this.miX + 15, this.miY + 4);
      triangle(this.miX + 10, this.miY - 5, this.miX + 35, this.miY + 10, this.miX + 7, this.miY + 7);
      triangle(this.miX + 10, this.miY - 5, this.miX + 15, this.miY - 12, this.miX - 5, this.miY - 5);
      fill(116, 138, 148);
      triangle(this.miX + 2, this.miY, this.miX + 10, this.miY + 5, this.miX + 8, this.miY);
      fill(255);
      ellipse(this.miX - 10, this.miY, this.miXtam - 28, this.miYtam - 8);
      fill(0);
      ellipse(this.miX - 10, this.miY, this.miXtam - 32, this.miYtam - 10);
    }
  }

  //movimiento de los peces para que vayan para la derecha y al salir de la pantalla vuelvan a entrar por el otro 
  this.moverse = function() {

    this.miX = this.miX + random(1, -7);
    this.miY = this.miY + random(2, 1);

    if (this.miX > windowWidth) {
      this.miX = 0;
    }
    if (this.miX < 0) {
      this.miX = windowWidth;
    }

    if (this.miY > windowHeight) {
      this.miY = 0;
    }

    if (this.miY < 0) {
      this.miY = windowHeight;
    }

    //si la afirmacion this.viva es falsa significa que la especie ballena esta en el mismo punto que el pez, matando y "comiendose" al pez.
    this.morir = function() {
      this.viva = false;
      if (this.miX == shamu.miX) {
        this.viva = false;
      }
      if (this.miY == shamu.miY) {
        this.viva = false;
      }
    }
  }
}


//FUNCION PARA LA ESPECIE BUZO
function buzo() {

  this.miX = mouseX;
  this.miY = mouseY;
  this.miXtam = 80;
  this.miYtam = 80;

  //dibujo de la forma del buzo
  this.dibujarse = function() {

    fill(124, 54, 12);
    rect(this.miX - 40, this.miY + 30, this.miXtam + 3, this.miYtam - 65);
    fill(154, 63, 8);
    ellipse(this.miX, this.miY, this.miXtam, this.miYtam);
    rect(this.miX - 50, this.miY - 10, this.miXtam - 65, this.miYtam - 60);
    rect(this.miX + 35, this.miY - 10, this.miXtam - 65, this.miYtam - 60);
    line(this.miX - 10, this.miY - 10, this.miX - 10, this.miY + 10);
    fill(124, 54, 12);
    ellipse(this.miX, this.miY, this.miXtam - 20, this.miYtam - 20);
    fill(80);
    ellipse(this.miX, this.miY, this.miXtam - 40, this.miYtam - 40);
    fill(124, 54, 12);
    rect(this.miX - 10, this.miY - 20, this.miXtam - 77, this.miYtam - 40);
    rect(this.miX + 5, this.miY - 20, this.miXtam - 77, this.miYtam - 40);
    rect(this.miX - 20, this.miY - 6, this.miXtam - 40, this.miYtam - 77);
    rect(this.miX - 20, this.miY + 5, this.miXtam - 40, this.miYtam - 77);
    fill(149, 213, 241);
    ellipse(this.miX + 20, this.miY - 46, this.miXtam - 70, this.miYtam - 70);
    ellipse(this.miX + 32, this.miY - 52, this.miXtam - 68, this.miYtam - 68);
    ellipse(this.miX + 35, this.miY - 70, this.miXtam - 60, this.miYtam - 60);
  }

  //movimiento del buzo para que vayan sigan el cursor todo el tiempo
  this.moverse = function() {
    this.miX = mouseX;
    this.miY = mouseY;

    if (this.miY > windowHeight) {
      this.miY = 0;
    }

    if (this.miY < 0) {
      this.miY = windowHeight;
    }
  }
}

//FUNCION PARA LA ESPECIE BUZO2
function buzo2(_x, _y) {

  this.miX = _x;
  this.miY = _y;
  this.miXtam = 80;
  this.miYtam = 80;

  //dibujo de la forma los buzo2
  this.dibujarse = function() {

    fill(124, 54, 12);
    rect(this.miX - 40, this.miY + 30, this.miXtam + 3, this.miYtam - 65);
    fill(154, 63, 8);
    ellipse(this.miX, this.miY, this.miXtam, this.miYtam);
    rect(this.miX - 50, this.miY - 10, this.miXtam - 65, this.miYtam - 60);
    rect(this.miX + 35, this.miY - 10, this.miXtam - 65, this.miYtam - 60);
    line(this.miX - 10, this.miY - 10, this.miX - 10, this.miY + 10);
    fill(124, 54, 12);
    ellipse(this.miX, this.miY, this.miXtam - 20, this.miYtam - 20);
    fill(80);
    ellipse(this.miX, this.miY, this.miXtam - 40, this.miYtam - 40);
    fill(124, 54, 12);
    rect(this.miX - 10, this.miY - 20, this.miXtam - 77, this.miYtam - 40);
    rect(this.miX + 5, this.miY - 20, this.miXtam - 77, this.miYtam - 40);
    rect(this.miX - 20, this.miY - 6, this.miXtam - 40, this.miYtam - 77);
    rect(this.miX - 20, this.miY + 5, this.miXtam - 40, this.miYtam - 77);
    fill(149, 213, 241);
    ellipse(this.miX + 20, this.miY - 46, this.miXtam - 70, this.miYtam - 70);
    ellipse(this.miX + 32, this.miY - 52, this.miXtam - 68, this.miYtam - 68);
    ellipse(this.miX + 35, this.miY - 70, this.miXtam - 60, this.miYtam - 60);
  }
  //movimiento de los buzos para que vayan hacia abajo 
  this.moverse = function() { 
    this.miX = this.miX  + random(-1, 1);
    this.miY  = this.miY  + random(2, 1);

    // funcion para que la especie no se salga de la pantalla y cuando vuelvan aperecer en en lo alto del canvas tengan una posicion randomica en la posicion x

    if (this.miY > windowHeight) {
      this.miY = 0;
      this.miX = random(width);
    }
  }
}


//FUNCION PARA LA ESPECIE BALLENA
function ballena(_x, _y) {

  this.miX = _x;
  this.miY = _y;
  this.miXtam = 300;
  this.miYtam = 105;

  //dibujo de la forma la ballena
  this.dibujarse = function() {

    fill(0);
    ellipse(this.miX, this.miY, this.miXtam, this.miYtam);
    triangle(this.miX - 80, this.miY, this.miX - 210, this.miY, this.miX - 250, this.miY + 60);
    triangle(this.miX - 80, this.miY + 1, this.miX - 210, this.miY + 1, this.miX - 250, this.miY - 60);
    triangle(this.miX - 75, this.miY - 40, this.miX + 85, this.miY - 40, this.miX - 75, this.miY - 75);
    fill(255);
    ellipse(this.miX + 50, this.miY - 10, this.miXtam - 200, this.miYtam - 60);
    quad(this.miX + 150, this.miY, this.miX + 100, this.miY, this.miX + 25, this.miY + 52, this.miX + 120, this.miY + 30);
    triangle(this.miX + 100, this.miY + 40, this.miX + 150, this.miY, this.miX + 145, this.miY + 20);
    triangle(this.miX + 134, this.miY + 25, this.miX + 25, this.miY + 52, this.miX + 90, this.miY + 46);
  }

  //movimiento de la ballena para que vayan hacia arriba y para la derecha y no se salga de la pantalla

  this.moverse = function() {
    this.miX = this.miX + random(1, 2);
    this.miY = this.miY + random(-1, -2);

    if (this.miX > windowWidth) {
      this.miX = 0;
    }
    if (this.miX < 0) {
      this.miX = windowWidth;
    }

    if (this.miY > windowHeight) {
      this.miY = 0;
    }

    if (this.miY < 0) {
      this.miY = windowHeight;
    }
  }
}

//FUNCION PARA LA ESPECIE MEDUSA
function medusa(_x, _y) {

  this.miX = _x;
  this.miY = _y;
  this.miXtam = 40;
  this.miYtam = 40;

  //dibujo de la forma las medusas
  this.dibujarse = function() {
    fill(238, 81, 147);
    arc(this.miX, this.miY, this.miXtam, this.miYtam, PI, TWO_PI);
    rect(this.miX - 20, this.miY, this.miXtam - 35, this.miYtam - 28);
    rect(this.miX - 10, this.miY, this.miXtam - 35, this.miYtam - 15);
    rect(this.miX + 2, this.miY, this.miXtam - 35, this.miYtam - 25);
    rect(this.miX + 14, this.miY, this.miXtam - 35, this.miYtam - 20);
  }

  //movimiento de las medusas para que se alejen del buzo y no se salga de la pantalla cambiando su direccion 

  this.moverse = function() {

    if (this.miX > windowWidth) {
      this.miX= this.miX + 35 * -direccion;
    }
    if (this.miX < 0) {
      this.miX= this.miX + 35 * direccion;
    }

    if (this.miY > windowHeight) {
      this.miY= this.miY + 15 * -direccion;
    }

    if (this.miY < 0) {
      this.miY= this.miY+ 15 * direccion;
    }

    if (tim.miX > this.miX) {
      this.miX = this.miX + random(-2, 0);
    }

    if (tim.miY > this.miY) {
      this.miY = this.miY + random(-2, 0);
    }

    if (tim.miX < this.miX) {
      this.miX = this.miX + random(0, 2);
    }

    if (tim.miY < this.miY) {
      this.miY = this.miY + random(0, 2);
    }
  }
}


//FUNCION PARA LA ESPECIE CABALLO DE MAR
function caballo(_x, _y) {

  this.miX = _x;
  this.miY = _y;
  this.miXtam = 20;
  this.miYtam = 20;
  this.viva = true;

  //dibujo de la forma de los caballos que solo se dibuja si la afirmacion this.viva es verdadera
  this.dibujarse = function() {
    if (this.viva == true) {

      fill(235, 116, 4);
      ellipse(this.miX, this.miY, this.miXtam, this.miYtam);
      rect(this.miX, this.miY - 2, this.miXtam, this.miYtam - 15);
      quad(this.miX - 10, this.miY, this.miX, this.miY, this.miX + 10, this.miY + 20, this.miX - 10, this.miY + 20);
      quad(this.miX + 10, this.miY + 19, this.miX - 10, this.miY + 19, this.miX - 10, this.miY + 40, this.miX, this.miY + 40);
      quad(this.miX - 17, this.miY + 10, this.miX, this.miY + 20, this.miX, this.miY + 25, this.miX - 17, this.miY + 35);
      quad(this.miX, this.miY + 65, this.miX - 10, this.miY + 39, this.miX, this.miY + 39)
        fill(0);
      ellipse(this.miX + 2, this.miY, this.miXtam - 16, this.miYtam - 16);
    }

    //movimiento de los caballos para que vayan para la derecha y al salir de la pantalla vuelvan a entrar por el otro 
    this.moverse = function() {
      this.miX = this.miX + random(1);
      this.miY = this.miY + random(1, -1);

      if (this.miX > windowWidth) {
        this.miX = 0;
      }
      if (this.miX < 0) {
        this.miX = windowWidth;
      }

      if (this.miY > windowHeight) {
        this.miY = 0;
      }

      if (this.miY < 0) {
        this.miY = windowHeight;
      }
    }

    //si la afirmacion this.viva es falsa significa que se hizo click en el animal, matando al caballo.
    this.morir = function() {
      this.viva = false;
    }
  }
}
