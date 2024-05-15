//TEXT ANIMATION HEADER 
var typed = new Typed('#textAnim', {
    strings: ['Larry Daniels','Developer','Designer'],
    typeSpeed: 30,
    backSpeed: 40,
    backDelay: 1500,
    showCursor: true,
    cursorChar: "|", 
    cursorBlinking:false,
    onStringTyped: function() {
        // Stop cursor blinking after typing each string
        $(".typed-cursor").css("animation", "none");
        $(".typed-cursor").addClass("custom-cursor");
    },
    loop: true
  });
