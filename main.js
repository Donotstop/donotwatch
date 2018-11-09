let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second =  document.querySelector('.second');
let stopButton  = document.querySelector('.stopButton');
let clockWrapper = document.querySelector('.clockWrapper');
let modal = document.querySelector('.modalBackground');
let modalButton = document.querySelector('.modalButton');

function tic() {
    let date = new Date();

    let h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let sStart = s * 6 - 90;
    let mStart = (m * 6) + (s * 0.1) - 90;
    let hStart = (h * 30) + (m * 0.5) - 90;

    second.style.transform = 'rotate(' + sStart + 'deg)';
    minute.style.transform = 'rotate(' + mStart + 'deg)';
    hour.style.transform = 'rotate(' + hStart + 'deg)';

    date = null;
}

tic();

// tic tac
setInterval(() => {
    tic();
}, 1000);

// actions
stopButton.addEventListener('click', () => {
    modal.classList.toggle('open');
    clockWrapper.classList.toggle('open');
});

modalButton.addEventListener('click', () => {
    modal.classList.toggle('open');
    clockWrapper.classList.toggle('open');
});
