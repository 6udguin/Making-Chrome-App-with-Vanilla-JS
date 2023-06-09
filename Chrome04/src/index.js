// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

var titleEl = document.querySelector("h2");
const superEventHandler = {
  handleResize: function () {
    titleEl.innerHTML = "You just resized!";
    titleEl.style.color = colors[0];
  },
  handleClick: function () {
    titleEl.innerHTML = "That was a right click!";
    titleEl.style.color = colors[1];
  },
  mouseOver: function () {
    titleEl.innerHTML = "The mouse is here!";
    titleEl.style.color = colors[2];
  },
  mouseOut: function () {
    titleEl.innerHTML = " The mouse is gone!";
    titleEl.style.color = colors[4];
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
titleEl.addEventListener("click", superEventHandler.handleClick);
titleEl.addEventListener("mouseover", superEventHandler.mouseOver);
titleEl.addEventListener("mouseout", superEventHandler.mouseOut);
