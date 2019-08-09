var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

/* При клике на кнопку открывается модальное окно */
btn.onclick = function () {
    modal.style.display = "block";
};

/* Для закрытия модального окна */
span.onclick = function () {
    modal.style.display = "none";
};

/* Закрытие элемента по клику за пределами его области */
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};