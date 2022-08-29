// sticky header
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

//   mobile navigation toggler

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//intro page animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// main page animation 
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo('.navbar.intro-animation', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".hero-text-box", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".hero-image", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=.8");

/*----------------------------------*/    
        /*Animation*/
/*----------------------------------*/    
    
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animate__animated animate__fadeIn');
}, {
    offset: '70%'                        
});

$('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
}, {
    offset: '50%'                        
});

$('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
}, {
    offset: '50%'                        
});

$('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animate__animated animate__pulse');
}, {
    offset: '40%'                        
});
