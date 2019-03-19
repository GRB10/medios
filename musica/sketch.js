//variables para sonido
var piano;
var violin;
var drums;
var guitarra;

//variables para imagenes
var pianoFoto;
var violinFoto;
var drumsFoto;
var guitarraFoto;

// variable del volumen
var vol;


function preload(){
  
  //sonidos cargados
  piano= loadSound('assets/piano.mp3');
  drums= loadSound('assets/drums.mp3');
  violin= loadSound('assets/violin.mp3');
  guitarra= loadSound('assets/guitarra.mp3');
  
  //imagenes cargadas
  pianoFoto= loadImage('assets/piano.png');
  drumsFoto= loadImage('assets/drums.png');
  guitarraFoto= loadImage('assets/guitarra.png');
  violinFoto= loadImage('assets/violin.png');
  
}



function setup() {
  createCanvas(800, 400);
  
  //fondos de colores
  noStroke();
  fill(0);
  rect(0,0,200,400);
  fill(226, 124, 9);
  rect(200,0,200,400); 
  fill(247,42,10);
  rect(400,0,200,400); 
  fill(180);
  rect(600,0,200,400);
  
  
  //volumen inicial
  piano.setVolume(0);
  violin.setVolume(0);
  drums.setVolume(0);
  guitarra.setVolume(0);
  
  //repetición de los sonidos
  piano.loop();
  violin.loop();
  drums.loop();
  guitarra.loop();
  
  //imagenes de los instrumentos
   image(violinFoto, 230, 200, 140, 140);
  image(pianoFoto, 30, 200, 140, 140);
  image(drumsFoto, 630, 200, 140, 140);
  image(guitarraFoto, 430, 200, 140, 140);
  
  //texto con el título de los instrumentos
  fill(255);
  text("Piano", 80, 380);
  textAlign(CENTER);
  text("Violin", 295, 380);
  textAlign(CENTER);
  text("Guitarra", 500, 380);
  textAlign(CENTER);
  text("Batería", 700, 380);
  textAlign(CENTER);
  
  
}

function draw() {
  
 // control del volumen según la posición en y
   vol = map(mouseY,windowHeight, 0, 0.0, 1.1);
}

//control del volumen de cada instrumento por medio de un click dentro de su respectivo cuadro
  function mousePressed(){
    if ((mouseX>=0)&&(mouseX<=200)){
    piano.setVolume(vol);
    
      if(mouseY>=380){
     piano.setVolume(0);
     }
      
  } else
    
  if ((mouseX>=200)&&(mouseX<=400)){
    violin.setVolume(vol);
    
     if(mouseY>=380){
     violin.setVolume(0);
     }
    
  } else
    
     if ((mouseX>=400)&&(mouseX<=600)){
    guitarra.setVolume(vol);
       
        if(mouseY>=380){
     guitarra.setVolume(0);
     }
       
  } else
    
     if ((mouseX>=600)&&(mouseX<=800)){
    drums.setVolume(vol);
       
        if(mouseY>=380){
     drums.setVolume(0);
     }
  } 
  

}
