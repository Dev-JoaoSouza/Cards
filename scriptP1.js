function menu() {
    var nav = document.getElementById("nav");
    var img = document.getElementById("icon");
    var head = document.getElementById("header");
    if (nav.className === "nav") {
        nav.className += " subMenu";
        head.className = "sub";
        img.innerHTML = "<img src='img/close.svg' alt='icone do menu'>";
    } else {
        nav.className = "nav";
        head.className = "";
        img.innerHTML = "<img src='img/menu.svg' alt='icone do menu'>";
    }
}

function fav(fa) {
    var img = fa.getAttribute('src');
    if (img === "img/fav1.svg") {
        fa.src = "img/fav2.svg";
    } else {
        fa.src = "img/fav1.svg";
    }
}

function classificacao(star) {
    var img2 = star.getAttribute('src');
    if (img2 === "img/star1.svg") {
        star.src = "img/star2.svg"
    } else {
        star.src = "img/star1.svg"
    }
}

var numero = 1;

function avancar() {
    numero++
    if (numero > 3) {
        numero = 1;
    }
    visualizar(numero);
}

function voltar() {
    numero--
    if (numero < 1) {
        numero = 3;
    }
    visualizar(numero);
}

function visualizar(num) {
    var card1 = document.getElementById("card1");
    var card2 = document.getElementById("card2");
    var card3 = document.getElementById("card3");
    switch (num) {
        case 1:
            card1.style = "display: flex"
            card2.style = "display: none"
            card3.style = "display: none"
            break;
        case 2:
            card1.style = "display: none"
            card2.style = "display: flex"
            card3.style = "display: none"
            break;
        case 3:
            card1.style = "display: none"
            card2.style = "display: none"
            card3.style = "display: flex"
            break;
    }
}