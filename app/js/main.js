var eFunc = eFunc || {};

$(document).ready(function() {
  $(document).foundation({
    equalizer: {
      // Specify if Equalizer should make elements equal height once they become stacked.
      equalize_on_stack: false
    }
  });



  // Scrollmagic
  var fpController = new ScrollMagic.Controller();

  // Introduction
  new ScrollMagic.Scene({
    triggerElement: '.home',
    triggerHook:0,
    duration: function() {
      return $(window).height();
    }
  }).setTween([
    TweenLite.to($('.evan-image'),5,{y:($(window).height() / 2)}),
    TweenLite.to($('.evan-intro .vertical-align'),5,{y:($(window).height() / 2.5)})
  ]).addTo(fpController);

  // Skills
  new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook:0.5,
    duration: 300,
    reverse: false
  }).setTween([
      TweenLite.fromTo($('.skills .inner-panel'),5,{y:200,opacity:0},{y:0,opacity:1}),
    ]).addTo(fpController);

  // Skills graph
  new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook:0.3,
    duration: 10,
    reverse: false
  }).on('enter', function(e) {
      eFunc.createGraph();
    }
  ).addTo(fpController);

  // History
  new ScrollMagic.Scene({
    triggerElement: '.history',
    triggerHook:0.5,
    duration: 300,
    reverse: false
  }).setTween([
      TweenLite.fromTo($('.history-timeline li:first-child'),5,{y:200,opacity:0},{y:0,opacity:1}),
      TweenLite.fromTo($('.history-timeline li:nth-child(2)'),5,{y:200,opacity:0},{y:0,opacity:1,delay:0.5}),
      TweenLite.fromTo($('.history-timeline li:nth-child(3)'),5,{y:200,opacity:0},{y:0,opacity:1,delay:1}),
      TweenLite.fromTo($('.history-timeline li:nth-child(4)'),5,{y:200,opacity:0},{y:0,opacity:1,delay:1.5}),
    ]).addTo(fpController);
});
