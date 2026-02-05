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

        const story = `At Space Station ${noun1}, a ${adjective1} mission began when the emergency siren played funky disco music and flashing colored lights. A floating ${noun2} challenged the crew to a dance battle, so they left their spaceship and tried to ${verb} while spinning in zero gravity. Suddenly, the captain bumped into a supersized rubber duck and yelled, “${exclamation}!” Somehow, despite the chaos, the mission ended in a ${adjective2} success.`;

    storyParagraph.innerHTML = story;
    overlay.classList.add("active");

    form.reset();
    });

    overlay.addEventListener("click", function () {
    overlay.classList.remove("active");

    });
})();