function increaseFontSize() {
    var story = document.getElementById("story");
    var currentSize = parseInt(window.getComputedStyle(story).fontSize);
    story.style.fontSize = (currentSize + 2) + "px";
  }
  
  function decreaseFontSize() {
    var story = document.getElementById("story");
    var currentSize = parseInt(window.getComputedStyle(story).fontSize);
    story.style.fontSize = (currentSize - 2) + "px";
  }
  