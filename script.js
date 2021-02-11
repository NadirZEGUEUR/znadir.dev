/*
// Gestion des sections

let AllSections = document.querySelectorAll(".section");
let section_QuiSuisJe = document.querySelector("#qui-suis-je");
let currentSection = section_QuiSuisJe;


function nextSection(){
  
  if (currentSection != AllSections[AllSections.length-1]){
    currentSection = currentSection.nextElementSibling;
  }
  
  console.log(currentSection);

  return goToSection(currentSection);
}

function previousSection(){
  
  if (currentSection != section_QuiSuisJe){
    currentSection = currentSection.previousElementSibling;
  }
  
  console.log(currentSection);

  return goToSection(currentSection);
}


function goToSection(section){
  if(section != undefined){
    section.scrollIntoView();
    return section.scrollHeight;
  }
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
*/

/*
// Evenments déclanchant l'animation de la tête quand on clique sur le lien pour revenir à la 1ere section
let lien_QuiSuisJe = document.querySelector("a[href='#qui-suis-je']");

lien_QuiSuisJe.addEventListener("click", ()=>{

  goToSection(section_QuiSuisJe);
  showMaTete();

});

let ticking = false;
let newPosition, lastKnownPosition;
*/
/* window.addEventListener("scroll", ()=>{
  lastKnownPosition = window.scrollY;
  console.log(`LKP : ${Math.floor(lastKnownPosition)}`);
  
  if (!ticking){
    window.requestAnimationFrame(() => {
      newPosition = currentSection.getBoundingClientRect.top;
      console.log(`NP : ${Math.floor(newPosition)}`);
      if ( newPosition > lastKnownPosition){
        newPosition = nextSection();
      }else{
        newPosition = previousSection();
      }

      ticking = false;
      console.log(`NP after scrolling : ${Math.floor(newPosition)}`);

    });

    ticking = true;
  } */

  
  

    /* hideMaTete();
    setTimeout(()=>{
      if (maTete.visibility){
        window.scroll({
          //top: `${section1.getAttribute('positionTop') += 1000}`,
          top: `${section_QuiSuisJe.style.top += 1000}`,
          left: 0,
          behavior : 'smooth'
        });
      }
    }, 500); */

// });

/** 
    GSAP code
**/
gsap.registerPlugin(ScrollTrigger);

gsap.to("#maTete",{
  scrollTrigger: "#qui-suis-je",
  duration: 2.5,
  y: -600,
  // visibilty: 0,
  ease: "power4.in"
});

// function showYeux () {
//   gsap.from("#maTete", {duration: 1, y: 200, ease: CustomEase.create("custom", "M0,0 C0.02,0.198 0.046,0.498 0.046,0.498 0.046,0.498 0.752,0.5 1,0.5 "), onComplete:hideTete});
// }

// function hideTete () {
//   window.addEventListener("scroll", () => {
//     gsap.to("#maTete", {duration: 1, y: 500, visibilty:0});
//   });
// }

// showYeux();
// hideTete();