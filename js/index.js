const BoardController = {
  init: function (obj, callback) {
    let self = this;
    self.activeBoard = obj;
    setupEventGroupElement();
    setupEventCycleElement();
    setupEventGroupCategory();
    renderElement();
    if (window.screen.width < 769) {
      element.style.transform = `rotate(${-90}deg)`;
    }
  },
};

document.addEventListener("DOMContentLoaded", function (event) {
  boardDom = document.getElementById("body");
  boardController = Object.create(BoardController);
  boardController.init(boardDom);
});
