function showElementDetail(data) {
  const detail = document.getElementById("detail");
  if (!detail) return;
  const cycle2 = document.getElementById("cy-2");
  const group5 = document.getElementById("gr-5");
  const element3 = document.getElementById("ele3");

  const detailLogo = document.getElementById("detail_logo");
  detailLogo.style.backgroundColor = getColor(data.ctg);

  for (const e of detailLogo.children) {
    if (e.id === "detail_logo_number") e.textContent = data.num;
    if (e.id === "detail_logo_atomic") e.textContent = data.aWt;
    if (e.id === "detail_logo_name") e.textContent = data.sym;
  }

  const detailInfo = document.getElementById("detail_info");
  detailInfo.style.backgroundColor = getColor(data.ctg);

  const wrapper = detailInfo.children[0];
  removeAllChildNodes(wrapper);

  const elementName = document.createElement("div");
  elementName.classList.add("detail_info_name");
  elementName.textContent = String(data.nme).toUpperCase();

  const yearElement = generateInfoPropertiesTag("Đã được khám phá", data.yr);
  const temperatureElement = generateInfoPropertiesTag(
    "Nhiệt độ nóng chảy",
    `${data.mlt} ℃`
  );
  const meltingElement = generateInfoPropertiesTag(
    "Nhiệt độ sôi",
    `${data.bln} ℃`
  );
  const electrons = generateInfoPropertiesTag(
    "Số electron mỗi phân lớp",
    `${data.elc}`
  );
  const electronConfiguration = generateInfoPropertiesTag(
    "Cấu hình electron",
    `${data.cnf}`
  );
  wrapper.appendChild(elementName);
  wrapper.appendChild(yearElement);
  wrapper.appendChild(temperatureElement);
  wrapper.appendChild(meltingElement);
  wrapper.appendChild(electrons);
  wrapper.appendChild(electronConfiguration);

  const left = cycle2.offsetWidth + element3.offsetWidth * 2;

  detail.style.position = "absolute";
  detail.style.left = left + (left / 100) * 6 + "px";
  detail.style.top =
    group5.offsetHeight + (group5.offsetHeight / 100) * 23 + "px";
  detail.style.width = element3.offsetWidth * 9.5 + "px";
  detail.style.height = element3.offsetHeight * 2.5 + "px";
  detail.style.display = "block";
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function generateInfoPropertiesTag(tit, data) {
  const element = document.createElement("div");
  const title = document.createElement("div");
  const properties = document.createElement("div");

  title.textContent = tit;
  properties.innerHTML = data;

  element.classList.add("detail_info_properties");
  element.appendChild(title);
  element.appendChild(properties);
  return element;
}
