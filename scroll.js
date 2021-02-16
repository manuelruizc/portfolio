// init controller
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
  triggerElement: "#projects-title",
})
  .setClassToggle("#projects-title", "section-title--active") // add class toggle
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#skills-title",
})
  .setClassToggle("#skills-title", "section-title--active") // add class toggle
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#skills-title span:last-of-type",
})
  .setClassToggle(".skills-container div", "skill--active") // add class toggle
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#network-container",
})
  .setClassToggle("nav", "nav--active") // add class toggle
  .addIndicators()
  .addTo(controller);
