
function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Sync ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Configure ScrollTrigger to work with Locomotive Scroll
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

locoScroll()

function cursorEffect() {
    const page1Content = document.querySelector("#page1-content");
    const cursor = document.querySelector('#cursor');

    page1Content.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        });
    });

    page1Content.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        });
    });

    page1Content.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        });
    });
}

cursorEffect();

function page2Animation() {
    gsap.from("#page2 *", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 70%",
            end: "bottom 30%",
            markers: false, // Set to true if you want to debug
            scrub: 1
        }
    });
}

page2Animation();



function page4Animation() {
    gsap.from("#page4 *", {
        opacity: 0,
        y: 50,
        stagger: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#page4",  // Corrected the trigger
            scroller: "#main",
            start: "top 70%",
            end: "bottom 30%",
            markers: false, // Set to true if you want to debug
            scrub: 1
        }
    });
}

page4Animation();


// swiper js 

function sliderAnimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,  // Remove space between slides for a continuous effect
        loop: true,
        autoplay: {
            delay: 0,  // No delay between slides, autoplay will be continuous
            disableOnInteraction: false,
        },
        speed: 9000,  // Adjust speed for a slower transition
        effect: 'slide' // Use slide effect for smooth scrolling
    });
    

}

sliderAnimation()

// gsap animation for the loader

// used to make the asynchronus code work smoothly (asynchronus code synchronus)

var tl = gsap.timeline()

tl.from("#loader h3", {
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1

})

tl.to("#loader",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
})

tl.to("#loader",{
    opacity:0,

})

tl.from("#page1-content h1 span", {
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay: -0.5,
})

tl.to("#loader",{
    display:"none"

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
