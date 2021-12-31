
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
});

//***********************************************************************

const SlideShow = document.querySelector('.slide_show__slide');
const SlideShowImgs = document.querySelectorAll('.slide_show__slide img');

const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');

let counter = 2;
const size = SlideShowImgs[0].clientWidth;




prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        return;
    }

    SlideShow.style.transition = "transform 0.4s ease-in-out";
    counter--;
    SlideShow.style.transform = "translateX(" + (-size * counter) + "px)";

    console.log(counter);  

        if (counter == 2) {
            document.getElementById("radio1").checked = true;
        }

        if (counter == 3) {
            document.getElementById("radio2").checked = true;
        }
    
        if (counter == 4) {
            document.getElementById("radio2").checked = true;
        }
    
        if (counter == 0) {
            document.getElementById("radio3").checked = true;
        }
    
        if (counter == 1) {
            document.getElementById("radio4").checked = true;
        }

})

nextBtn.addEventListener('click', () => {

    if (counter >= SlideShowImgs.length - 1) {
        return;
    }
    SlideShow.style.transition = "transform 0.4s ease-in-out";
    counter++;
    SlideShow.style.transform = "translateX(" + (-size * counter) + "px)";
    console.log(counter);  

    if (counter == 2) {
        document.getElementById("radio1").checked = true;
    }

    if (counter == 3) {
        document.getElementById("radio2").checked = true;
    }

    if (counter == 4) {
        document.getElementById("radio3").checked = true;
    }

    if (counter == 5) {
        document.getElementById("radio4").checked = true;
    }
})



SlideShow.addEventListener('transitionend', () => {
    if (SlideShowImgs[counter].id === 'lastClone') {
        SlideShow.style.transition = "none";
        counter = SlideShowImgs.length - 2;
        SlideShow.style.transform = "translateX(" + (-size * counter) + "px)";
    }

    if (SlideShowImgs[counter].id === 'firstClone') {
        SlideShow.style.transition = "none";
        counter = SlideShowImgs.length - counter;
        SlideShow.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});
