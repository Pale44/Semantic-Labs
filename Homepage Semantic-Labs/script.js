if (window.innerWidth > 1000) {
    /* main js */

    /* js for css modals */
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    /* activation of scroll to the top button */
    const showArrow = event => {
        const arrow = document.getElementById("arrow");
        const scrollPosition = event.target.scrollingElement.scrollTop;
        if (scrollPosition > 950) {
            arrow.style.visibility = "visible";
        } else if (scrollPosition < 1000) {
            arrow.style.visibility = "hidden";
        } else {
        }
    };

    arrow.addEventListener('click', () => {
        window.scrollTo(0, 0);
        behavior: smooth
    });
    document.addEventListener("scroll", showArrow);

    /* scroll animation for the div-1 product */
    const showDiv1 = event => {
        const pDiv1 = document.querySelector(".p-div1");
        const scrollPosition = event.target.scrollingElement.scrollTop;
        if (scrollPosition < 1000) {
            pDiv1.style.opacity = 0;
            pDiv1.style.translate = "-180px 0px";
            pDiv1.style.scale = "1";
            pDiv1.style.transform = "blur(90px)";
        } else if (scrollPosition > 1300) {
            pDiv1.style.opacity = 1;
            pDiv1.style.translate = 0;
            pDiv1.style.scale = 1;
            pDiv1.style.transform = "blur(0px)";
        } else {
        }
    };
    document.addEventListener("scroll", showDiv1);

    /* scroll animations for p-div 4 */
    const showDiv4 = event => {
        const pDiv4 = document.querySelector(".p-div4");
        const scrollPosition = event.target.scrollingElement.scrollTop;
        if (scrollPosition < 100) {
            pDiv4.style.opacity = 0;
            pDiv4.style.translate = "180px 0px";
            pDiv4.style.scale = "1";
            pDiv4.style.transform = "blur(90px)";
        } else if (scrollPosition > 1870) {
            pDiv4.style.opacity = 1;
            pDiv4.style.translate = 0;
            pDiv4.style.scale = 1;
            pDiv4.style.transform = "blur(0px)";
        } else {
        }
    };
    document.addEventListener("scroll", showDiv4);

    /* scroll animation for p-div 5*/
    const showDiv5 = event => {
        const pDiv5 = document.querySelector(".p-div5");
        const scrollPosition = event.target.scrollingElement.scrollTop;
        if (scrollPosition < 100) {
            pDiv5.style.opacity = 0;
            pDiv5.style.translate = "-180px 0px";
            pDiv5.style.scale = "1";
            pDiv5.style.transform = "blur(90px)";
        } else if (scrollPosition > 2200) {
            pDiv5.style.opacity = 1;
            pDiv5.style.translate = 0;
            pDiv5.style.scale = 1;
            pDiv5.style.transform = "blur(0px)";
        } else {
        }
    };
    document.addEventListener("scroll", showDiv5);

    /* scroll animation for the faq section */
    const showFAQ = event => {
        const faq = document.querySelector(".all-accordions");
        const scrollPosition = event.target.scrollingElement.scrollTop;
        if (scrollPosition < 100) {
            faq.style.opacity = 0;
            faq.style.translate = "0px 200px";
            faq.style.scale = "0.6";
            faq.style.transform = "blur(200px)";
        } else if (scrollPosition > 3550) {
            faq.style.opacity = 1;
            faq.style.translate = 0;
            faq.style.scale = 1;
            faq.style.transform = "blur(0px)";
        } else {
        }
    };
    document.addEventListener("scroll", showFAQ);

    /* scroll animation for about us container for Hakan */
    const showHakan = event => {
        const a1 = document.querySelector(".about-me-1");
        const scrollPosition = event.target.scrollingElement.scrollTop;
        if (scrollPosition < 100) {
            a1.style.opacity = 0;
            a1.style.translate = "-100px -200px";
            a1.style.scale = "0.9";
            a1.style.transform = "blur(200px)";
        } else if (scrollPosition > 4800) {
            a1.style.opacity = 1;
            a1.style.translate = 0;
            a1.style.scale = 1;
            a1.style.transform = "blur(0px)";
        } else {
        }
    };
    document.addEventListener("scroll", showHakan);

    /* scroll animation for about us for Asher */
    const showAsher = event => {
        const a2 = document.querySelector(".about-me-2");
        const scrollPosition = event.target.scrollingElement.scrollTop;
        if (scrollPosition < 100) {
            a2.style.opacity = 0;
            a2.style.translate = "100px 200px";
            a2.style.scale = "0.9";
            a2.style.transform = "blur(90px)";
        } else if (scrollPosition > 4700) {
            a2.style.opacity = 1;
            a2.style.translate = 0;
            a2.style.scale = 1;
            a2.style.transform = "blur(0px)";
        } else {
        }
    };
    document.addEventListener("scroll", showAsher);

    /* in the about section text container */
    const aboutText1 = document.getElementById("about-text1");
    const aboutText2 = document.getElementById("about-text2");

    function scrollDown1() {
        aboutText1.scrollTop += 300;
    }

    function scrollDown2() {
        aboutText2.scrollTop += 300;
    }
} else {

}