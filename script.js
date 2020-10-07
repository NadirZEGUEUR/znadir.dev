
// Gestion des sections

let AllSections = document.querySelectorAll(".section");
let section_QuiSuisJe = document.querySelector("#qui-suis-je");
let currentSection = section_QuiSuisJe;
let i = 0;
var iterator = AllSections.values();

// Redéfinition de l'itérateur pour inclure un hack permettant de parcourir la structure en arrière "Backward iteration"
// DOES NOT FUNCTION
/* AllSections.values = () => {
  const items = [...AllSections.values()];
  let index = -1;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      var item = items[index + 1];
      if (item) {
        return {
          value: item,
          done: false
        };
      }
      return { done: true };
    },

    previous() {
      var item = items[index - 1];
      if (item) {
        return {
          value: item,
          done: false
        };
      }
      return { done: true };
    }
  };
} */


function nextSection(){
  
  if (currentSection != AllSections[AllSections.length-1]){
    currentSection = currentSection.nextElementSibling;
  }

  /* if (currentSection == AllSections[AllSections.length-1]) {
    Object.values(AllSections).reverse();
    i = 0;
  }else{
    i++;
  }
  currentSection = AllSections[i]; */


  
  console.log(currentSection);
  /* if (!iterator.next().done){
    console.log(iterator.next());
  }else{
    
  } */
    

  currentSection.scrollIntoView();
  return currentSection.scrollHeight;
}

function previousSection(){
  
  if (currentSection != section_QuiSuisJe){
    currentSection = currentSection.previousElementSibling;
  }
  
  //console.log(iterator.previous());
  /* if (!iterator.previous().done){
    console.log(iterator.next());
  }else{
    
  } */
}

function goToSection(section){
  section.scrollIntoView();
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

  goToSection(section_QuiSuisJe);
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

    //window.removeEventListener("scroll");
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