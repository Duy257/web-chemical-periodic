document.addEventListener("DOMContentLoaded", function (event) {
  setupEventGroupElement();
  setupEventCycleElement();
  setupEventGroupCategory();
  renderElement();
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
