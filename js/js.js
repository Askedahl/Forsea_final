var myWave = $('#myID').wavify({
  height: 22,
  bones: 3,
  amplitude: 60,
  color: '#73BF9C',
  speed: .25
});
var myWave = $('#myID1').wavify({
  height: 50,
  bones: 4,
  amplitude: 80,
  color: '#027373',
  speed: .17
});
var myWave = $('#myID2').wavify({
  height: 75,
  bones: 3,
  amplitude: 100,
  color: '#F5F5F7',
  speed: .10
});

var myWave = $('#myID3').wavify({
    height: 60,
    bones: 2,
    amplitude: 100,
    color: '#73BF9C',
    speed: .15
  });
  var myWave = $('#myID5').wavify({
    height: 75,
    bones: 3,
    amplitude: 100,
    color: '#F5F5F7',
    speed: .10
  });

var myWave = $('#myID6').wavify({
    height: 60,
    bones: 2,
    amplitude: 100,
    color: '#73BF9C',
    speed: .15
  });
  var myWave = $('#myID8').wavify({
    height: 75,
    bones: 3,
    amplitude: 100,
    color: '#F5F5F7',
    speed: .10
  });

  var myWave = $('#myID10').wavify({
    height: 22,
    bones: 3,
    amplitude: 60,
    color: '#73BF9C',
    speed: .25
  });
  var myWave = $('#myID11').wavify({
    height: 50,
    bones: 4,
    amplitude: 80,
    color: '#F5F5F7',
    speed: .17
  });
  var myWave = $('#myID12').wavify({
    height: 75,
    bones: 3,
    amplitude: 100,
    color: '#027373',
    speed: .10
  });

  $(window).scroll(testScroll);
  var viewed = false;
  
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
  
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  
  function testScroll() {
    if (isScrolledIntoView($(".value")) && !viewed) {
      viewed = true;
      $('.value').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 6000,
          easing: 'swing',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  }

  const flightpath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 150, y: 0}, 
        {x: 300, y: 20}, 
        {x: 500, y: 100},
        {x: 720, y: 300}
    ]
}

const tween = new TimelineLite();

tween.add(
TweenLite.to(".fly", 1, {
    bezier: flightpath,
    ease: Power1.easeInOut
})
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 1000,
    triggerHook: 0
    
})

.setTween(tween)
.setPin(".animation")
.addTo(controller);

const vue = new Vue({
  el: '.preloader',
  data: {
    loaded: 0,
    loading: null,
    loadStyle: {
      width: '0%' },

    statusElem: $('[status]'),
    loader: $('[loader]'),
    body: $('body') },

  ready() {
    this.preloader = $(this.$el);
    this.removeScrolling();
    this.startLoading();
  },
  watch: {
    loaded() {
      this.loadStyle.width = `${this.loaded}%`;
    } },

  methods: {
    removeScrolling() {
      this.body.css('overflow', 'hidden');
    },
    startLoading() {
      this.loading = setInterval(this.load, 40);
    },
    load() {
      this.loaded < 100 ? this.loaded++ : this.doneLoading();
    },
    doneLoading() {
      clearInterval(this.loading);
      this.updateStatus();
    },
    updateStatus() {
      this.statusElem.text('Velkommen til ForSea');
      this.animatePreloader();
    },
    animatePreloader() {
      let app = this,
      height = this.preloader.height(),
      properties = {
        'margin-top': `-${height}` },

      options = {
        duration: 1500,
        easing: 'swing',
        complete() {
          app.removePreloader();
        } };

      this.preloader.delay(500).animate(properties, options);
    },
    removePreloader() {
      this.preloader.remove();
      this.body.removeAttr('style');
      this.animateWebsite();
    },
    animateWebsite() {
      console.log('lets get pretty');
    } } });



    $(function () { 
      var controller = new ScrollMagic.Controller();
      var slides = new TimelineMax()
    
        // page one
        .to("#slideContainer", 0.5, {z: 0})		
        .to("#slideContainer", 1,   {x: "-25%"})	
        .to("#slideContainer", 0.5, {z: 0})				
    
        // page two
        .to("#slideContainer", 0.5, {z: 0})
        .to("#slideContainer", 1,   {x: "-50%"})
        .to("#slideContainer", 0.5, {z: 0})
      
        // page three
        .to("#slideContainer", 0.5, {z: 0})
        .to("#slideContainer", 1,   {x: "-75%"})
        .to("#slideContainer", 0.5, {z: 0})
    
    
      var scene = new ScrollMagic.Scene({
          triggerElement: "#pinContainer",
          triggerHook: "onLeave",
          duration: "400%",
        })
    
        
        .setPin("#pinContainer")
        .setTween(slides)
        
        .addTo(controller);
    });

    $(document).ready(function(){
      $(this).scrollTop(0);
  });

  // Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});