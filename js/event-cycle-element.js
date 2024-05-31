let totalElementCycle = [];

function setupEventCycleElement() {
  for (let i = 1; i <= 7; i++) {
    const element = document.getElementById(`cy-${i}`);
    if (!element) continue;
    const items = elements.filter((item) => item.prd == i);
    const listElement = items.map((item) => document.getElementById(item.id));
    element.addEventListener("mouseenter", () =>
      eventMouseenterCycle(element, listElement)
    );
    element.addEventListener("mouseleave", () => resetOpacity());
    totalElementCycle.push(element);
  }
}

function eventMouseenterCycle(element, listElement) {
  reductionOpacity();
  cycleTitle.style.opacity = 1;
  listElement.forEach((item) => {
    item.style.opacity = 1;
  });
  element.style.opacity = 1;
}

function reductionOpacityCycleElement() {
  totalElementCycle.forEach((element) => {
    element.style.opacity = 0.2;
  });
}

function resetOpacityCycleElement() {
  totalElementCycle.forEach((element) => {
    element.style.opacity = 1;
  });
}
