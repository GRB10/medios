var miSegundo;
var miMinuto;
var miHora;
var colorR;
var colorG;
var colorB;
var colorR2;
var colorG2;
var colorB2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 224, 189);
  miSegundo= second();
  miMinuto= minute(); 
  miHora= hour();

  miMinutoMod= map(miMinuto, 0, 60, 10, 700);
  miSegundoMod= map(miSegundo, 60, 0, 0, 700);

  //manilla
  fill(50);
  rect(0, windowHeight -500, windowWidth, windowHeight - 430);

  //circulo del tablero
  stroke(30);
  strokeWeight(10);
  fill(colorR2, colorG2, colorB2);
  ellipse(windowWidth/2, windowHeight/2, 700, 700);

  //circulo de minutos  
  noStroke();
  fill(colorR, colorG, colorB);
  ellipse(windowWidth/2, windowHeight/2, miMinutoMod, miMinutoMod);

  //circulo de segundos
  noStroke();
  fill(255, 255, 255, 20);
  ellipse(windowWidth/2, windowHeight/2, miSegundoMod, miSegundoMod);


  //color de la hora - 2. color de la hora anterior  
  if (miHora==miHora){
    
   if ((miHora=>0)&&(miHora<1)) {
      colorR=153;
      colorG=51;
      colorB=153;

      colorR2=102;
      colorG2=51;
      colorB2=153;
    } else

    if ((miHora=>1)&&(miHora<2)) {
      colorR=153;
      colorG=51;
      colorB=102;

      colorR2=153;
      colorG2=51;
      colorB2=153;
    } else

    if ((miHora=>2)&&(miHora<3)) {
      colorR=204;
      colorG=51;
      colorB=102;

      colorR2=153;
      colorG2=51;
      colorB2=102;
    } else

    if ((miHora=>3)&&(miHora<4)) {
      colorR=255;
      colorG=51;
      colorB=102;

      colorR2=204;
      colorG2=51;
      colorB2=102;
    } else

    if ((miHora=>4)&&(miHora<5)) {
      colorR=255;
      colorG=0;
      colorB=102;

      colorR2=255;
      colorG2=51;
      colorB2=102;
    } else

    if ((miHora=>5)&&(miHora<6)) {
      colorR=204;
      colorG=51;
      colorB=51;

      colorR2=255;
      colorG2=0;
      colorB2=102;
    } else

    if ((miHora=>6)&&(miHora<7)) {
      colorR=204;
      colorG=0;
      colorB=0;

      colorR2=204;
      colorG2=51;
      colorB2=51;
    } else

    if ((miHora=>7)&&(miHora<8)) {
      colorR=255;
      colorG=51;
      colorB=51;

      colorR2=204;
      colorG2=0;
      colorB2=0;
    } else

    if ((miHora=>8)&&(miHora<9)) {
      colorR=205;
      colorG=102;
      colorB=51;

      colorR2=255;
      colorG2=51;
      colorB2=51;
    } else

    if ((miHora=>9)&&(miHora<10)) {
      colorR=255;
      colorG=153;
      colorB=51;

      colorR2=205;
      colorG2=102;
      colorB2=51;
    } else

    if ((miHora=>10)&&(miHora<11)) {
      colorR=204;
      colorG=153;
      colorB=51;

      colorR2=255;
      colorG2=153;
      colorB2=51;
    } else

    if ((miHora=>11)&&(miHora<12)) {
      colorR=255;
      colorG=255;
      colorB=51;

      colorR2=204;
      colorG2=153;
      colorB2=51;
    } else

    if ((miHora=>12)&&(miHora<13)) {
      colorR=153;
      colorG=104;
      colorB=51;

      colorR2=255;
      colorG2=255;
      colorB2=51;
    } else

    if ((miHora=>13)&&(miHora<14)) {
      colorR=153;
      colorG=204;
      colorB=0;

      colorR2=153;
      colorG2=104;
      colorB2=51;
    } else

    if ((miHora=>14)&&(miHora<15)) {
      colorR=102;
      colorG=153;
      colorB=51;

      colorR2=153;
      colorG2=204;
      colorB2=0;
    } else

    if ((miHora=>15)&&(miHora<16)) {
      colorR=51;
      colorG=153;
      colorB=51;

      colorR2=102;
      colorG2=153;
      colorB2=51;
    } else

    if ((miHora=>16)&&(miHora<17)) {
      colorR=51;
      colorG=102;
      colorB=51;

      colorR2=51;
      colorG2=153;
      colorB2=51;
    } else

    if ((miHora=>17)&&(miHora<18)) {
      colorR=102;
      colorG=153;
      colorB=102;

      colorR2=51;
      colorG2=102;
      colorB2=51;
    } else

    if ((miHora=>18)&&(miHora<19)) {
      colorR=51;
      colorG=153;
      colorB=153;

      colorR2=102;
      colorG2=153;
      colorB2=102;
    } else

    if ((miHora=>19)&&(miHora<20)) {
      colorR=51;
      colorG=153;
      colorB=204;

      colorR2=51;
      colorG2=153;
      colorB2=153;
    } else

    if ((miHora=>20)&&(miHora<21)) {
      colorR=51;
      colorG=102;
      colorB=204;

      colorR2=51;
      colorG2=153;
      colorB2=204;
    } else

    if ((miHora=>21)&&(miHora<22)) {
      colorR=51;
      colorG=51;
      colorB=153;

      colorR2=51;
      colorG2=102;
      colorB2=204;
    } else
    
    if ((miHora=>22)&&(miHora<23)) {
    colorR=51;
    colorG=51;
    colorB=102;

    colorR2=51;
    colorG2=51;
    colorB2=153;
  } else

    if ((miHora=>23)&&(miHora<24)) {
      colorR=102;
      colorG=51;
      colorB=153;

      colorR2=51;
      colorG2=51;
      colorB2=102;
    }
  }
}
