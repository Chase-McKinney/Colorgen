const generateBtn = document.getElementById("generate-btn");
const bod = document.getElementById("body");
//Functions
function randomGenerator() {
  const rand = Math.floor(Math.random() * 255);

  return rand;
}
//VARIABLES

generateBtn.addEventListener("click", function () {
  let color = randomGenerator();
  let color2 = randomGenerator();
  let color3 = randomGenerator();
  bod.style.backgroundColor = `rgb(${color}, ${color2}, ${color3})`;
});

//Call?
