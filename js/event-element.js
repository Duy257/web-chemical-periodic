function renderElement() {
  for (const element of elements) {
    const ele = document.getElementById(element.id);
    if (!ele) continue;
    ele.appendChild(addElement(element));
  }
}

function addElement(data) {
  const childElement = document.createElement("div");
  const number = document.createElement("div");
  const name = document.createElement("div");
  childElement.appendChild(number);
  childElement.appendChild(name);

  number.textContent = data.num;
  name.textContent = data.sym;
  name.classList.add("element_name");
  number.classList.add("element_num");
  childElement.classList.add("element");
  childElement.style.backgroundColor = getColor(data.ctg);

  const width = window.innerWidth;
  let isSelect = false;

  childElement.addEventListener("click", () => {
    if (isSelect) {
      handleMouseleaveElement();
      isSelect = false;
    } else {
      handleHover(data);
      isSelect = true;
    }
  });

  if (!isSelect) {
    childElement.addEventListener("mouseenter", () => {
      handleHover(data);
    });
    childElement.addEventListener("mouseleave", () => {
      handleMouseleaveElement();
    });
  }

  return childElement;
}

function handleHover(data) {
  const detail = document.getElementById("detail");
  if (!detail) return;
  detail.style.display = "block";

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
  console.log("🚀 ~ handleHover ~ wrapper:", wrapper);
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
  wrapper.appendChild(elementName);
  wrapper.appendChild(yearElement);
  wrapper.appendChild(temperatureElement);
  wrapper.appendChild(meltingElement);
}

function generateInfoPropertiesTag(tit, data) {
  const element = document.createElement("div");
  const title = document.createElement("div");
  const properties = document.createElement("div");

  title.textContent = tit;
  properties.textContent = data;

  element.classList.add("detail_info_properties");
  element.appendChild(title);
  element.appendChild(properties);
  return element;
}

function handleMouseleaveElement() {
  const detail = document.getElementById("detail");
  if (!detail) return;
  detail.style.display = "none";
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
