function setupEventGroupCategory() {
  const parent = document.getElementById("group_category");

  const listElement = parent.children;

  for (const element of listElement) {
    if (!element.id) continue;
    const items = elements.filter((item) => item.ctg === element.id);
    const listChildren = items.map((item) => document.getElementById(item.id));
    element.addEventListener("mouseenter", async () => {
      reductionOpacity();
      listChildren.forEach((item) => {
        item.style.opacity = 1;
      });
      element.style.opacity = 1;
    });
    element.addEventListener("mouseleave", async () => {
      resetOpacity();
    });
    element.addEventListener("touchend", async () => {
      resetOpacity();
    });
  }
}

async function reductionOpacityCategory() {
  const parent = document.getElementById("group_category");
  const listElement = parent.children;
  for (const element of listElement) {
    element.style.opacity = 0.2;
  }
}

async function resetOpacityCategory() {
  const parent = document.getElementById("group_category");
  const listElement = parent.children;
  for (const element of listElement) {
    element.style.opacity = 1;
  }
}
