let section1 = document.querySelector("#qui-suis-je");
let maTete = document.querySelector("#maTete");

  var el = document.querySelector("#link1");
  console.log(typeof(el));
  if (el){
      el.addEventListener("click", function(e){
        console.log("d");
        
    
        maTete.animate([
            // keyframes
            { transform: 'translateY(0px)' }, 
            { transform: 'translateY(300px)' }
          ], { 
            // timing options
            duration: 1000,
            easing : 'ease-out'
          });
        //   maTete.style.visibility = "hidden";

        window.scroll(0,1000);
    });
  }else{
      console.log("g");
  }
    


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