var bb = document.getElementById("base");
var hh = document.getElementById("height");

function solve() {
  var b = bb.value;
  var h = hh.value;
  document.getElementById("answer").textContent = b * h * 0.5;
}

bb.addEventListener("input", solve);
hh.addEventListener("input", solve);