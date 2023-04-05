
    /* for btn on the buttom to scroll down -> see more */
    const Btn = document.getElementById("scroll-down-btn");
    const ScrollDownBtnContainer = document.querySelector(".check-out-btn");
    Btn.addEventListener("click", () => {
        window.scrollTo(0, 900);
        behavior: smooth
    });


    // let button disappear after a certain scroll position
    window.addEventListener("scroll", function() {
      if (window.scrollY >= 500) {
        Btn.style.display = "none";
    } else {
        Btn.style.display = "block";
    }
    });


/* all the visbility checks */
const main = document.querySelector("main");
const nicheSection = document.querySelector(".niche-section");
const comprehensionContainer = document.querySelector(".comprehension-container");
        comprehensionContainer.style.visibility = "hidden";
    /* comprehension onlcik visibility check */
    const comprehension = document.getElementById("comprehension");

    comprehension.addEventListener("click", function() {
        main.style.visibility = "hidden";
        main.style.height = "0px";
        nicheSection.style.visibility = "hidden";
        nicheSection.style.height = "0px";
        // also hidde scroll down btn
        ScrollDownBtnContainer.style.visibility = "hidden";
        // activate comprehenions container
        comprehensionContainer.style.visibility = "visible";
    })
