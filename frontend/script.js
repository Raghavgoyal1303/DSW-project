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
    page5_animateCarousel();
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


// page5 events registration


document.getElementById('page5-image1').addEventListener('click', function() {
window.location.href = 'up-coming-events-register.html'});
 

document.getElementById('page5-image2').addEventListener('click', function() {
window.location.href = 'up-coming-events-register.html'});
  

document.getElementById('page5-image3').addEventListener('click', function() {
window.location.href = 'up-coming-events-register.html'});

document.getElementById('page5-image4').addEventListener('click', function() {
window.location.href = 'up-coming-events-register.html'});




//  navbar animation

document.getElementById('home').addEventListener('click', () => {
  document.getElementById('homePage').scrollIntoView({behavior: "smooth"});
});


document.getElementById('about-us').addEventListener('click', ()=>{
  document.getElementById('aboutPage').scrollIntoView({behavior: "smooth"});
})



document.getElementById('student-services').addEventListener('click', ()=>{
  window.location.href = 'student-services.html'
})

document.getElementById('contact-us').addEventListener('click', ()=>{
document.getElementById('page6-contact-us').scrollIntoView({behavior: "smooth"});
})




// page 3 about us Animation

document.querySelector('.page3-button').addEventListener('click', () =>{
  window.location.href="about-us.html";
})




//page4 - blocks

gsap.to('.page4-block1',{
  scale: 0.7,
  opacity: 0,
  duration: 2,
  delay: 5,
})