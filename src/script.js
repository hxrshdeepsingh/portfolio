import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

async function intializeSwiper() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
    });
}
intializeSwiper();


function animateElements(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from(entry.target, {
                x: entry.target.classList.contains('animate-left') ? -100 : 0,
                y: entry.target.classList.contains('animate-top') ? -100 : (entry.target.classList.contains('animate-bottom') ? 100 : 0),
                opacity: 0,
                duration: entry.target.classList.contains('animate-center') ? 1 : (entry.target.classList.contains('animate-bottom') ? 1 : (entry.target.classList.contains('animate-top') ? 1 : 2)),
                ease: "back.inOut",
            });
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(animateElements, { threshold: 0.5 });

document.querySelectorAll('.animate-left, .animate-top, .animate-bottom, .animate-center').forEach(element => {
    observer.observe(element);
});

document.getElementById('contact-anchor').addEventListener('click', function () {
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
});

document.getElementById('work-anchor').addEventListener('click', function () {
    gsap.to(window, { duration: 1, scrollTo: "#work" });
});


import('swiper').then(({ default: Swiper }) => {
    import('swiper/swiper-bundle.css').then(() => {
        async function intializeSwiper() {
            var swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
            });
        }
        intializeSwiper();
    });
}).catch(error => {
    console.error('Failed to dynamically import Swiper:', error);
});

async function printDateTime() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    const time = document.getElementById("time");
    time.innerHTML = day + ' ' + month + ' ' + formattedTime;
}

setInterval(() => {
    printDateTime();
}, 1000);