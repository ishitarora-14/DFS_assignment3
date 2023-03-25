// let lastKnownScrollPosition = 0;

// function isInViewport(element) {
//   // Get the bounding client rectangle position in the viewport
//   var bounding = element.getBoundingClientRect();
  
//   // Checking part. Here the code checks if it's *fully* visible
//   // Edit this part if you just want a partial visibility
//   if (
//       bounding.top >= 0 &&
//       bounding.left >= 0 &&
//       bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
//       bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//   ) {
//       console.log('In the viewport! :)');
//       return true;
//   } else {
//       console.log('Not in the viewport. :(');
//       return false;
//   }
// }

// let transformTriggered = false;

// addEventListener("scroll", (event) => {
//   if(!transformTriggered && isInViewport(document.querySelector(".video"))){
//     transformTriggered = true;
//     const video = document.querySelector(".video");
//     var bodyRect = document.body.getBoundingClientRect(),
//       elemRect = document.querySelector(".video").getBoundingClientRect(),
//       offset   = elemRect.top - bodyRect.top;
//       lastKnownScrollPosition = window.scrollY;
      
//       const newspaperSpinning = [
//           { width: "50vw" , height: "50vh"},
//           { width: "90vw", height: "90vh" },
//         ];
//         const newspaperTiming = {
//           duration: 2000,
//           iterations: 1, fill: "forwards"
//         };
//         video.animate(newspaperSpinning, newspaperTiming);
//   }
// });

let lastKnownScrollPosition = 0;

let transformTriggered = false;

function getPercentageScrolled(){
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
  var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

addEventListener("load", (event) => {
  const scroll = document.querySelector(".scroll");
  scroll.style.clipPath = `inset(${Math.max((100 - getPercentageScrolled()) * 1.50, 5)}px ${Math.max((100 - getPercentageScrolled()) * 3, 5)}px)`
  
});

addEventListener("scroll", (event) => {
  if(getPercentageScrolled() > 90) return;
  const scroll = document.querySelector(".scroll");
  scroll.style.clipPath = `inset(${Math.max((100 - getPercentageScrolled()) * 1.50, 5)}px ${Math.max((100 - getPercentageScrolled()) * 3, 5)}px)`

});

