//CANVAS
const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;
const ctx = canvas.getContext("2d");
ctx.lineCap = "round";
ctx.strokeStyle = "#4b4b4b";
ctx.fillStyle = "#4b4b4b";

//color options
const color = document.querySelector("#color");
color.value = "#4b4b4b";
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
colorOptions.forEach(color => color.addEventListener("click", onColorClick));


//options
const lineWidth = document.querySelector("#line-width");
ctx.lineWidth = lineWidth.value;
const backup = {"color": color.value, "lineWidth": lineWidth.value };

//btns
const btns = Array.from(document.querySelectorAll(".option"));
const modeBtns = btns.slice(0, 4);
let mode = "draw"; //draw is default mode

//special btns
const destroyBtn = document.querySelector("#destroy-btn");
const fileInput = document.querySelector("#file");
const textInput = document.querySelector("#text");
const aiBtn = document.querySelector("#ai-btn");
const saveBtn = document.querySelector("#save-btn");

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

let aiColorOptions;

function onMouseMove(event) {
  if (isMouseDown && mode !== "addText"){
    x = event.offsetX;
    y = event.offsetY;

    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function changeColor(color) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;

  if(mode !== "erase"){
    backup.color = ctx.strokeStyle;
    backup.lineWidth = ctx.lineWidth;
  }
}
function changeLineWidth(event) {
  ctx.beginPath();
  ctx.lineWidth = event.target.value;
}

function onColorClick(event) {
  changeColor(event.target.dataset.color);
  color.value = event.target.dataset.color;

  event.target.classList.add("selected");
  colorOptions.forEach(color => {
    if (color !== event.target) {
      color.classList.remove("selected");
    }
  });
  aiColorOptions.forEach(color => {
    if (color !== event.target) {
      color.classList.remove("selected");
    }
  });

}

//mode button manage
function onClickBtn(event) {
  ctx.beginPath();

  //change mode by input
  switch (event.target.dataset.text) {
    case "✏️":
      mode = "draw";
      ctx.lineWidth = backup.lineWidth;
      changeColor(backup.color);
      break;
    case "🧺":
      mode = "drawAndFill";
      ctx.lineWidth = backup.lineWidth;
      changeColor(backup.color);
      break;
    case "🗑️":
      mode = "erase";
      changeColor("white");
      color.value = "#FFFFFF";
      ctx.lineWidth = 100;
      break;
    case "🅰️":
      mode = "addText";
      break;
  }
  console.log(event.target.dataset.text);

  //only selected butotn is highlighted
  event.target.classList.add("selected");
  btns.forEach(btn => {
    if (btn !== event.target) {
      btn.classList.remove("selected");
    }
  });
}

function onMouseMoveBtn(event) {
  switch (event.target.dataset.text) {
    case "✏️":
      event.target.innerText = "✏️" + " Draw";
      break;
    case "🧺":
      event.target.innerText = "🧺" + " Draw and Fill";
      break;
    case "🗑️":
      event.target.innerText = "🗑️" + " Erase";
      break;
    case "🅰️":
      event.target.innerText = "🅰️" + " Add Text";
      break;
    case "🧨":
      event.target.innerText = "🧨" + " Destroy";
      break;
    case "ㅤㅤ🖼️":
      event.target.innerText = "🖼️" + " Add Image";
      break;
    case "🤖":
      event.target.innerText = "🤖" + "ai recommend color";
      break;
    case "💾":
      event.target.innerText = "💾" + " Save Image";
      break;
  }
}

function onMouseOutBtn() {
  btns.forEach(btn => btn.innerText = btn.dataset.text);
}



function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.fillStyle = backup.color;
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    fileInput.value = null;
  }
}

function onAiClick() {
  stateText.innerText="load...";
  const toDelete = Array.from(document.querySelectorAll(".ai-color-option"));
  toDelete.forEach(color => color.remove());
  showOutput();
  console.log("check");
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

//CANVAS
canvas.addEventListener("click", (event) => {
  //console.log("check");
  if(mode === "addText"){
      const text = textInput.value;
      ctx.font = "50px Arial";
      ctx.lineWidth = 1;
      ctx.strokeText(text, event.offsetX, event.offsetY);
      ctx.lineWidth = lineWidth.value;
      if(text !== ""){
        ctx.fillText(text, event.offsetX, event.offsetY);
      }
  }

});
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  ctx.moveTo(event.offsetX, event.offsetY);
});
canvas.addEventListener("mouseup", () => {
  isMouseDown = false;
  if(mode==="drawAndFill") ctx.fill();
});
canvas.addEventListener("mouseout", () => { isMouseDown = false; });

//INPUTS
lineWidth.addEventListener("change", changeLineWidth);
color.addEventListener("change", (event) => {
  changeColor(event.target.value);
  colorOptions.forEach(color => {
    color.classList.remove("selected");
  });
});

modeBtns.forEach(btn => btn.addEventListener("click", onClickBtn));
btns.forEach(btn => btn.addEventListener("mousemove", onMouseMoveBtn));
btns.forEach(btn => btn.addEventListener("mouseout", onMouseOutBtn));

destroyBtn.addEventListener("click", onDestroyClick);
fileInput.addEventListener("change", onFileChange);
aiBtn.addEventListener("click", onAiClick);
saveBtn.addEventListener("click", onSaveClick);