const dndElement = document.getElementById("drag");
let startX = 0;
let startY = 0;
dndElement.addEventListener("mousedown", downHandler);


function downHandler(e){
    startX = e.clientX;
    startY = e.clientY;
    dndElement.addEventListener("mousemove", moveHandler);
    dndElement.addEventListener("mouseup", upHandler);
}


function moveHandler(e){
    const offsetX = e.clientX - startX;
    const offsetY = e.clientY - startY;
    dndElement.style.top = `${offsetX + dndElement.offsetTop}px`;
    dndElement.style.left = `${offsetY + dndElement.offsetLeft}px`;
    startX = e.clientX;
    startY = e.clientY;
}

function upHandler(){
  startX = 0;
  startY = 0;
  dndElement.removeEventListener("mousemove",moveHandler);
  dndElement.removeEventListener("mouseup",upHandler);
}


