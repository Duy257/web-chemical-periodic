let totalElementGroup = [];

function setupEventGroupElement() {
  for (let i = 1; i <= 18; i++) {
    const element = document.getElementById(`gr-${i}`);
    if (!element) continue;
    const items = elements.filter((item) => item.grp === i);
    const listElement = items.map((item) => document.getElementById(item.id));
    element.addEventListener("mouseenter", () =>
      eventMouseenterGroup(element, listElement)
    );
    element.addEventListener("mouseleave", () => resetOpacity());
    totalElementGroup.push(element);
  }
}

function eventMouseenterGroup(element, listElement) {
  reductionOpacity();
  groupTitle.style.opacity = 1;
  listElement.forEach((item) => {
    item.style.opacity = 1;
  });
  element.style.opacity = 1;
}

function reductionOpacityGroupElement() {
  totalElementGroup.forEach((element) => {
    element.style.opacity = 0.2;
  });
}
function resetOpacityGroupElement() {
  totalElementGroup.forEach((element) => {
    element.style.opacity = 1;
  });
}
