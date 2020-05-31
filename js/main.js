$(function(){
    function change_btnBack(a){
        if(a==0){
            $('.header-nav__btn').css({ 'background-image': 'url("asset/image/icon-open.png")' });
        }else if(a==1){
            $('.header-nav__btn').css({ 'background-image': 'url("asset/image/icon-close.png")' });
        }
    }
    var digit = 0;
    $('.header-nav__btn').on('click touchart', function(){
        if( $(window).width() < 1050 && digit == 0 ){
            change_btnBack(1);
            $('.header__nav-list').css({'display': 'flex'});
            $('.header').addClass('header--disabled');
            digit = 1
        }else if( $(window).width() < 1050 && digit == 1 ){
            change_btnBack(0);
            $('.header__nav-list').css({'display': 'none'});
            $('.header').removeClass('header--disabled');
            digit = 0
        }else if ( $(window).width() > 1050 && digit == 0 ) {
            change_btnBack(1);
            $('.header__nav').css({ 'width': 'auto' });
            $('.header__nav-list').addClass('header__nav-list--active');
            $('.header').addClass('header--disabled');
            digit = 1
        }else if ( $(window).width() > 1050 && digit == 1 ) {
            change_btnBack(0);
            $('.header__nav-list').removeClass('header__nav-list--active')
            $('.header').removeClass('header--disabled');
            setTimeout(function(){
                $('.header__nav').css({'width': '50px'})
            }, 300);
            digit = 0
        }
    })


    $('.header__slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true,
        draggable: false,
        centerPadding: '0px'
    })
});