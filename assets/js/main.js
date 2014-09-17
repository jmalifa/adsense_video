$(document).ready(function(){
    
    $(document).foundation();
    
    isMobDevice = (/iphone|ipad|Android|webOS|iPod|BlackBerry|Windows Phone|ZuneWP7/gi).test(navigator.appVersion);

    if(!isMobDevice){
    $("img").lazyload({
      placeholder : "images/white.gif",
      effect: "fadeIn",
      failure_limit : 10
    });
    }else{
    $('img').each(function(){
      $(this).attr('src',$(this).data('original'));
    });
    }
    // $("img.lazy").lazyload({
    //     effect : "fadeIn",
    //     failure_limit : 10
    //  });
});


$(".bella-save-a-child").hover(function(){
    $("#filter").animate({"width": 646}, 800);
    $("#savechildtext").delay( 800 ).fadeIn( 1000);
    $("#learn").delay( 1200 ).fadeIn( 1000);
});

