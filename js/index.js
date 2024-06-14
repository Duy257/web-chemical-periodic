document.addEventListener("DOMContentLoaded", function (event) {
  setupEventGroupElement();
  setupEventCycleElement();
  setupEventGroupCategory();
  renderElement();

  const body = document.getElementById("body");
  const scaleRatioWidth = window.innerWidth / body.offsetWidth;
  const scaleRatioHeight = window.innerHeight / body.offsetHeight;
  if (scaleRatioWidth < 1) {
    body.style.transform = "scale(" + scaleRatioWidth + ")";
  }
  if (scaleRatioHeight < 1) {
    body.style.transform = "scale(" + scaleRatioHeight + ")";
  }
  if (window.innerWidth > 1000) {
    body.style.transformOrigin = "50% 0%";
  } else if (window.innerWidth > 700) {
    body.style.transformOrigin = "20% 0%";
  } else body.style.transformOrigin = "0% 0%";
  body.style.height = "100vh";
});

function reductionOpacity() {
  const nameGroup = document.getElementsByClassName("name_group");
  const lantan = document.getElementById("lantan");
  const actini = document.getElementById("actini");
  for (const element of nameGroup) {
    element.style.opacity = 0.2;
  }
  lantan.style.opacity = 0.2;
  actini.style.opacity = 0.2;
  cycleTitle.style.opacity = 0.2;
  groupTitle.style.opacity = 0.2;
  reductionOpacityElement();
  reductionOpacityCategory();
  reductionOpacityGroupElement();
  reductionOpacityCycleElement();
}

function resetOpacity() {
  const nameGroup = document.getElementsByClassName("name_group");
  const lantan = document.getElementById("lantan");
  const actini = document.getElementById("actini");
  for (const element of nameGroup) {
    element.style.opacity = 1;
  }
  lantan.style.opacity = 1;
  actini.style.opacity = 1;
  cycleTitle.style.opacity = 1;
  groupTitle.style.opacity = 1;
  resetOpacityElement();
  resetOpacityCategory();
  resetOpacityGroupElement();
  resetOpacityCycleElement();
}
