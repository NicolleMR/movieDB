const d = document;
const images = [
    './assets/hero2.png',
    './assets/hero3.png',
    './assets/hero.png'
];

let i = 0;
let prevBtn = d.querySelector('.prev-btn');
let nextBtn = d.querySelector('.next-btn');
let img = d.getElementById('image');

function next() {
    const lastPosition = images.length - 1
    if(i >= lastPosition) {
        i = 0;
    }else {
        i++;
    }
    renderizarImage();
}

function prev() {

    if(i <= 0) {
        i = images.length - 1;
    } else {
        i--;
    }
    renderizarImage();
}


function renderizarImage () {
    img.style.backgroundImage = `url(${images[i]})`;
}

nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);

//setInterval(next, 2000);