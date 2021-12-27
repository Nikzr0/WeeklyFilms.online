
let y = 0;

const menu = document.getElementsByClassName("navbar__phone_menu")[0];
const btns = document.getElementsByClassName("navbar__btn");

menu.addEventListener("click", () => {

    if (window.innerWidth <= 1000) {
        if (y == 0) {
            btns[0].style.display = "none"
            btns[1].style.display = "none"
            btns[2].style.display = "none"
            btns[3].style.display = "none"
            y++;
        }
        else {
            btns[0].style.display = "block"
            btns[1].style.display = "block"
            btns[2].style.display = "block"
            btns[3].style.display = "block"
            y--;
        }

    }
})


const SlideShow = document.querySelector('.slide_show__slide');
const SlideShowImgs = document.querySelectorAll('.slide_show__slide img');

const prevBtn = document.querySelector('#slide_show__btn1');
const nextBtn = document.querySelector ('#slide_show__btn2');

let counter = 1;
const size = carouselImages[0].clientwidth;
              
SlideShow.style.transform = "translateX(" (-size * counter) + "px)";
