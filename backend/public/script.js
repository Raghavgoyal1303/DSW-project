const aboutUsElement = document.querySelector('.About-us');
const aboutUsBoxElement = document.querySelector('.about-us-box');

aboutUsElement.addEventListener('click', () =>{
    aboutUsBoxElement.classList.toggle('visible');
});

document.addEventListener('click', (event) => {
    if (!aboutUsBoxElement.contains(event.target) && !aboutUsElement.contains(event.target)) {
      aboutUsBoxElement.classList.remove('visible');
  }
}); 

//on-going-events scroll

document.querySelector(".on-going-events").addEventListener("click", () =>{
    document.querySelector("#page4").scrollIntoView({behavior: "smooth"});
});

//upcoming-events scroll


document.querySelector(".upcoming-events").addEventListener("click", () => {
    document.querySelector("#page5").scrollIntoView({behavior: "smooth"});
});



//boy image
const page2Right = document.querySelector('.page2-right');
const scrollContainer = document.querySelector('.main'); // or any other container that has the scroll event

scrollContainer.addEventListener('scroll', () => {
  const scrollPosition = scrollContainer.scrollTop;
  const maxScrollPosition = scrollContainer.scrollHeight - scrollContainer.offsetHeight;
  const scale = 1 + (scrollPosition / maxScrollPosition) * 0.2; // adjust the scale factor as needed

  page2Right.querySelector('img').style.transform = `scale(${scale})`;
});




//gsap for image sliding in page3

// Get the carousel container and images
const carouselContainer = document.querySelector('.page3-images');
const images = document.querySelectorAll('.page3-images > div:not(.left-arrow-button, .right-arrow-button)');

// Set the initial index and animation duration
let currentIndex = 0;
const animationDuration = 0.5;

// Add event listeners to the arrow buttons
document.querySelector('.left-arrow-button').addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    return;
  }
  animateCarousel();
});

document.querySelector('.right-arrow-button').addEventListener('click', () => {
  if(currentIndex < 0){
    currentIndex = 0;
  }
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  animateCarousel();
});

// Animate the carousel
function animateCarousel() {
  gsap.to(images, {
    duration: animationDuration,
    x: (index) => (index - currentIndex) * 300,
    ease: 'power2.inOut',
  });
}

// Initialize the carousel
animateCarousel();


//Home bg image animation 

gsap.fromTo(".page1", {
  backgroundPositionX: '10000%', // initial position
  backgroundPositionY: '10000%',
}, {
  duration: 80, // duration of the animation
  backgroundPositionX: '100%', // final position
  backgroundPositionY: '100%',
  ease: 'power2-out', // easing function
  repeat: -1, // repeat the animation indefinitely
  // delay: 2,
});



//page4 animation

const page4_images = document.querySelectorAll('.page4-images > div:not(.page4-left-arrow-button, .page4-right-arrow-button)');

let page4_currentIndex = 0;
const page4_animateDurtion = 0.5;


document.querySelector(".page4-left-arrow-button").addEventListener('click', ()=>{
    page4_currentIndex--;
    if(page4_currentIndex < 0){
      return;
    }
    page4_animateCarousel();
});


document.querySelector(".page4-right-arrow-button").addEventListener('click', ()=> {
  if(page4_currentIndex < 0 ){
    page4_currentIndex = 0;
  } 
  page4_currentIndex++;
    if (page4_currentIndex >= images.length) {
      page4_currentIndex = 0;
    }
  page4_animateCarousel();
  
});


function page4_animateCarousel(){
  gsap.to(page4_images, {
    duration: page4_animateDurtion,
    x: (index) => (index - (page4_currentIndex)) * 300,
    ease: 'power2.inout',

    
  })
}

page4_animateCarousel();




//page5 animation

const page5_images = document.querySelectorAll('.page5-images > div:not(.page5-left-arrow-button, .page5-right-arrow-button)');

let page5_currentIndex = 0;
const page5_animateDurtion = 0.5;


document.querySelector(".page5-left-arrow-button").addEventListener('click', ()=>{
    page5_currentIndex--;
    if(page5_currentIndex < 0){
      return;
    }
    page4_animateCarousel();
});


document.querySelector(".page5-right-arrow-button").addEventListener('click', ()=> {
  if(page5_currentIndex < 0){
    page5_currentIndex = 0;
  } 
  page5_currentIndex++;
    if (page5_currentIndex >= images.length) {
      page5_currentIndex = 0;
    }
  page5_animateCarousel();
  
});


function page5_animateCarousel(){
  gsap.to(page5_images, {
    duration: page5_animateDurtion,
    x: (index) => (index - (page5_currentIndex)) * 300,
    ease: 'power2.inout',

    
  })
}

page5_animateCarousel();

