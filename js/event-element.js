let totalElement = [];

function renderElement() {
  for (const element of elements) {
    const ele = document.getElementById(element.id);
    if (!ele) continue;
    ele.appendChild(addElement(element));
    totalElement.push(ele);

    ele.addEventListener("touchstart", (e) => handleEventElement(e, element));
    ele.addEventListener("touchcancel", (e) => handleEventElement(e, element));
    ele.addEventListener("mouseenter", (e) => handleEventElement(e, element));
    ele.addEventListener("mouseleave", (e) => handleEventElement(e, element));
  }
}

function handleEventElement(event, element) {
  if (event.type === "touchstart") {
    showElementDetail(element);
  } else if (event.type === "touchcancel") {
    handleMouseleaveElement();
  } else if (event.type === "mouseenter") {
    showElementDetail(element);
  } else if (event.type === "mouseleave") {
    handleMouseleaveElement();
  }
}

function addElement(data) {
  const childElement = document.createElement("div");
  const number = document.createElement("div");
  const name = document.createElement("div");
  childElement.appendChild(number);
  childElement.appendChild(name);

  number.textContent = data.num;
  name.textContent = data.sym;
  name.classList.add("element_name");
  number.classList.add("element_num");
  childElement.classList.add("element");
  childElement.style.backgroundColor = getColor(data.ctg);

  return childElement;
}

function handleMouseleaveElement() {
  const detail = document.getElementById("detail");
  if (!detail) return;
  detail.style.display = "none";
}

function reductionOpacityElement() {
  totalElement.forEach((e) => {
    e.style.opacity = 0.2;
  });
}
function resetOpacityElement() {
  totalElement.forEach((e) => {
    e.style.opacity = 1;
  });
}
