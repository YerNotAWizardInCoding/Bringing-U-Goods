const popper =  document.getElementById("poppers");

const btn = document.getElementById("openInformationBtn");

const popperCloseBtn = document.getElementsByClassName("popperCloseBtn")[0];

btn.onclick = function() {
    popper.style.display = "block";

}

popperCloseBtn.onclick = function() {

    popper.style.display = "none";

}

window.onclick = function(event) {
    if (EventTarget == popper) {
        popper.style.display = "none";
    }
}




