let timeout; 

function resetTimer() {
  clearTimeout(timeout); 
  timeout = setTimeout(function () {
    window.location.href = "../index.html"; 
  }, 30000); 
}


document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
document.addEventListener("click", resetTimer);

window.addEventListener("load", resetTimer);
