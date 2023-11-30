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

// function animation1() {
//   document.getElementById('square-right1').style.animation = 'hoverAnimation 2.5s ease-in-out forwards';
// }
// function animation2() {
//   document.getElementById('square-right2').style.animation = 'hoverAnimation1 2.5s ease-in-out forwards';
// }
// function animation3() {
//   document.getElementById('square-right3').style.animation = 'hoverAnimation 2.5s ease-in-out forwards';
// }
// function animation4() {
//   document.getElementById('square-right4').style.animation = 'hoverAnimation1 2.5s ease-in-out forwards';
// }
// function animation5() {
//   document.getElementById('square-right5').style.animation = 'hoverAnimation 2.5s ease-in-out forwards';
// }
// function animation6() {
//   document.getElementById('square-right6').style.animation = 'hoverAnimation1 2.5s ease-in-out forwards';
// }
// function animation7() {
//   document.getElementById('square-right7').style.animation = 'hoverAnimation 2.5s ease-in-out forwards';
// }

// function test(e) {
//   e.classList.toggle("hoverAnimationClose");
//   e.classList.toggle("hoverAnimation");
// }

function modeswitch(squareId) {
  var changeElement = document.getElementById(squareId);
  if (changeElement) {
    changeElement.classList.add("hoverAnimation");
    changeElement.classList.remove("hoverAnimationClose");
    changeElement.querySelector(".button").classList.add("buttonshow");
    changeElement.querySelector(".button").classList.remove("buttonhide");
    changeElement.querySelector(".button2").classList.add("buttonshow");
    changeElement.querySelector(".button2").classList.remove("buttonhide");
     changeElement.querySelector(".button3").classList.add("buttonshow");
     changeElement.querySelector(".button3").classList.remove("buttonhide");
    changeElement.setAttribute("onclick", "modeswitch2('" + squareId + "')");
  }
}



function modeswitch2(squareId) {
  var changeElement = document.getElementById(squareId);
  if (changeElement) {
    changeElement.classList.add("hoverAnimationClose");
    changeElement.classList.remove("hoverAnimation");
    changeElement.querySelector(".button").classList.remove("buttonshow");
    changeElement.querySelector(".button").classList.add("buttonhide");
    changeElement.querySelector(".button2").classList.remove("buttonshow");
    changeElement.querySelector(".button2").classList.add("buttonhide");
    changeElement.querySelector(".button3").classList.remove("buttonshow");
    changeElement.querySelector(".button3").classList.add("buttonhide");
    changeElement.setAttribute("onclick", "modeswitch('" + squareId + "')");
  }
}

function modeswitchleft(squareId2) {
  var changeElement = document.getElementById(squareId2);
  if (changeElement) {
    changeElement.classList.add("hoverAnimation1");
    changeElement.classList.remove("hoverAnimation1Close");
    changeElement.querySelector(".button").classList.add("buttonshow");
    changeElement.querySelector(".button").classList.remove("buttonhide");
    changeElement.querySelector(".button2").classList.add("buttonshow");
    changeElement.querySelector(".button2").classList.remove("buttonhide");
    changeElement.querySelector(".button3").classList.add("buttonshow");
    changeElement.querySelector(".button3").classList.remove("buttonhide");
    changeElement.setAttribute("onclick", "modeswitchleft2('" + squareId2 + "')");
  }
}

function modeswitchleft2(squareId2) {
  var changeElement = document.getElementById(squareId2);
  if (changeElement) {
    changeElement.classList.add("hoverAnimation1Close");
    changeElement.classList.remove("hoverAnimation1");
    changeElement.querySelector(".button").classList.remove("buttonshow");
    changeElement.querySelector(".button").classList.add("buttonhide");
     changeElement.querySelector(".button2").classList.remove("buttonshow");
    changeElement.querySelector(".button2").classList.add("buttonhide");
    changeElement.querySelector(".button3").classList.remove("buttonshow");
    changeElement.querySelector(".button3").classList.add("buttonhide");
    changeElement.setAttribute("onclick", "modeswitchleft('" + squareId2 + "')");
  }
}





function updateText(text) {
  let delay = 200;

  let h1 = document.getElementById("animated");

  h1.innerHTML = text
    .split("")
    .map((letter) => {
      console.log(letter);
      return `<span>` + letter + `</span>`;
    })
    .join("");

  // Adjust the selector to target the spans within the updated h1 element
  Array.from(h1.getElementsByTagName("span")).forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("wavy");
    }, index * 60 + delay);
  });
}

// Call updateText function with your desired text
updateText("SWIPE UP");
