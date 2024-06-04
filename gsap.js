document.addEventListener("DOMContentLoaded", function() {

    const tl = gsap.timeline({ delay: 0.5 });
  
    tl.from(".hero-text h1", { y: 100, opacity: 0, duration: 1 }) 
       .from(".hero-text p", { y: 50, opacity: 0, duration: 0.5 }) 
       .from(".hero-text .btn", { y: 25, opacity: 0, duration: 0.5 }) 
       .from(".hero-image img", { x: 100, opacity: 0, duration: 0.5 });
  
  });
  