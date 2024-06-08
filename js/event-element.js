let totalElement = [];

function renderElement() {
  for (const data of elements) {
    const ele = document.getElementById(data.id);
    if (!ele) continue;
    ele.appendChild(addElement(data));
    totalElement.push(ele);

    ele.addEventListener("touchstart", (e) => handleEventElement(e, data, ele));
    ele.addEventListener("touchend", (e) => handleEventElement(e, data, ele));
    ele.addEventListener("mouseenter", (e) => handleEventElement(e, data, ele));
    ele.addEventListener("mouseleave", (e) => handleEventElement(e, data, ele));
  }
}

function handleEventElement(event, data, element) {
  if (event.type === "touchstart") {
    showElementDetail(data);
    element.style.opacity = 0.8;
  } else if (event.type === "touchend") {
    handleMouseleaveElement(element);
  } else if (event.type === "mouseenter") {
    showElementDetail(data);
    element.style.opacity = 0.8;
  } else if (event.type === "mouseleave") {
    handleMouseleaveElement(element);
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

function handleMouseleaveElement(element) {
  const detail = document.getElementById("detail");
  if (!detail) return;
  detail.style.display = "none";
  element.style.opacity = 1;
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
