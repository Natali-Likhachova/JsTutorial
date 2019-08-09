/* Пример с выпадающим списком */
function fun3() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect');
    alert('Ввыбрана опция ' + options[sel].text);
}

/* Пример с ползунком */
function fun4() {
    var rng = document.getElementById('r1');
    var div = document.getElementById('slider');

    div.style.width = rng.value + 'px';
}
