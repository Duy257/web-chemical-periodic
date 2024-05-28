function setupEventGroupCategory() {
  const parent = document.getElementById("group_category");

  const listElement = parent.children;

  for (const element of listElement) {
    if (!element.id) continue;
    const items = elements.filter((item) => item.ctg === element.id);
    const listChildren = items.map((item) => document.getElementById(item.id));
    element.addEventListener("mouseenter", () => {
      listChildren.forEach((item) => {
        item.style.zIndex = 100;
      });
      element.style.zIndex = 100;
      overlay.style.display = "block";
    });
    element.addEventListener("mouseleave", () => {
      overlay.style.display = "none";
      listChildren.forEach((item) => {
        item.style.zIndex = 0;
      });
      element.style.zIndex = 0;
    });
  }
}
