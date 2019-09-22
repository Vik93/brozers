$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "100%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });
    // get all slides
    var slides = document.querySelectorAll("section.panel");
    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i], {pushFollowers: false})
            //.addIndicators()
            .addTo(controller);
    }
});
$( document ).ready(function() {
    if(window.innerWidth > 768){
        $(".gallery").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 3,
            vertical: false,
            auto: 2500,
            speed: 500
        });
    }else if(window.innerWidth <= 768){
        $(".gallery").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            visible: 1,
            vertical: false,
            auto: 2500,
            speed: 500
        });
    }
    scrollSection = function (from, id, height) {
        var top = 0;
        if(from == 'up'){
            top = height - window.innerHeight;
        }else if(from == 'down'){
            top = $(id).offset().top
        }
        $('body,html').animate({scrollTop: top}, 1500);
    };
});