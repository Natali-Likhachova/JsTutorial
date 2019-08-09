var modal__img = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal__img.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("closeModal")[0];
span.onclick = function () {
    modal__img.style = "none";
};