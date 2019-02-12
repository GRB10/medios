function setup() {
createCanvas(160,160)

fill(0,0,0);
rect(0,0,160,160);

fill(255,255,255);
noStroke();
 quad(0,50,10,50,20,60,10,60);

// patron a
for(var x = 0; x < 80; x = x + 20){
 quad(-30+x,40+x,-20+x,40+x,-10+x,50+x,-20+x,50+x);  
}

for(var x = 0; x < 80; x = x + 20){
 quad(-20+x,30+x,-10+x,30+x,0+x,40+x,-10+x,40+x);  
}

for(var x = 0; x < 80; x = x + 20){
 quad(-10+x,20+x,0+x,20+x,10+x,30+x,0+x,30+x);  
}

for(var x = 0; x < 80; x = x + 20){
 quad(0+x,10+x,10+x,10+x,20+x,20+x,10+x,20+x);  
}


for(var x = 0; x < 80; x = x + 20){
 quad(10+x,0+x,20+x,0+x,30+x,10+x,20+x,10+x);  
}

for(var x = 0; x < 80; x = x + 20){
 quad(20+x,-10+x,30+x,-10+x,40+x,0+x,30+x,0+x);  
}

for(var x = 0; x < 80; x = x + 20){
 quad(30+x,-20+x,40+x,-20+x,50+x,-10+x,40+x,-10+x);  
}

// patron b

for(var x = 0; x < 80; x = x + 20){
 quad(-40+x,30+x,-30+x,40+x,-30+x,50+x,-40+x,40+x);
}

for(var x = 0; x < 80; x = x + 20){
 quad(-30+x,20+x,-20+x,30+x,-20+x,40+x,-30+x,30+x);
}

for(var x = 0; x < 80; x = x + 20){
 quad(-20+x,10+x,-10+x,20+x,-10+x,30+x,-20+x,20+x);
}

for(var x = 0; x < 80; x = x + 20){
 quad(-10+x,0+x,0+x,10+x,0+x,20+x,-10+x,10+x);
}

for(var x = 0; x < 80; x = x + 20){
 quad(0+x,-10+x,10+x,0+x,10+x,10+x,0+x,0+x);
}

for(var x = 0; x < 80; x = x + 20){
 quad(10+x,-20+x,20+x,-10+x,20+x,0+x,10+x,-10+x);
}

for(var x = 0; x < 80; x = x + 20){
 quad(20+x,-30+x,30+x,-20+x,30+x,-10+x,20+x,-20+x);
}

for(var x = 0; x < 80; x = x + 20){
 quad(30+x,-40+x,40+x,-30+x,40+x,-20+x,30+x,-30+x);
}
fill(255,255,0);
rect(0,80,80,80);

fill(0,0,0);
rect(80,0,80,80);

}

function draw() {
  
}
