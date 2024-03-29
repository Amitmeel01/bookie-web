const logo = document.querySelector(".wp-logo");
let scaleFactor = 1;
let increasing = true;

setInterval(() => {
    if (increasing) {
        scaleFactor = 1.2;
    } else {
        scaleFactor = 1;
    }
    document.querySelector(".wp-logo a i").style.transform = `scale(${scaleFactor})`;
    increasing = !increasing;
}, 1000);
