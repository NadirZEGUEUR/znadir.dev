

/**
    GSAP code
**/
gsap.registerPlugin(ScrollTrigger);
// document.designMode = "on";

// gsap.to(".maTete",{
//   scrollTrigger: "#qui-suis-je",
//   duration: 2.5,
//   y: -600,
//   // visibilty: 0,
//   ease: "power4.in"
// });

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

/**
 * Email obfuscation technique
 * Source : https://stackoverflow.com/questions/41318987/hide-email-address-from-bots-keep-mailto#answer-67950224
 */

 adress = 'mailt' + 'o:nadir.' + 'zegu' + 'eur@gm' + 'ail.com';
 document.getElementsByClassName('Email')[0].title = adress;
 function mail(){window.location.href = adress;}