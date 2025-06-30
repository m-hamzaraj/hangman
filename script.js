let screen = document.querySelector("#screen");
let arrB = ["APPLE APE(FRUIT)", "GRAPES GRP(FRUIT)", "BANANA BN(FRUIT)"];
let arrI = ["LIVER LV(ORGAN)", "HEART HT(ORGAN)", "BRAIN BN(ORGAN)"];
let arrA = ["EARTH EH(PLANET)", "JUPITER JP(PLANET)", "MARS MS(PLANET)"];
let currentarr = [];
let currentindex = null;
let img1 = document.querySelector("#first");
let img2 = document.querySelector("#second");
let heading = document.querySelector(".he");
function Display(input) {
  screen.value += input;
}
function clr() {
  screen.value = "";
}
function select_level(select) {
  const level = select.value;
  if (level === "basic") {
    currentarr = arrB;
    alert("Basic level Select");
  } else if (level === "inter") {
    currentarr = arrI;
    alert("Intermediate level Select");
  } else {
    currentarr = arrA;
    alert("Advance level Select");
  }
  currentindex = Math.floor(Math.random() * currentarr.length);
}
function hint() {
  if (currentindex == null) {
    alert("Plaese Select the level");
  }
  let hintword = currentarr[currentindex].split(" ")[1];
  document.getElementById("hint").innerHTML = hintword;
}
function ok() {
  let correct = currentarr[currentindex].split(" ")[0];
  let input = screen.value;
  if (correct == input) {
    alert("Correct");
    screen.value = "";
    document.querySelector("#hint").innerHTML = "";
  } else {
    img1.style.display = "none";
    img2.style.display = "block";
    setTimeout(() => {
      alert(`Game Over ${correct}`);
    }, 1000);
  }
}
