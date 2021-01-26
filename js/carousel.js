const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const dotsNavs = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// Arrange Slides//

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
};
slides.forEach(setSlidePosition);

const moveToSlide = () => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('active-slide');
    nextSlide.classList.add('active-slide')
}