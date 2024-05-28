function setupEventCycleElement() {
  for (let i = 1; i <= 7; i++) {
    const element = document.getElementById(`cy-${i}`);
    if (!element) continue;
    const items = elements.filter((item) => item.prd == i);
    const listElement = items.map((item) => document.getElementById(item.id));
    element.addEventListener("mouseenter", () =>
      eventMouseenterCycle(element, listElement)
    );
    element.addEventListener("mouseleave", () =>
      eventMouseLeaveCycle(element, listElement)
    );
  }
}

function eventMouseenterCycle(element, listElement) {
  cycleTitle.style.zIndex = 100;

  listElement.forEach((item) => {
    item.style.zIndex = 100;
  });
  element.style.zIndex = 100;
  overlay.style.display = "block";
}
function eventMouseLeaveCycle(element, listElement) {
  overlay.style.display = "none";
  cycleTitle.style.zIndex = 0;
  listElement.forEach((item) => {
    item.style.zIndex = 0;
  });
  element.style.zIndex = 0;
}
