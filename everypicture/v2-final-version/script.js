(function(){
  "use strict";

  const trinkets = document.querySelectorAll(".nyota, .calicocritter, .kirby, .smiski, .cat");
  const overlay = document.querySelector(".overlay");
  const storyTitle = document.querySelector(".story-title");
  const storyText = document.querySelector(".story-text");
  const closeBtn = document.querySelector(".close");

  let rotationInterval;
  let angle = -10;

  trinkets.forEach(trinket => {

    trinket.addEventListener("mouseenter", () => {
      rotationInterval = setInterval(() => {
        angle = angle === -10 ? 10 : -10;
        trinket.style.transform = `rotate(${angle}deg)`;
      }, 500);
    });

    trinket.addEventListener("mouseleave", () => {
      clearInterval(rotationInterval);
      trinket.style.transform = "rotate(0deg)";
    });

    trinket.addEventListener("click", () => {
      clearInterval(rotationInterval);
      trinket.style.transform = "rotate(0deg)";
      storyTitle.textContent = trinket.dataset.title;
      storyText.textContent = trinket.dataset.story;
      overlay.classList.remove("hidden");
    });

  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

})();