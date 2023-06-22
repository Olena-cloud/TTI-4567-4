$(document).ready(function () {
    $(".header-links a").click(function (e) {
        e.preventDefault() 
        $(".header-links a").removeClass("active")
        $($(this)).addClass("active")
    })
});