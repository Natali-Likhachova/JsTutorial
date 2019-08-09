/* Отображение меню при наведении курсором миши*/
document.getElementById('nav').onmouseover = function (event) {
    var target = event.target;
    if(target.className == 'menu-item'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
};

/* Отслеживает положение миши */
document.onmouseover = function (event) {
    var target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu'){
        closeMenu();
    }
};

/* Всем присваивает стиль display = "none" */
function closeMenu() {
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for (var i = 0; i < subm.length; i++){
        subm[i].style.display = "none";
    }
}