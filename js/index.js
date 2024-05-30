const BoardController = {
  init: function (obj, callback) {
    let self = this;
    self.activeBoard = obj;
    setupEventGroupElement();
    setupEventCycleElement();
    setupEventGroupCategory();
    renderElement();
  },
};

document.addEventListener("DOMContentLoaded", function (event) {
  boardDom = document.getElementById("body");
  boardController = Object.create(BoardController);
  boardController.init(boardDom);
});
