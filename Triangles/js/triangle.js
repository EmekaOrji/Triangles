var bh = document.querySelectorAll("#area-container input");
var side = document.querySelectorAll("#perimeter-container input");
var aHead = document.querySelector("#area-header");
var pHead = document.querySelector("#perimeter-header");
var aTab = document.querySelector("#area");
var pTab = document.querySelector("#perimeter");
var aContainer = document.querySelector("#area-container");
var pContainer = document.querySelector("#perimeter-container");
var fixBg = document.querySelector("#fixedbg");
var menu = document.querySelector("#menu-btn");
var sidebar = document.querySelector(".sidebar-container");

aTab.addEventListener("click", function () {
  pContainer.classList.add("notactive");
  aContainer.classList.remove("notactive");
  this.classList.add("active");
  pTab.classList.remove("active");
  tuckIn();
});
pTab.addEventListener("click", function () {
  aContainer.classList.add("notactive");
  pContainer.classList.remove("notactive");
  this.classList.add("active");
  aTab.classList.remove("active");
  tuckIn();
});
bh.forEach(function (e, i, arr) {
  e.addEventListener("input", solveArea);
  function solveArea() {
    var header = document.querySelector(".active-head-a").textContent;
    var b = arr[0].value;
    var h = arr[1].value;
    if (header === "Calculate the Area of a Triangle") {
      document.getElementById("a-answer").textContent = b * h * 0.5;
    }
  }
});
for (let i = 0; i < side.length; i++) {
  const e = side[i];
  e.addEventListener("input", solvePerimeter);
  function solvePerimeter() {
    let header = document.querySelector(".active-head-p").textContent;
    let s1 = Number(side[0].value);
    let s2 = Number(side[1].value);
    let s3 = Number(side[2].value);
    if (header === "Calculate the Perimeter of a Triangle") {
      document.getElementById("p-answer").textContent = s1 + s2 + s3;
    }
  }
}
pContainer.addEventListener("click", tuckIn);
aContainer.addEventListener("click", tuckIn);
fixBg.addEventListener("click", tuckIn);
menu.addEventListener("focus", tuckOut);
function tuckOut() {
  sidebar.classList.add("tuckout");
  sidebar.classList.remove("tuckin");
}
function tuckIn() {
  sidebar.classList.add("tuckin");
  sidebar.classList.remove("tuckout");
}
document.body.addEventListener("keyup", function (e) {
  if (e.keyCode == 9) {
    tuckOut();
  }
});