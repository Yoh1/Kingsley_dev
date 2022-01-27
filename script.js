const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
      
    
    //togle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
   
   
        // animate links

   navLinks.forEach((link,index) => {
       
    

    if(link.style.animation){

        link.style.animation = ''
    }else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`
    }
});

        //burger animation
        
        burger.classList.toggle('toggle')
   
    });

   
}


let controller = new ScrollMagic.Controller();
let timeline =  new TimelineMax();

timeline.to(".text",5,{x:500}).to('.content-images',2,{opacity:0},'-=2');

navSlide();

