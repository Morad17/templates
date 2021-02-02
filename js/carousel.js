const slideContainer = document.querySelector('.carousel');
const slide = document.querySelector('.slides')
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 1000;

let slides = document.querySelectorAll('.slide')
let index = 1;
// // Arrange Slides//

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true)

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone)

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides)
const startSlide = () => {
    setInterval(() =>{
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
    }, interval);
};
startSlide();
slide.addEventListener('transitionend', () => {
    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';
    slides = document.querySelectorAll('.slide');
    if(slides[index].id === firstClone.id){
        slides.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});





