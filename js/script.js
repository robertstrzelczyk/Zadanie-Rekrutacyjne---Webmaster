window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navHeaderId").style.paddingTop = ".5rem";
        document.getElementById("navHeaderId").style.paddingBottom = ".5rem";
        document.getElementById("logoId").style.fontSize = "1.5em";
    } else {
        document.getElementById("navHeaderId").style.paddingTop = "1.5rem";
        document.getElementById("navHeaderId").style.paddingBottom = "1.5rem";
        document.getElementById("logoId").style.fontSize = "1.75em";
    }
}

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
for (let i=0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        modals[i].style.display = "none";
    }
}