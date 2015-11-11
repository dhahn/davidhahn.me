var waitFor = require('waitFor'),
    nstSlider = require('../lib/jquery.bxslider'),
    TheaterJS = require('../lib/theater');

waitFor('body.static_pages-home', function() {

  var addSayingClass = function (theater) {
    theater
      .on("say:start, erase:start", function (eventName) {
        this.utils.addClass(this.current.voice, "saying");
      })
      .on("say:end, erase:end", function (eventName) {
        this.utils.removeClass(this.current.voice, "saying");
      });

    return theater;
  };

  var splashScreenInit = function () {
    var splashScreenTheater = new TheaterJS();

    addSayingClass(splashScreenTheater)
      .describe("Keyword", { speed: .6, accuracy: .6, invincibility: 4 }, "#splash-screen .keyword")
      .describe("OtherWords", { speed: .6, accuracy: .6, invincibility: 4 }, "#splash-screen .other-words")

    splashScreenTheater.write("Keyword:Hello", 500, "OtherWords:, I'm David.");
  };

  var makerInit = function () {
    var makerTheater = new TheaterJS(),
        makerCount = -1,
        makerWordArray = JSON.parse(window.config.maker_words);
        makerTimeout = setTimeout(makerTimeoutFunction, 1000);

    addSayingClass(makerTheater)
      .describe("MakerOfThingsKeyword", { speed: .6, accuracy: .6, invincibility: 4 }, "#maker-of-things .keyword")

    function makerTimeoutFunction() {
      var new_word = makerWordArray[++makerCount % makerWordArray.length];
      makerTheater.write("MakerOfThingsKeyword:" + new_word);
      makerTimeout = setTimeout(makerTimeoutFunction, 1000);
    }
  };

  var toolsInit = function() {
    var toolsTheater = new TheaterJS(),
        toolsCount = -1,
        toolsWordArray = JSON.parse(window.config.tools_words),
        toolsTimeout = setTimeout(toolsTimeoutFunction, 1000);

    addSayingClass(toolsTheater )
      .describe("MakeThingsWithKeyword", { speed: .6, accuracy: .6, invincibility: 4 }, "#make-things-with .keyword");

    function toolsTimeoutFunction() {
      var new_word = toolsWordArray[++toolsCount % toolsWordArray.length];
      toolsTheater.write("MakeThingsWithKeyword:" + new_word);
      toolsTimeout = setTimeout(toolsTimeoutFunction, 1000);
    }
  };

  var hrefScrollInit = function() {
    $('a.next-section').on('click',function (e) {
      e.preventDefault();

      var target = this.hash,
          $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
        window.location.hash = target;
      });
    });
  };

  var projectBxSliderInit = function () {
    $('.project-wrapper').bxSlider({
      minSlides: 1,
      maxSlides: 4,
      controls: true,
      speed: 700,
      mode: 'horizontal',
      slideWidth: 260,
      slideMargin: 0,
      pager: false,
      captions: false,
      infiniteLoop: true
    });
  };

  var init = function () {
    splashScreenInit();
    makerInit();
    toolsInit();
    hrefScrollInit();
    projectBxSliderInit();
  };

  $(document).ready(function() {
    init();
  });
});