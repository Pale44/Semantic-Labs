/* sub js file for lyrics js animation and functionality*/

/* select all the grid elements */

const gridItem = document.querySelectorAll(".grid-item");

/* es6 function for trgiggering modal animation*/

const toggleModal = () => {
    const { classList } = document .body;
    if (classList.contains("open")) {
     classList.remove("open");
     classList.add("closed");
     } else {
        classList.remove( "closed");
        classList.add( "open");
     }
};


