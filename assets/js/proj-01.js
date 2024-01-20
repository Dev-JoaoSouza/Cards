function criaCard() {
    return {
        card: document.querySelectorAll('.card'),
        star: document.querySelectorAll('.star'),
        num: 0,

        start() {
            this.botoes();
        },

        botoes() {
            addEventListener("click", e => {
                const el = e.target;

                if (el.classList.contains('btn-left')) {
                    this.num--;
                    if (this.num < 0) this.num = 2;
                    this.show(this.num);
                }

                if (el.classList.contains('btn-right')) {
                    this.num++;
                    if (this.num > 2) this.num = 0;
                    this.show(this.num);
                }

                if (el.classList.contains('fav')) {
                    let img = el.getAttribute('src');
                    if (img === "img/fav1.svg") {
                        el.src = "img/fav2.svg";
                    } else {
                        el.src = "img/fav1.svg";
                    }
                }

                if (el.classList.contains('star')) {
                    let star = el.getAttribute('src');
                    if (star === "img/star1.svg") {
                        el.src = "img/star2.svg";
                    } else {
                        el.src = "img/star1.svg";
                    }
                }
            })
        },

        show(numero) {
            switch (numero) {
                case 0:
                    this.card[0].style = "display: flex";
                    this.card[1].style = "display: none";
                    this.card[2].style = "display: none";
                    break;
                case 1:
                    this.card[0].style = "display: none";
                    this.card[1].style = "display: flex";
                    this.card[2].style = "display: none";
                    break;
                case 2:
                    this.card[0].style = "display: none";
                    this.card[1].style = "display: none";
                    this.card[2].style = "display: flex";
                    break;
            }
        }
    }
};

const card = criaCard();
card.start();