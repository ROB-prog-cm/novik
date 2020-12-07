$(function () {
    var link = $("#link"),
        aboutH = $("#about").innerHeight(),
        scrollOffset = $(window).scrollTop();

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();


        if (scrollOffset >= aboutH) {
            link.addClass("fixed");
        } else {
            link.removeClass("fixed");
        }

        console.log(scrollOffset);
    });


    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html,body").animate({
            scrollTop: blockOffset
        }, 500);

    });


    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active")
        $("#nav").toggleClass("active");
    });


});
