(function () {
    var toggler = document.getElementsByClassName("caret-down");
    for (let i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".active").classList.toggle("nested");
            this.classList.toggle("caret-right");
        });
    }
}());