function setupEventGroupCategory() {
  const parent = document.getElementById("group_category");

  const listElement = parent.children;

  for (const element of listElement) {
    if (!element.id) continue;
    const items = elements.filter((item) => item.ctg === element.id);
    const listChildren = items.map((item) => document.getElementById(item.id));
    element.addEventListener("touchstart", (e) =>
      handleEventCategoryElement(e, listChildren, element)
    );
    element.addEventListener("mouseenter", (e) =>
      handleEventCategoryElement(e, listChildren, element)
    );
    element.addEventListener("mouseleave", (e) =>
      handleEventCategoryElement(e, listChildren, element)
    );
  }
}

function handleEventCategoryElement(event, listChildren, element) {
  if (event.type === "touchstart") {
    eventHoverAndClick(listChildren, element);
  } else if (event.type === "mouseenter") {
    eventHoverAndClick(listChildren, element);
  } else if (event.type === "mouseleave") {
    resetOpacity();
  }
}

function eventHoverAndClick(listChildren, element) {
  reductionOpacity();
  listChildren.forEach((item) => {
    item.style.opacity = 1;
  });
  element.style.opacity = 1;
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
