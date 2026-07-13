//==================================================
// EduNova Lanka
// Premium Landing Page
// app.js
//==================================================

// -----------------------------
// AOS
// -----------------------------

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-out-cubic"

});

// -----------------------------
// GSAP
// -----------------------------

gsap.registerPlugin(ScrollTrigger);

// -----------------------------
// Hero Timeline
// -----------------------------

const hero = gsap.timeline({

    defaults:{

        ease:"power4.out"

    }

});

hero

.from(".navbar",{

    y:-80,

    opacity:0,

    duration:1

})

.from(".hero-tag",{

    y:30,

    opacity:0,

    duration:.8

},"-=.6")

.from(".hero h1",{

    y:60,

    opacity:0,

    duration:1

},"-=.5")

.from(".hero p",{

    y:40,

    opacity:0,

    duration:.8

},"-=.6")

.from(".hero-buttons a",{

    y:25,

    opacity:0,

    stagger:.15,

    duration:.7

},"-=.5")

.from(".hero-stats div",{

    y:30,

    opacity:0,

    stagger:.2,

    duration:.7

},"-=.5")

.from(".hero-card",{

    scale:.9,

    opacity:0,

    duration:1

},"-=.9")

.from(".floating",{

    x:60,

    opacity:0,

    stagger:.2,

    duration:.8

},"-=.8");

// -----------------------------
// Floating Cards
// -----------------------------

gsap.to(".floating1",{

    y:-18,

    repeat:-1,

    yoyo:true,

    duration:4,

    ease:"sine.inOut"

});

gsap.to(".floating2",{

    y:20,

    repeat:-1,

    yoyo:true,

    duration:5,

    ease:"sine.inOut"

});

gsap.to(".floating3",{

    y:-15,

    repeat:-1,

    yoyo:true,

    duration:4.5,

    ease:"sine.inOut"

});

// -----------------------------
// Hero Card Float
// -----------------------------

gsap.to(".hero-card",{

    y:-12,

    repeat:-1,

    yoyo:true,

    duration:5,

    ease:"sine.inOut"

});

// -----------------------------
// Background Blobs
// -----------------------------

gsap.to(".blob1",{

    x:70,

    y:40,

    repeat:-1,

    yoyo:true,

    duration:12,

    ease:"sine.inOut"

});

gsap.to(".blob2",{

    x:-70,

    y:50,

    repeat:-1,

    yoyo:true,

    duration:15,

    ease:"sine.inOut"

});

gsap.to(".blob3",{

    x:60,

    y:-40,

    repeat:-1,

    yoyo:true,

    duration:18,

    ease:"sine.inOut"

});

//==================================================
// Scroll Reveal Animations
//==================================================

gsap.utils.toArray(".service").forEach((card)=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },

        y:80,
        opacity:0,
        duration:1

    });

});

gsap.utils.toArray(".feature-card").forEach((card)=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },

        y:80,
        opacity:0,
        duration:1

    });

});

gsap.utils.toArray(".stat").forEach((card)=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },

        scale:.8,
        opacity:0,
        duration:.8

    });

});

gsap.utils.toArray(".step").forEach((card)=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },

        y:70,
        opacity:0,
        duration:.8

    });

});

gsap.utils.toArray(".review").forEach((card)=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },

        y:70,
        opacity:0,
        duration:.8

    });

});

gsap.utils.toArray(".faq-item").forEach((card)=>{

    gsap.from(card,{

        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        },

        y:50,
        opacity:0,
        duration:.7

    });

});

//==================================================
// Navbar Scroll Effect
//==================================================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(8,12,22,.88)";
        navbar.style.backdropFilter="blur(25px)";
        navbar.style.boxShadow="0 15px 45px rgba(0,0,0,.35)";
        navbar.style.borderColor="rgba(255,255,255,.12)";

    }

    else{

        navbar.style.background="rgba(15,22,40,.65)";
        navbar.style.boxShadow="none";

    }

});

//==================================================
// Scroll Progress Bar
//==================================================

const progress=document.getElementById("progress");

window.addEventListener("scroll",()=>{

    const total=

        document.documentElement.scrollHeight-

        document.documentElement.clientHeight;

    const percent=

        window.scrollY/total*100;

    progress.style.width=percent+"%";

});

//==================================================
// Smooth Scroll
//==================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

//==================================================
// Active Navigation
//==================================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


//==================================================
// Mouse Parallax
//==================================================

const heroSection=document.querySelector(".hero");
const heroCard=document.querySelector(".hero-card");

if(heroSection && heroCard){

heroSection.addEventListener("mousemove",(e)=>{

const rect=heroSection.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width;
const y=(e.clientY-rect.top)/rect.height;

gsap.to(heroCard,{

rotationY:(x-.5)*12,

rotationX:(.5-y)*12,

transformPerspective:1000,

transformOrigin:"center",

duration:.6,

ease:"power2.out"

});

});

heroSection.addEventListener("mouseleave",()=>{

gsap.to(heroCard,{

rotationX:0,

rotationY:0,

duration:.8,

ease:"power3.out"

});

});

}

//==================================================
// Counter Animation
//==================================================

document.querySelectorAll(".stat h2, .hero-stats h2").forEach(counter => {

    const original = counter.innerText.trim();

    // Skip values like 24/7
    if (original.includes("/")) return;

    const value = parseInt(original.replace(/[^\d]/g, ""));

    if (isNaN(value)) return;

    ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,

        onEnter: () => {

            let obj = { val: 0 };

            gsap.to(obj, {

                val: value,
                duration: 2,
                ease: "power2.out",

                onUpdate: () => {

                    if (original.includes("%")) {

                        counter.innerText = Math.floor(obj.val) + "%";

                    } else if (original.includes("+")) {

                        counter.innerText = Math.floor(obj.val) + "+";

                    }

                }

            });

        }

    });

});

//==================================================
// Magnetic Buttons
//==================================================

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

gsap.to(btn,{

x:x*.18,

y:y*.18,

duration:.3

});

});

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{

x:0,

y:0,

duration:.4,

ease:"elastic.out(1,0.4)"

});

});

});

//==================================================
// Card Hover Tilt
//==================================================

document.querySelectorAll(".service,.feature-card,.review,.step").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;
const rotateX=(rect.height/2-y)/18;

gsap.to(card,{

rotationX:rotateX,

rotationY:rotateY,

transformPerspective:900,

transformOrigin:"center",

duration:.35

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{

rotationX:0,

rotationY:0,

duration:.6,

ease:"power3.out"

});

});

});

//==================================================
// Cursor Glow
//==================================================

const cursor=document.querySelector(".cursor");

if(cursor){

window.addEventListener("mousemove",(e)=>{

gsap.to(cursor,{

left:e.clientX,

top:e.clientY,

duration:.15

});

});

document.querySelectorAll("a,button,.service,.feature-card,.review").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.style.transform="translate(-50%,-50%) scale(2)";

cursor.style.opacity=".5";

});

el.addEventListener("mouseleave",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";

cursor.style.opacity=".25";

});

});

}

//==================================================
// Navbar Active Color
//==================================================

const style=document.createElement("style");

style.innerHTML=`

nav a.active{

color:#00D4FF;

}

`;

document.head.appendChild(style);

//==================================================
// Console
//==================================================

console.log(

"%cEduNova Lanka",

"font-size:20px;font-weight:bold;color:#00D4FF"

);

console.log(

"%cPremium Landing Page Loaded",

"color:#8B5CF6;font-size:14px"

);


const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.innerHTML = nav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

// Close menu when a link is clicked
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});