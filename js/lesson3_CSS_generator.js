/* Пример с генератором CSS */
function fun5(){
    var rangeTopLeft = document.getElementById('rangeTopLeft').value;
    var textTopLeft = document.getElementById('textTopLeft');
    var rangeTopRight = document.getElementById('rangeTopRight').value;
    var textTopRight = document.getElementById('textTopRight');
    var rangeBottomRight = document.getElementById('rangeBottomRight').value;
    var textBottomRight = document.getElementById('textBottomRight');
    var rangeBottomLeft = document.getElementById('rangeBottomLeft').value;
    var textBottomLeft = document.getElementById('textBottomLeft');

    var block = document.getElementById('block');

    /* Передача значений с ползунка в инпут */
    textTopLeft.value = rangeTopLeft;
    textTopRight.value = rangeTopRight;
    textBottomRight.value = rangeBottomRight;
    textBottomLeft.value = rangeBottomLeft;

    /* Задаем block радиус скругления */
    block.style.borderRadius = rangeTopLeft + 'px ' + rangeTopRight + 'px ' + rangeBottomRight + 'px ' + rangeBottomLeft + 'px ';
}