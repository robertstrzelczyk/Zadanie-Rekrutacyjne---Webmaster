window.onscroll = function () {
    scrollFunction()
};
/*smaller nav section script*/
function scrollFunction() {
    var wh = document.getElementById("navHeaderId");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || wh.style.width <= "765px" ) {
        document.getElementById("navHeaderId").style.paddingTop = ".5rem";
        document.getElementById("navHeaderId").style.paddingBottom = ".5rem";
        document.getElementById("logoId").style.fontSize = "1.5em";
    } else {
        document.getElementById("navHeaderId").style.paddingTop = "1.5rem";
        document.getElementById("navHeaderId").style.paddingBottom = "1.5rem";
        document.getElementById("logoId").style.fontSize = "1.75em";
    }
}
/*open modal and exit section script*/
var modals = document.getElementsByClassName('modal');
var btns = document.getElementsByClassName("openModal");
var spans = document.getElementsByClassName("close");
var buttons = document.getElementsByClassName("closeModal");

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        modals[i].style.display = "block";
    }
}
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        modals[i].style.display = "none";
    }
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        modals[i].style.display = "none";
    }
}

/*scroll section script*/

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("section");

mainNavLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        let target = document.querySelector(event.target.hash);
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});

let slideToggle = (target, duration) => {
    /* Slide-toggle logic */
}

function myFunction() {
    var x = document.getElementById("idmenu");
    if (x.style.width > "992px") {
        x.style.display = "flex";
    } else {
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
}
