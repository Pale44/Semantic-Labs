
/* all the visbility querys */
const main = document.querySelector("main");
const nicheSection = document.querySelector(".niche-section");
const storyContainer = document.querySelector(".story-container");
        storyContainer.style.visibility = "hidden";

    function hideMain() {
        main.style.visibility = "hidden";
        main.style.height = "0px";
        nicheSection.style.visibility = "hidden";
        nicheSection.style.height = "0px";
        ScrollDownBtnContainer.style.visibility = "hidden";
    }

    // hide the selected parameters container 
    const selectedParCon = document.querySelector(".selected-parameters-container");
    function hideSelectedParCon() {
        selectedParCon.style.visibility = "hidden";
        selectedParCon.style.height = "0px";     
    }

    //make selected parameters again visible
    function doSelParVisible() {
        selectedParCon.style.visibility = "visible";
        selectedParCon.style.height = "";  
    }

    // activate story containers visbility
    const story = document.getElementById("story");
    story.addEventListener("click", function() {
        hideMain();
        // activate comprehenions container
        storyContainer.style.visibility = "visible";
        // hide for each parameters definition container
        storyGenreContainer.style.height = "0px";
        hideAllStoryPar();
    })

    // select all story-parameters definition containers
    const allStoryPar = document.querySelectorAll(".story-parameters-definition-container");
    function hideAllStoryPar() {
        allStoryPar.style.height = "0px";
    }


// _________________________________________



// for the parameters for story

    // for the genre of the story
        const storyGenreText = document.getElementById("story-genre-p");
        const storyGenreContainer = document.getElementById("story-genre-container");
        // activate the visibility for the genre parammeters
        storyGenreText.addEventListener("click", function() {
            storyGenreContainer.style.visibility = "visible";
            storyGenreContainer.style.height = "auto";
            hideSelectedParCon();
            //hide all the other parameter containers 
            storyCharacterContainer.style.visibility = "hidden";
            storyCharacterContainer.style.height = "0px";
            storyPlotContainer.style.visibility = "hidden";
            storyPlotContainer.style.height = "0px";
        });
        // get user input and paste it into the selected parameters
        const genreInput = document.getElementById("input-story-genre");
        const saveGenreInput = document.getElementById("saveGenreInput");
        const StorySelParConGenre = document.getElementById("story-sel-parameters-div-genre");
        saveGenreInput.addEventListener("click", function() {
            StorySelParConGenre.innerHTML = "Genre: " + genreInput.value;
            StorySelParConGenre.style.visibility = "visible";
            StorySelParConGenre.style.padding = "20px";
            StorySelParConGenre.style.margin = "25px 35px 0px 0";
            //after save hide the container
            storyGenreContainer.style.visibility = "hidden";
            storyGenreContainer.style.height = "0px";
            storyPlotContainer.style.visibility = "hidden";
            storyPlotContainer.style.height = "0px";
            // make selected parameters visible
            doSelParVisible();
        });

     // for the characters
     const storyCharacterText = document.getElementById("story-character-p");
     const storyCharacterContainer = document.getElementById("story-character-container");
         // activate visibility
         storyCharacterText.addEventListener("click", function() {
             storyCharacterContainer.style.visibility = "visible";
             storyCharacterContainer.style.height = "auto";
             hideSelectedParCon();
             // hide all the other parameters container
             storyGenreContainer.style.visibility = "hidden";
             storyGenreContainer.style.height = "0px"; 
             storyPlotContainer.style.visibility = "hidden";
             storyPlotContainer.style.height = "0px";
             // put character container higher
             storyCharacterContainer.style.margin = "-30px auto 0 auto";
         });
         // get user input 
         const characterInput = document.getElementById("input-story-character");
         const saveCharacterInput = document.getElementById("saveCharacterInput");
         const StorySelParConCharacter = document.getElementById("story-sel-parameters-div-character");
         saveCharacterInput.addEventListener("click", function() {
             StorySelParConCharacter.innerHTML = "Character: " + characterInput.value;
             StorySelParConCharacter.style.visibility = "visible";
             StorySelParConCharacter.style.padding = "20px";
             StorySelParConCharacter.style.margin = "25px 35px 0px 0";
             //after save hide the container
             storyCharacterContainer.style.visibility = "hidden";
             storyCharacterContainer.style.height = "0px";
             storyPlotContainer.style.visibility = "hidden";
             storyPlotContainer.style.height = "0px";
             // make selected parameters visible
             doSelParVisible();
         });

    // for the plot
    const storyPlotText = document.getElementById("story-plot-p");
    const storyPlotContainer = document.getElementById("story-plot-container");
        // activate visibility
        storyPlotText.addEventListener("click", function() {
            storyPlotContainer.style.visibility = "visible";
            storyPlotContainer.style.height = "auto";
            hideSelectedParCon();
            // hide all the other parameters container
            storyGenreContainer.style.visibility = "hidden";
            storyGenreContainer.style.height = "0px"; 
            storyCharacterContainer.style.visibility = "hidden";
            storyCharacterContainer.style.height = "0px";
            // put the container higher because of space issues
            storyPlotContainer.style.margin = "-45px auto 0 auto";            
        });
        // get user input 
        const plotInput = document.getElementById("input-story-plot");
        const savePlotInput = document.getElementById("savePlotInput");
        const StorySelParConPlot = document.getElementById("story-sel-parameters-div-plot");
        savePlotInput.addEventListener("click", function() {
            StorySelParConPlot.innerHTML = "Plot: " + plotInput.value;
            StorySelParConPlot.style.visibility = "visible";
            StorySelParConPlot.style.padding = "20px";
            StorySelParConPlot.style.margin = "25px 35px 0px 0";
            //after save hide the container
            storyPlotContainer.style.visibility = "hidden";
            storyPlotContainer.style.height = "0px";
            // make selected parameters visible
            doSelParVisible();
        });
