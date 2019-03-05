var miHora;
var miMinuto;
var miSegundo;

var miSegundoMod;
var miMinutoMod;
var miHoraMod;

var miDia;
var miMes;
var miAno;

var miDiaMod;
var miMesMod;
var miAnoMod;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  miHora= hour();
  miMinuto= minute();
  miSegundo= second();
  
  miSegundoMod= map(miSegundo, 0, 59, 0, width);
  miMinutoMod= map(miMinuto, 0, 59, 0, width);
  miHoraMod= map(miHora, 0, 23, 0, width);
  
  miDia= day();
  miMes= month();
  miAno= year();
  
  miDiaMod= map(miDia, 0, 31, 0, width);
  miMesMod= map(miMes, 0, 11, 0, width);
  miAnoMod= map(miAno, 0, 9, 0, width);
  
  
  noStroke();
  rect(0,20,width,30);
  stroke(0);
  line(miSegundoMod, 20, miSegundoMod, 50);

  noStroke();
  rect(0,60,width,30);
  stroke(0);
  line (miMinutoMod, 60, miMinutoMod, 90);
  
  noStroke();
  rect(0,100,width,30);
  stroke(0);
  line (miHoraMod, 100, miHoraMod, 130);
  
  noStroke();
  rect(0,140,width,30);
  stroke(0);
  line (miDiaMod, 140, miDiaMod, 170);
  
  noStroke();
  rect(0,180,width,30);
  stroke(0);
  line (miMesMod, 180, miMesMod, 210);
  
  noStroke();
  rect(0,220,width,30);
  stroke(0);
  line (miAnoMod, 220, miAnoMod, 250);
}
