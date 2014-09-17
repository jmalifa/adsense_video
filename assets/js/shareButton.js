$(document).ready(function(){

    
    var calc = stickyCalc();

    if(calc.mainComparison >= calc.articleShareTop) {
        $('.sticker').addClass('stick');
    }
});

$(window).scroll(stickyShare);
$(window).scroll(shareToggle);
$(window).resize(stickyShare);

function stickyCalc() {
    scrollTop = $(window).scrollTop();
    viewPort = $(window).height();
    mainComparison = scrollTop + viewPort;
    articleShareTop = $('.article-share').offset().top;
    articleShareBottom = $('.article-share').height() + articleShareTop;

    return {
        scrollTop:scrollTop,
        viewPort:viewPort,
        mainComparison:mainComparison,
        articleShareTop:articleShareTop,
        articleShareBottom:articleShareBottom
    }
}


function stickyShare() {
    var calc = stickyCalc();
    var heightTotal = calc.mainComparison;
    var articleShareTop = calc.articleShareTop;
    var articleShareBottom = calc.articleShareBottom;

    if (heightTotal >= articleShareTop + 50 && heightTotal <= articleShareBottom) {
        $('.sticker').addClass('stick');
    }
    else {
        $('.sticker').removeClass('stick');
    }
}


function shareToggle() {
    $('.share-tools1').fadeOut(200);
    $('.sticker').fadeIn(500);
}


$('.sticker').click(function() {
    $('.sticker').fadeOut(200);
    $('.share-tools1').fadeIn(500);
});
