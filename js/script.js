var i = 0;
var txt = 'ENTER THE CREATIVE WORLD';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tekst1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}