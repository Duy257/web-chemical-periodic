function setupEventGroupElement() {
  for (let i = 1; i <= 18; i++) {
    const element = document.getElementById(`gr-${i}`);
    if (!element) continue;
    const items = elements.filter((item) => item.grp === i);
    const listElement = items.map((item) => document.getElementById(item.id));
    element.addEventListener("mouseenter", () =>
      eventMouseenterGroup(element, listElement)
    );
    element.addEventListener("mouseleave", () =>
      eventMouseLeaveGroup(element, listElement)
    );
  }
}

function eventMouseenterGroup(element, listElement) {
  groupTitle.style.zIndex = 100;
  listElement.forEach((item) => {
    item.style.zIndex = 100;
  });
  element.style.zIndex = 100;
  overlay.style.display = "block";
}

function eventMouseLeaveGroup(element, listElement) {
  overlay.style.display = "none";
  groupTitle.style.zIndex = 0;
  listElement.forEach((item) => {
    item.style.zIndex = 0;
  });
  element.style.zIndex = 0;
}
