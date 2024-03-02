// Menyiapkan Canvas
const canvas = document.querySelector("#canvas");

// Mengatur Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tentukan Context
const ctext = canvas.getContext('2d');

// Manipulasi Canvas    

// Membuat Rectangle
// ctext.fillStyle = 'lightblue';
// ctext.strokeStyle = '#000';
// ctext.lineWidth = 2;

// ctext.rect(50,50,300,300);
// ctext.fill();
// ctext.stroke()

// Membuat Lingkaran / Circle / Arc
let x = 200;
let y = 200;
let speedX = 5;
let speedY = 5;
let radius = 150;
function draw (){
window.requestAnimationFrame(draw)
ctext.clearRect(0,0,innerWidth,innerHeight);
ctext.fillStyle = 'lightgreen';
ctext.beginPath()
ctext.arc(x,y,radius,0,2 * Math.PI);
ctext.fill()
ctext.stroke()

if(x + radius  > innerWidth || x - radius < 0){
    speedX = -speedX;    
}
if(y + radius  > innerHeight || y - radius < 0){
    speedY = -speedY;    
}
    x += speedX
    y += speedY
}
draw()

// Membuat Path
// ctext.fillStyle = 'red';
// ctext.beginPath();
// ctext.moveTo(1000,50);
// ctext.lineTo(1150,350);
// ctext.lineTo(850,350);
// ctext.closePath()
// ctext.stroke()
// ctext.fill();