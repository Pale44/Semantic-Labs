
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

    // when the copy to clipboard button is clicked
    function copyToClipboard() {
        const textToCopy = "This is the text that will be copied.";
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            console.log('Text copied to clipboard');
          })
          .catch((err) => {
            console.error('Could not copy text: ', err);
          });
          // change container inner Html style
          const copyText = document.getElementById("copy-to-text");
          copyText.innerHTML = "Text Copied!";
      }
    