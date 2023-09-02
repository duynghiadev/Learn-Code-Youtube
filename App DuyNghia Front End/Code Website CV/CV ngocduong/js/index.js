
// Closes the sidebar menu
function menuClose() {
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
}

// Opens the sidebar menu
function menuToggle() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
}
menuClose();
menuToggle();
// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


// Change elements when hover image item on the quotes

function openQuotes(evt, quoteName) {

    var i, quotecontent, quotelinks;
    quotecontent = document.getElementsByClassName("quotecontent");
    for (i = 0; i < quotecontent.length; i++) {
        quotecontent[i].style.display = "none";
    }
    quotelinks = document.getElementsByClassName("quotelinks");

    for (i = 0; i < quotelinks.length; i++) {
        quotelinks[i].className = quotelinks[i].className.replace("active", "");
    }

    document.getElementById(quoteName).style.display = "block";
    evt.currentTarget.className += " active";
}

// When hover in li list => class quotecontent-show remove
$(document).ready(function(){
    $("li").hover(function(){
        $(".quotecontent-show").remove();
    });
});