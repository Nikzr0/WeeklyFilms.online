
// let x = 0;
// const toggleButton = document.getElementsByClassName("btn")[0];
// const btns = document.getElementsByClassName("navbar__btn");

// toggleButton.addEventListener("mouseover", () => {
//     if (window.innerWidth <= 1000) 
//     {
//         if(x == 0){
//             btns[0].style.display="none"
//             btns[1].style.display="none"
//             btns[2].style.display="none"
//             btns[3].style.display="none"
//             // btns.style.display="none"
//             // text.style.display="none"
//             x++;
//         }
//         else {
//             btns[0].style.display="block"
//             btns[1].style.display="block"
//             btns[2].style.display="block"
//             btns[3].style.display="block"
//             // btns.style.display="block"
//             // text.style.display="block"
//             x--;
//         }
//     }


// })

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
