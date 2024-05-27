let color = {
  pink: "#e41b9080",
  blue2: "#0078d780",
  red: "#fd3a4a80",
  purple: "#8b66cc80",
  green2: "#1a985a80",
  orange: "#f5802580",
  blue1: "#3ba8dd80",
  green1: "#5baa0980",
  yellow: "#ffa70080",
  brown: "#7b715180",
};

function getColor(ctg) {
  switch (ctg) {
    case "cat1":
      return color.pink;
    case "cat2":
      return color.blue2;
    case "cat3":
      return color.red;
    case "cat4":
      return color.purple;
    case "cat5":
      return color.green2;
    case "cat6":
      return color.orange;
    case "cat7":
      return color.blue1;
    case "cat8":
      return color.green1;
    case "lanthanides":
      return color.yellow;
    case "actinides":
      return color.brown;
  }
}

const overlay = document.getElementById("overlay");
const groupTitle = document.getElementById("group");
const cycleTitle = document.getElementById("cycle");
