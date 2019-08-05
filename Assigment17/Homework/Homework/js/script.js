
$(document).ready(function(){
    function show(){
        $('.overlay').fadeToggle('slow');
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle'
        },1000);
    }
    function hide(){        
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle'
        },1000);
        $('.overlay').fadeToggle('slow');
    }
    $('.main_btna').on('click',function(){
        show();
    });
    $('.main_btn').on('click',function(){
        show();
    });
    $('.main_nav nav>ul li:eq(1) a').on('click',function(){
        show();
    });
    $('.close').on('click',function(){
        hide();
    });
});