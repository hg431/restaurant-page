console.log("Hello world")

import { homepage } from "./homepage";
import { menu } from "./menu";
import { contact } from "./contact";

homepage();
document.getElementById("home").classList.add("selected");

document.getElementById("home").addEventListener("click", function() {
    click("home");
});

document.getElementById("menu").addEventListener("click", function() {
    click("menu");
});

document.getElementById("contact").addEventListener("click", function() {
    click("contact");
});

function click(page) {
    document.getElementById("content").innerHTML = "";
    function removeSelected() {
        var elems = document.querySelectorAll(".selected");
        [].forEach.call(elems, function(el) {
            el.classList.remove("selected");
});
    }
    if (page == "home") { 
        removeSelected();
        document.getElementById(page).classList.add("selected");
        homepage(); 
    };
    if (page == "menu") { 
        removeSelected();
        document.getElementById(page).classList.add("selected");
        menu(); 
    };
    if (page == "contact") { 
        removeSelected();
        document.getElementById(page).classList.add("selected");
        contact(); 
    };
    
}