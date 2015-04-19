$(document).ready(function(){ 

  var theater = new TheaterJS();
  theater
    .on("say:start, erase:start", function (eventName) {
      var self    = this,
	  current = self.current.voice;

      self.utils.addClass(current, "saying");
    })
    .on("say:end, erase:end", function (eventName) {
      var self    = this,
	  current = self.current.voice;

      self.utils.removeClass(current, "saying");
    });

  theater
    .describe("Keyword", { speed: .6, accuracy: .6, invincibility: 4 }, "#splash-screen .keyword")
    .describe("OtherWords", { speed: .6, accuracy: .6, invincibility: 4 }, "#splash-screen .other-words")
    .describe("MakerOfThingsInnerText", { speed: .8, accuracy: .6, invincibility: 4 },"#maker-of-things .inner-text")
    .describe("MakerOfThingsKeyword", { speed: .6, accuracy: .6, invincibility: 4 }, "#maker-of-things .keyword")
    .describe("MakeThingsWithInnerText", { speed: .8, accuracy: .6, invincibility: 4 },"#make-things-with .inner-text")
    .describe("MakeThingsWithKeyword", { speed: .6, accuracy: .6, invincibility: 4 }, "#make-things-with .keyword");

  theater.write("Keyword:Hello", 500, "OtherWords:, I'm David.");

  var makerCount = -1,
      makerWordArray = JSON.parse(window.config.maker_words);
      makerTimeout = setTimeout(makerTimeoutFunction, 1000);

  function makerTimeoutFunction() {
    var new_word = makerWordArray[++makerCount % makerWordArray.length];
    theater.write("MakerOfThingsKeyword:" + new_word);
    makerTimeout = setTimeout(makerTimeoutFunction, 1000);
  }

  var toolsCount = -1,
      toolsWordArray = JSON.parse(window.config.tools_words),
      toolsTimeout = setTimeout(toolsTimeoutFunction, 1000);

  function toolsTimeoutFunction() {
    var new_word = toolsWordArray[++toolsCount % toolsWordArray.length];
    theater.write("MakeThingsWithKeyword:" + new_word);
    toolsTimeout = setTimeout(toolsTimeoutFunction, 1000);
  }

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });
  });


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

});
