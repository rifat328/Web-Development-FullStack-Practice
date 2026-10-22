document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // V1.1
  // gsap.to(".box", {
  //   scrollTrigger: {
  //     trigger: ".stack",
  //     start: "top-=200px 50%-=200px",
  //     markers: true,
  //     // toggleActions define what happen at 4 different scroll moments
  //     //on enter, in leve, on enter back, on leve back(back from start)
  //     // play pause resume reset restart complete, reverse, none
  //     toggleActions: "play pause resume reset",

  //     //toggleClass to add or remove class based on trigger enter
  //     toggleClass: {
  //       targets: ".box",
  //       className: "active",
  //     },
  //   },
  //   x: 300,
  //   duration: 3,
  //   ease: "Power1.easeInOut",
  // });

  let timeline = gsap.timeline({
    paused: true,
    defaults: {
      ease: "Power1.easeInOut",
    },
    scrollTrigger: {
      trigger: ".box",
      start: "top center",
      markers: true,
      // toggleActions define what happen at 4 different scroll moments
      //on enter, in leve, on ente r back, on leve back(back from start)
      // play pause resume reset restart complete, reverse, none
      toggleActions: "play pause resume reset",
      toggleClass: {
        targets: ".box",
        className: "active",
      },

      //scrub directly link the animation to scroll progress.

      scrub: true,
      // here pin is pinning the stack section & the box animation is not
      //bounded by stack section, it can freely move with the scroll
      pin: true,

      // sometime we need custom logic at specific moment of scroll
      // for that we have callback.
      onEnter: () => {
        console.log(
          "onEnter: when the trigger element first enter the start position",
        );
      },
      //best for leanup task and pauing resorses.
      onLeave: () => {
        console.log(
          "onLeave: when the trigger element scroll past the end point",
        );
      },
      // usefull for reversing logic
      onEnterBack: () => {
        console.log("onEnterBack: when scroll backward to trigger element t");
      },
      // ideal for reseting state
      onLeaveBack: () => {
        console.log("onLeaveBack: when scroll backward past the start point");
      },
      // ideal progressBar & dynamic calculation
      onUpdate: () => {
        console.log(
          "onUpdate: Runs continiously while scrubing giving realtime progress update ",
        );
      },
      // giving us a single place to handle state changes
      onToggle: () => {
        console.log("onToggle: whenever the active state changes ");
      },
      onRefresh: () => {
        console.log(
          "onRefresh: whenever page resizes or refresh giving us perfect calculation of scroll across all devices ",
        );
      },
    },
  });

  timeline.to(".box", { rotation: 90, x: 300, duration: 2 });
  timeline.to(".box", { rotation: 180, y: 100, duration: 1 });
  timeline.to(".box", { rotation: 90, x: 0, duration: 2 });
  timeline.to(".box", { rotation: 0, y: 0, duration: 1 });
});
