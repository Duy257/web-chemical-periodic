function setupEventGroupElement() {
  for (let i = 1; i <= 18; i++) {
    const element = document.getElementById(`gr-${i}`);
    if (!element) continue;

    element.addEventListener("mouseenter", () =>
      eventMouseenterGroup(element, i)
    );
    element.addEventListener("mouseleave", () =>
      eventMouseLeaveGroup(element, i)
    );
  }
}

function eventMouseenterGroup(element, i) {
  groupTitle.style.zIndex = 100;
  const items = elements.filter((item) => item.grp === i);
  items.forEach((item) => {
    const ele = document.getElementById(item.id);
    ele.style.zIndex = 100;
  });
  element.style.zIndex = 100;
  overlay.style.display = "block";
}
function eventMouseLeaveGroup(element, i) {
  overlay.style.display = "none";
  groupTitle.style.zIndex = 0;
  const items = elements.filter((item) => item.grp === i);
  items.forEach((item) => {
    const ele = document.getElementById(item.id);
    ele.style.zIndex = 0;
  });
  element.style.zIndex = 0;
}
