const BoardController = {
  init: function (obj, callback) {
    let self = this;
    self.activeBoard = obj;
    setupEventGroupElement();
    setupEventCycleElement();
    setupEventGroupCategory();
    renderElement();
    self.activeBoard.style.transform = "scale(" + 1 + ")";
  },
};

document.addEventListener("DOMContentLoaded", function (event) {
  boardDom = document.getElementById("body");
  boardController = Object.create(BoardController);
  boardController.init(boardDom);
});
