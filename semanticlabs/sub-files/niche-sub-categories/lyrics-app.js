/* sub js file for lyrics js animation and functionality*/

   /* all js code for all the user interaction for the Genre Container*/
          const test = document.body;
          const toggleModal1 = () => {
            const { classList } = test;
            console.log("hello world");
            if (classList.contains("open")) {
              classList.remove("open");             
              classList.add("closed");
            } else {
              classList.remove("closed");
              classList.add("open");
            }
            isChildClicked = false;
          };

          /* js function to save users own input */
            const input = document.getElementById("input"),
            genreContainer = document.getElementById("genre-container"), 
            genre = document.getElementById("genre"),
            saveBtn = document.getElementById("save");

            const outputField1 = document.getElementById("");
          /* function for users input and after it shows up in the grid-container*/
            function getInput() {
              if (input.value.length > 0) {
                genre.innerHTML = input.value;
                genreContainer.style.background = "#F5C272";
                genreContainer.style.border = "none";
                genreContainer.style.overflowY = "scroll";
                /* users input is displayed in the selected parameters 
                const newP = document.createElement("");
                newP.textContent = "";
                p.appendChild(); */
                /* pushing user input into grid */
                outputField1.innerHTML = input.value;

              } else {
                genre.innerHTML = "Genre";
                genreContainer.style.background = "";
                genreContainer.style.background = "";
                genreContainer.style.border = "";
                genre.style.color = "";
              }
            }

           /* function for pre-defined inputs */
            const modalGrid = document.querySelector(".modal-genre"),
                  modalItems = modalGrid.querySelectorAll(':not(:last-child)');
            let isChildClicked = false;

            modalItems.forEach((child) => {
              child.addEventListener('click', (event) => {
                  if  (!isChildClicked && event.target != input) {
                    isChildClicked = true;
                    event.stopPropagation();
                    /* i am using the classification from above line 23 */
                    genre.innerText = event.target.innerText;
                    event.target.style.background = "#F5C272";
                    event.target.style.borderRadius = "inherit";
                    event.target.style.color = "white";
                    event.target.style.padding = "11.2px 0 13px 0"; 
                    genreContainer.style.background = "#F5C272";
                    genreContainer.style.border = "none";
                    genreContainer.style.color = "#F7F5F2";

                    /* push selected value into output-field */
                    outputField1.innerText = event.target.innerText;

                    toggleModal1();
                  }  else {
                  }
              })
            }); 
            /* append users input into the selected-parameters section */

            /* event listeners for the save btn */
            saveBtn.addEventListener("click", getInput);
            saveBtn.addEventListener("click", toggleModal1);
      /* end */


      /* js code for all the user interactions for Emotion container*/
      const emotions = document.getElementsyClassName("emotions");
      
      const toggleModal2 = () => {
        const { classList } = emotions;
        if (classList.contains("open")) {
          classList.remove("open");
          classList.add("closed");
        } else {
          classList.remove("closed");
          classList.add("open");
        }
        isChildClicked = false;
      };

      /* js container for all js code for locations */
      const location = document.getElementById("location");
      const toggleModal3 = () => {
        const { classList } = location;
        if (classList.contains("open")) {
          classList.remove("open");
          classList.add("closed");
        } else {
          classList.remove("closed");
          classList.add("open");
        }
        isChildClicked = false;
      };
