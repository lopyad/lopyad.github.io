const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");
ctx.lineCap = "round";
const lineWidth = document.querySelector("#line-width");
ctx.lineWidth = lineWidth.value;
const color = document.querySelector("#color");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
colorOptions.forEach(color => color.addEventListener("click", onColorClick));
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraseBtn = document.querySelector("#erase-btn");
const saveBtn = document.querySelector("#save-btn");
const fileInput = document.querySelector("#file");
const textInput = document.querySelector("#text");

const colors = [
  "#ff4d4d",
  "#ffaf40",
  "#fffa65",
  "#32ff7e",
  "#18dcff",
  "#7d5fff",
  "#cd84f1",
  "#4b4b4b"
];
let isMouseDown = false;
let isFilling = false;

function onClick(event){
  console.log(`${event.offsetX}, ${event.offsetY}`);
  x = event.offsetX;
  y = event.offsetY;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(x, y);
  ctx.stroke();
}
function onMouseMove(event){
  if(isMouseDown){
    x = event.offsetX;
    y = event.offsetY;

    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function changeColor(color){
	ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
function changeLineWidth(event){
  ctx.beginPath();
  ctx.lineWidth = event.target.value;
}

function onColorClick(event){
  changeColor(event.target.dataset.color);
	color.value = event.target.dataset.color;
}

function onModeClick(){
	if(isFilling){
    isFilling = false;
    modeBtn.innerText = "Draw";
    ctx.lineWidth = lineWidth.value;
  }
  else {isFilling = true; modeBtn.innerText = "Fill";}
}

function onDestroyClick(){
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
}

function onEraseClick(event){
  changeColor("white");
  if(isFilling) onModeClick();
  color.value = "#FFFFFF";
  ctx.lineWidth = 100;
}

function onFileChange(event){
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function(){
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    fileInput.value = null;
  }
}

function onDoubleClick(event){
  const text = textInput.value;
  // ctx.font = "50px Arial";
  // ctx.lineWidth = 1;
  // ctx.strokeText(text, event.offsetX, event.offsetY);
  // ctx.lineWidth = lineWidth.value;
  if(text !== ""){
    ctx.fillText(text, event.offsetX, event.offsetY);
  }
}

function onSaveClick(){
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

//CANVAS
//canvas.addEventListener("click", onClick);
canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("click", (event) => {
  //console.log("check");
  if(isFilling){
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
});
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  ctx.moveTo(event.offsetX, event.offsetY);
});
canvas.addEventListener("mouseup", () =>  {isMouseDown = false;});
canvas.addEventListener("mouseout", () =>  {isMouseDown = false;});

//INPUTS
lineWidth.addEventListener("change", changeLineWidth);
color.addEventListener("change", (event) => {
	changeColor(event.target.value);
});

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraseClick);

fileInput.addEventListener("change", onFileChange);

saveBtn.addEventListener("click", onSaveClick);