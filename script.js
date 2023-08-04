
// Adding some animation using gsap 

var tl = gsap.timeline()

gsap.from(".ad , .ad .ad-box , .ad .ad-box .ad-img, .ad .ad-box .ad-content , .ad .ad-box .close-ad",{
     opacity:0,
     duration:0.7,
     delay:4,
     stagger:0.5
})


tl.from(".nav  ",{
     
      y:-80,
      opacity:0,
      duration:1.3,
      delay:0.5,
      stagger:0.3,
}  )


tl.from(".home-content .left h1, .home-content .left .search-bar , .home-content .left p" ,{
     
  x:-100,
  opacity:0,
  duration:1,
  // delay:0.3,
  stagger:0.3
   

} )

tl.from(".home-content .right img", {
  // x:100,
  opacity:0,
  duration:1,
})


gsap.from(".usp-card" , {
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
      trigger:" .usp-card",
      scroller:"body",
      // markers:true,
      start:"top 90%",
      end:"top 40%",
      scrub:5,
  }
})

gsap.from(".hiring-content" , {
  x:-100,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
      trigger:".hiring-content",
      scroller:"body",
      // markers:true,
      start:"top 90%",
      end:"top 70%",
      scrub:5,
  }
})


gsap.from(".qna-item" , {
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
      trigger:" .qna-item",
      scroller:"body",
      // markers:true,
      start:"top 90%",
      end:"top 40%",
      scrub:5,
  }
})


// -----------MENU----------

const navToggle =document.querySelector('.nav-toggle')

const navItem = document.querySelector('.nav .nav-items')

navToggle.addEventListener('click', ()=>{
  navItem.classList.toggle('ul-active')

  let openClose = navToggle.firstElementChild;
    
  if(navItem.classList.contains('ul-active')){
      openClose.classList.replace('ri-menu-3-line','ri-close-line')
  }else{
      openClose.classList.replace('ri-close-line','ri-menu-3-line')
  }
})


// ----------------QNA---------------

const qnaItems = document.querySelectorAll('.qna-item');

qnaItems.forEach(item => {
  const question = item.querySelector('.question');

  question.addEventListener('click', () => {
    item.classList.toggle('show-answer');
  });
});


// ------------AD-----------------

const Ad = document.querySelector('.ad') 

const closeAd = document.querySelector('.close-ad')

closeAd.addEventListener('click' , ()=>{
  
    Ad.classList.add('Ad-close')

})
