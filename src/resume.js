$('.tabs').on('click', 'li', function (e) {
    $('.container-content').addClass('bounceIn');
    setTimeout(function () {
        $('.container-content').removeClass('bounceIn');
    }, 1000);
    let $li = $(e.currentTarget);
    let index = $li.index();
    $li.addClass('active').siblings('.active').removeClass('active');
    $('.tab-content > section').eq(index).addClass('active').siblings('.active').removeClass('active')
});
setInterval(function () {
    var index = $('.cycle-slide.active').index();
    index = index + 1;
    if (index === 3) {
        index = 0
    }
    $('.cycle-slide').eq(index).addClass('active').siblings().removeClass('active')
}, 3000);
var list = true;
var list2 = true;
var list3 = true;
var list4 = true;
var list5 = true;
if($('.tab-content>section').hasClass('active')){
    list2 = false
}
$('.profile').prev('.tab-content-title').click(function(){
    if($('.profile').hasClass('active')){
        list = false
    }else if($('.profile').siblings('section').hasClass('active') || !$('.profile').hasClass('active')){
        list = true
    }
    if(list){
        $('.profile').addClass('active').siblings('section.active').removeClass('active');
        list = false
    }else{
        $('.profile').removeClass('active');
        list = true
    }
    $('html, body').animate({scrollTop: $('.tab-content-title').offset().top - 50}, 600);
});
$('.projects').prev('.tab-content-title').click(function(){
    if($('.projects').hasClass('active')){
        list2 = false
    }else if($('.projects').siblings('section').hasClass('active') || !$('.projects').hasClass('active')){
        list2 = true
    }
    if(list2){
        $('.projects').addClass('active').siblings('section.active').removeClass('active');
        list2 = false
    }else{
        $('.projects').removeClass('active');
        list2 = true
    }
    $('html, body').animate({scrollTop: $('.tab-content-title').offset().top - 50}, 600);
});
$('.demos').prev('.tab-content-title').click(function(){
    if($('.demos').hasClass('active')){
        list3 = false
    }else if($('.demos').siblings('section').hasClass('active') || !$('.demos').hasClass('active')){
        list3 = true
    }
    if(list3){
        $('.demos').addClass('active').siblings('section.active').removeClass('active');
        list3 = false
    }else{
        $('.demos').removeClass('active');
        list3 = true
    }
    $('html, body').animate({scrollTop: $('.tab-content-title').offset().top - 50}, 600);
});
$('.skills').prev('.tab-content-title').click(function(){
    if($('.skills').hasClass('active')){
        list4 = false
    }else if($('.skills').siblings('section').hasClass('active') || !$('.skills').hasClass('active')){
        list4 = true
    }
    if(list4){
        $('.skills').addClass('active').siblings('section.active').removeClass('active');
        list4 = false
    }else{
        $('.skills').removeClass('active');
        list4 = true
    }
    $('html, body').animate({scrollTop: $('.tab-content-title').offset().top - 50}, 600);
});
$('.address').prev('.tab-content-title').click(function(){
    if($('.address').hasClass('active')){
        list5 = false
    }else if($('.address').siblings('section').hasClass('active') || !$('.address').hasClass('active')){
        list5 = true
    }
    if(list5){
        $('.address').addClass('active').siblings('section.active').removeClass('active');
        list5 = false
    }else{
        $('.address').removeClass('active');
        list5 = true
    }
    $('html, body').animate({scrollTop: $('.tab-content-title').offset().top - 50}, 600);
});