


// Gestion des sections

let AllSections = document.querySelectorAll(".section");
let section_QuiSuisJe = document.querySelector("#qui-suis-je");
let currentSection = section_QuiSuisJe;
var iterator = AllSections.values();

function nextSection(){
  
  
  if (!iterator.next().done){
    console.log(iterator.next());
  }else{
    
  }
    

  currentSection.scrollIntoView();
  return currentSection.scrollHeight;
}

//  Animation tête

let maTete = document.querySelector("#maTete");

function hideMaTete(){
    maTete.animate([
        // keyframes
        { transform: 'translateY(0px)' }, 
        { transform: 'translateY(300px)' }
      ], { 
        // timing options
        duration: 500,
        easing : 'ease-out'
      });
    
    setTimeout(()=>{
        maTete.style.visibility = "hidden";
    }, 500);
}

function showMaTete(){
    setTimeout(()=>{
        maTete.style.visibility = "visible";
    }, 500);

    maTete.animate([
        // keyframes
        { transform: 'translateY(300px)' }, 
        { transform: 'translateY(0px)' }
      ], { 
        // timing options
        duration: 500,
        easing : 'ease-out'
      }); 
}



// Evenments déclanchant l'animation de la tête
let lien_QuiSuisJe = document.querySelector("a[href='#qui-suis-je']");

lien_QuiSuisJe.addEventListener("click", ()=>{
    
    showMaTete();
   
});

window.addEventListener("scroll", ()=>{
    hideMaTete();
    setTimeout(()=>{
      if (maTete.visibility){
        window.scroll({
          //top: `${section1.getAttribute('positionTop') += 1000}`,
          top: `${section_QuiSuisJe.style.top += 1000}`,
          left: 0,
          behavior : 'smooth'
        });
      }
    }, 500);

    window.removeEventListener("scroll");
    //TODO add event listener when it goes back to the 1st section
    //el.removeEventListener("click", hideMaTete);
    //el.addEventListener("click", showMaTete);
});
    


// Utilisation optimisé de l'event scroll
// Réf : https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
/*
let last_known_scroll_position = 0;
let ticking = false;

function cacherTete(scroll_pos) {
  maTete.s = 100
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      cacherTete(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});*/