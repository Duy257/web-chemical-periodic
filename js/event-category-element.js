function setupEventGroupCategory() {
  const parent = document.getElementById("group_category");

  const listElement = parent.children;

  for (const element of listElement) {
    if (!element.id) continue;
    element.addEventListener("mouseenter", () => {
      const items = elements.filter((item) => item.ctg === element.id);
      items.forEach((item) => {
        const ele = document.getElementById(item.id);
        ele.style.zIndex = 100;
      });
      element.style.zIndex = 100;
      overlay.style.display = "block";
    });
    element.addEventListener("mouseleave", () => {
      overlay.style.display = "none";
      const items = elements.filter((item) => item.ctg === element.id);
      items.forEach((item) => {
        const ele = document.getElementById(item.id);
        ele.style.zIndex = 0;
      });
      element.style.zIndex = 0;
    });
  }
}
