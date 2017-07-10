$(document).ready(function(){
    setTimeout(function () {
        var preloader = $(".preloader");

        if( !preloader.hasClass("preloader__done") ) {
            preloader.addClass("preloader__done");
        }
    }, 1000);
});