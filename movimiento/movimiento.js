//arreglos de variables de posición, tamaño y cantidad de peces
var posxpez = [];
var posypez= [];
var tamxpez = [];
var tamypez = [];
var cantpez = 50;

//arreglos de variables de posición, tamaño y cantidad de ballenas
var posxballena = [];
var posyballena = [];
var tamxballena = [];
var tamyballena = [];
var cantballena = 2;

//arreglos de variables de posición, tamaño y cantidad de buzo
var posxbuzo = [];
var posybuzo = [];
var tamxbuzo = [];
var tamybuzo = [];
var cantbuzo = 4;

//arreglos de variables de posición, tamaño y cantidad de caballitos de mar
var posxcaballo = [];
var posycaballo = [];
var tamxcaballo = [];
var tamycaballo = [];
var cantcaballo = 20;

//arreglos de variables de posición, tamaño y cantidad de medusas
var posxmedusa = [];
var posymedusa = [];
var tamxmedusa = [];
var tamymedusa = [];
var cantmedusa = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(143, 174, 187);
  ellipse(100, 50, 35, 15);

//designación de posiciones random y tamaños especifico para el pez
  for (var i = 0; i < cantpez; i = i +1) {
    posxpez[i]= random(width);
    posypez[i]= random (height); 
    tamxpez[i]=35;
    tamypez[i]=15;
  }

//designación de posiciones random y tamaños especifico para la ballena
  for (var b = 0; b < cantballena; b = b +1) {
    posxballena[b]= random(width);
    posyballena[b]= random (height); 
    tamxballena[b]=300;
    tamyballena[b]=105;
  }

//designación de posiciones random y tamaños especifico para el buzo
  for (var z = 0; z < cantbuzo; z = z +1) {
    posxbuzo[z]= random(width);
    posybuzo[z]= random (height); 
    tamxbuzo[z]=80;
    tamybuzo[z]=80;
  }

//designación de posiciones random y tamaños especifico para el caballito de mar
  for (var c = 0; c < cantcaballo; c = c +1) {
    posxcaballo[c]= random(width);
    posycaballo[c]= random (height); 
    tamxcaballo[c]=20;
    tamycaballo[c]=20;
  }

//designación de posiciones random y tamaños especifico para la medusa
  for (var m = 0; m < cantmedusa; m = m +1) {
    posxmedusa[m]= random(width);
    posymedusa[m]= random (height); 
    tamxmedusa[m]=40;
    tamymedusa[m]=40;
  }
}


function draw() {
  background(221, 242, 246);
  noStroke();



  for (var i = 0; i < cantpez; i = i +1) {
    
    //Dibujo de la figura del pez
    fill(143, 174, 187);
    ellipse(posxpez[i], posypez[i], tamxpez[i], tamypez[i]);
    triangle(posxpez[i] +12, posypez[i]-4, posxpez[i]+35, posypez[i]-5, posxpez[i]+15, posypez[i]+4);
    triangle(posxpez[i]+10, posypez[i]-5, posxpez[i]+35, posypez[i]+10, posxpez[i]+7, posypez[i]+7);
    triangle(posxpez[i]+10, posypez[i]-5, posxpez[i]+15, posypez[i]-12, posxpez[i]-5, posypez[i]-5);
    fill(116, 138, 148);
    triangle(posxpez[i]+2, posypez[i], posxpez[i]+10, posypez[i]+5, posxpez[i]+8, posypez[i]);
    fill(255);
    ellipse(posxpez[i] - 10, posypez[i], tamxpez[i]-28, tamypez[i]-8);
    fill(0);
    ellipse(posxpez[i] - 10, posypez[i], tamxpez[i]-32, tamypez[i]-10);
    
    //posiciones del pez en movimiento 
    posxpez[i] = posxpez[i] + random(1, -10);
    posypez[i] = posypez[i] + random(2, 1);

    // funcion para que la especie no se salga de la pantalla
    if (posxpez[i]>windowWidth) {
      posxpez[i]=0;
    }
    if (posxpez[i]<0) {
      posxpez[i]=windowWidth;
    }

    if (posypez[i]>windowHeight) {
      posypez[i]=0;
    }

    if (posypez[i]<0) {
      posypez[i]=windowHeight;
    }
  }

  for (var b = 0; b < cantballena; b = b +1) {
    
    //Dibujo de la figura de la ballena
    fill(0);
    ellipse(posxballena[b], posyballena[b], tamxballena[b], tamyballena[b]);
    triangle(posxballena[b]-80, posyballena[b], posxballena[b]-210, posyballena[b], posxballena[b]-250, posyballena[b]+60);
    triangle(posxballena[b]-80, posyballena[b]+1, posxballena[b]-210, posyballena[b]+1, posxballena[b]-250, posyballena[b]-60);
    triangle(posxballena[b]-75, posyballena[b]-40, posxballena[b]+85, posyballena[b]-40, posxballena[b]-75, posyballena[b]-75);
    fill(255);
    ellipse(posxballena[b]+50, posyballena[b]-10, tamxballena[b]-200, tamyballena[b]-60);
    quad(posxballena[b]+150, posyballena[b], posxballena[b]+100, posyballena[b], posxballena[b]+25, posyballena[b]+52, posxballena[b]+120, posyballena[b]+30);
    triangle(posxballena[b]+100, posyballena[b]+40, posxballena[b]+150, posyballena[b], posxballena[b]+145, posyballena[b]+20);
    triangle(posxballena[b]+134, posyballena[b]+25, posxballena[b]+25, posyballena[b]+52, posxballena[b]+90, posyballena[b]+46);

    //posiciones de la ballena en movimiento 
    posxballena[b] = posxballena[b] + random(1, 2 );
    posyballena[b] = posyballena[b] + random(-1, -2);

    // funcion para que la especie no se salga de la pantalla
    if (posxballena[b]>windowWidth) {
      posxballena[b]=0;
    }
    if (posxballena[b]<0) {
      posxballena[b]=windowWidth;
    }

    if (posyballena[b]>windowHeight) {
      posyballena[b]=0;
    }

    if (posyballena[b]<0) {
      posyballena[b]=windowHeight;
    }
  }

  for (var z = 0; z < cantbuzo; z = z +1) {
    
    //Dibujo de la figura del buzo
    fill(124, 54, 12);
    rect(posxbuzo[z]-40, posybuzo[z]+30, tamxbuzo[z]+3, tamybuzo[z]-65);
    fill(154, 63, 8);
    ellipse(posxbuzo[z], posybuzo[z], tamxbuzo[z], tamybuzo[z]);
    rect(posxbuzo[z]-50, posybuzo[z]-10, tamxbuzo[z]-65, tamybuzo[z]-60);
    rect(posxbuzo[z]+35, posybuzo[z]-10, tamxbuzo[z]-65, tamybuzo[z]-60);
    line(posxbuzo[z]-10, posybuzo[z]-10, posxbuzo[z]-10, posybuzo[z]+10);
    fill(124, 54, 12);
    ellipse(posxbuzo[z], posybuzo[z], tamxbuzo[z]-20, tamybuzo[z]-20);
    fill(80);
    ellipse(posxbuzo[z], posybuzo[z], tamxbuzo[z]-40, tamybuzo[z]-40);
    fill(124, 54, 12);
    rect(posxbuzo[z]-10, posybuzo[z]-20, tamxbuzo[z]-77, tamybuzo[z]-40);
    rect(posxbuzo[z]+5, posybuzo[z]-20, tamxbuzo[z]-77, tamybuzo[z]-40);
    rect(posxbuzo[z]-20, posybuzo[z]-6, tamxbuzo[z]-40, tamybuzo[z]-77);
    rect(posxbuzo[z]-20, posybuzo[z]+5, tamxbuzo[z]-40, tamybuzo[z]-77);
    fill(149, 213, 241);
    ellipse(posxbuzo[z]+20, posybuzo[z]-46, tamxbuzo[z]-70, tamybuzo[z]-70);
    ellipse(posxbuzo[z]+32, posybuzo[z]-52, tamxbuzo[z]-68, tamybuzo[z]-68);
    ellipse(posxbuzo[z]+35, posybuzo[z]-70, tamxbuzo[z]-60, tamybuzo[z]-60);

    //posiciones del buzo en movimiento 
    posxbuzo[z] = posxbuzo[z] + random(-1, 1);
    posybuzo[z] = posybuzo[z] + random(2, 1);
    
    // funcion para que la especie no se salga de la pantalla
    if (posxbuzo[z]>windowWidth) {
      posxbuzo[z]=0;
    }
    if (posxbuzo[z]<0) {
      posxbuzo[z]=windowWidth;
    }

    if (posybuzo[z]>windowHeight) {
      posybuzo[z]=0;
    }

    if (posybuzo[z]<0) {
      posybuzo[z]=windowHeight;
    }
  }

  for (var c = 0; c < cantcaballo; c = c +1) {
    
    //Dibujo de la figura del caballito de mar
    fill(235, 116, 4);
    ellipse(posxcaballo[c], posycaballo[c], tamxcaballo[c], tamycaballo[c]);
    rect(posxcaballo[c], posycaballo[c]-2, tamxcaballo[c], tamycaballo[c]-15);
    quad(posxcaballo[c]-10, posycaballo[c], posxcaballo[c], posycaballo[c], posxcaballo[c]+10, posycaballo[c]+20, posxcaballo[c]-10, posycaballo[c]+20);
    quad(posxcaballo[c]+10, posycaballo[c]+19, posxcaballo[c]-10, posycaballo[c]+19, posxcaballo[c]-10, posycaballo[c]+40, posxcaballo[c], posycaballo[c]+40);
    quad(posxcaballo[c]-17, posycaballo[c]+10, posxcaballo[c], posycaballo[c]+20, posxcaballo[c], posycaballo[c]+25, posxcaballo[c]-17, posycaballo[c]+35);
    quad(posxcaballo[c], posycaballo[c]+65, posxcaballo[c]-10, posycaballo[c]+39, posxcaballo[c], posycaballo[c]+39)
      fill(0);
    ellipse(posxcaballo[c]+2, posycaballo[c], tamxcaballo[c]-16, tamycaballo[c]-16);

    //posiciones del caballito de mar en movimiento
    posxcaballo[c] = posxcaballo[c] + random(1, 1);
    posycaballo[c] = posycaballo[c] + random(1, -1);

    // funcion para que la especie no se salga de la pantalla
    if (posxcaballo[c]>windowWidth) {
      posxcaballo[c]=0;
    }
    if (posxcaballo[c]<0) {
      posxcaballo[c]=windowWidth;
    }

    if (posycaballo[c]>windowHeight) {
      posycaballo[c]=0;
    }

    if (posycaballo[c]<0) {
      posycaballo[c]=windowHeight;
    }
  }

  for (var m = 0; m < cantmedusa; m = m +1) {
    
    //Dibujo de la figura de la medusa
    fill(250, 205, 219);
    arc(posxmedusa[m], posymedusa[m], tamxmedusa[m], tamymedusa[m], PI, TWO_PI);
    rect(posxmedusa[m]-20, posymedusa[m], tamxmedusa[m]-35, tamymedusa[m]-28);
    rect(posxmedusa[m]-10, posymedusa[m], tamxmedusa[m]-35, tamymedusa[m]-15);
    rect(posxmedusa[m]+2, posymedusa[m], tamxmedusa[m]-35, tamymedusa[m]-25);
    rect(posxmedusa[m]+14, posymedusa[m], tamxmedusa[m]-35, tamymedusa[m]-20);

    //posiciones de la medusa en movimiento 
    posxmedusa[m] = posxmedusa[m] + random(-1, 1);
    posymedusa[m] = posymedusa[m] + random(-3, 1);

    // funcion para que la especie no se salga de la pantalla
    if (posxmedusa[m]>windowWidth) {
      posxmedusa[m]=0;
    }
    if (posxmedusa[m]<0) {
      posxmedusa[m]=windowWidth;
    }

    if (posymedusa[m]>windowHeight) {
      posymedusa[m]=0;
    }

    if (posymedusa[m]<0) {
      posymedusa[m]=windowHeight;
    }
  }
}
