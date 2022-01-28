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



timeline
// .to('.rock',3,{y:-300})
// .to('.girl',3,{y:-200},"-=3")
.fromTo('.bg1',{y:-50},{y:0,duration:3},"-=3")
.to('.content',3,{top:"0%"},"-=3")
.fromTo('.content-images',{opacity:0},{opacity:1, duration:3});


let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "300%",
    triggerHook: 0,
})

.setTween(timeline)
.setPin('section')
.addTo(controller)

navSlide();

