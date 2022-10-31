var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;

var rotateSum;

upBtn.onclick = function() {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}

downBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}


function clickBtn3() {
    const number2 = document.getElementById("number2");
    document.getElementById("span2").textContent = number2.value;
}