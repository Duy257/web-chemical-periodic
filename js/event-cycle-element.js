function setupEventCycleElement() {
  for (let i = 1; i <= 7; i++) {
    const element = document.getElementById(`cy-${i}`);
    if (!element) continue;

    element.addEventListener("mouseenter", () =>
      eventMouseenterCycle(element, i)
    );
    element.addEventListener("mouseleave", () =>
      eventMouseLeaveCycle(element, i)
    );
  }
}

function eventMouseenterCycle(element, i) {
  cycleTitle.style.zIndex = 100;
  const items = elements.filter((item) => item.prd == i);
  items.forEach((item) => {
    const ele = document.getElementById(item.id);
    ele.style.zIndex = 100;
  });
  element.style.zIndex = 100;
  overlay.style.display = "block";
}
function eventMouseLeaveCycle(element, i) {
  overlay.style.display = "none";
  cycleTitle.style.zIndex = 0;
  const items = elements.filter((item) => item.prd == i);
  items.forEach((item) => {
    const ele = document.getElementById(item.id);
    ele.style.zIndex = 0;
  });
  element.style.zIndex = 0;
}
