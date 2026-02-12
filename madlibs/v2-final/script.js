(function(){
    "use strict";

    console.log("reading js");
    const form = document.querySelector("form");
    const overlay = document.querySelector(".overlay");
    const storyParagraph = document.querySelector(".overlay-content p"); 

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const noun1 = document.querySelector("#noun1").value;
        const adjective1 = document.querySelector("#adjective1").value;
        const noun2 = document.querySelector("#noun2").value;
        const verb = document.querySelector("#verb").value;
        const exclamation = document.querySelector("#exclamation").value;
        const adjective2 = document.querySelector("#adjective2").value;

        console.log(noun1, adjective1, noun2, verb, exclamation, adjective2);

        const story = `At Space Station <span class="fill-word">${noun1}</span>, a <span class="fill-word">${adjective1}</span> mission began when the emergency siren played funky disco music and flashing colored lights. A floating <span class="fill-word">${noun2}</span> challenged the crew to a dance battle, so they left their spaceship and tried to <span class="fill-word">${verb}</span> while spinning in zero gravity. Suddenly, the captain bumped into a supersized rubber duck and yelled, “<span class="fill-word">${exclamation}</span>!” Somehow, despite the chaos, the mission ended in a <span class="fill-word">${adjective2}</span> success.`;

    storyParagraph.innerHTML = story;
    overlay.classList.add("active");

    form.reset();
    });

    overlay.addEventListener("click", function () {
    overlay.classList.remove("active");

    });
})();