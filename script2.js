const paying =  document.getElementById("pay");

const btn = document.getElementById("payNowBtn");

const payCloseBtn = document.getElementsByClassName("payCloseBtn")[0];

btn.onclick = function() {
    paying.style.display = "block";

}


payCloseBtn.onclick = function() {

    paying.style.display = "none";

}

window.onclick = function(event) {
    if (EventTarget == paying) {
        paying.style.display = "none";
    }
}