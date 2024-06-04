document.addEventListener("DOMContentLoaded", function() {

    const tl = gsap.timeline({ delay: 0.5 }); // Create a timeline with a 0.5s delay
  
    tl.from(".hero-text h1", { y: 100, opacity: 0, duration: 1 }) // Animate heading slide up and fade in
       .from(".hero-text p", { y: 50, opacity: 0, duration: 0.5 }) // Animate paragraph slide up and fade in
       .from(".hero-text .btn", { y: 25, opacity: 0, duration: 0.5 }) // Animate button slide up and fade in
       .from(".hero-image img", { x: 100, opacity: 0, duration: 0.5 }); // Animate image slide in from right and fade in
  
  });
  