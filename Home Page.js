//For dark mode button//
function DarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav.navigation-bar').classList.toggle('dark-mode');
}

//For slider button//
let x = 0;
function slider(y) {
    const slides = document.querySelectorAll('.slider .job-box');
    const totalSlides = Math.ceil(slides.length / 3);
    x += y;
    if (x >= totalSlides) {
        x = totalSlides - 1;
    } else if (x < 0) {
        x = 0;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${x * 100 / totalSlides}%)`;
}

//For to open link while clicking logo//
function link1(){
    document.getElementById("instagram");
    window.location.href='https://www.instagram.com';
}
function link2(){
    document.getElementById("twitter");
    window.location.href='https://x.com/?lang=en-in';
}
function link3(){
    document.getElementById("facebook");
    window.location.href='https://www.facebook.com';
}
function link4(){
    document.getElementById("whatsapp");
    window.location.href='https://web.whatsapp.com';
}