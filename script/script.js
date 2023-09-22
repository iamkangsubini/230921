$('.sub').hide() //서브메뉴 숨기기
$('nav > ul > li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown()
}); //메뉴에 마우스를 올렸을때, 메뉴(this)의 자식(find)인 서브메뉴를 내린다
$('nav > ul > li').on('mouseout',function(){
    $(this).find('.sub').stop().slideUp()
}); //메뉴에서 마우스를 치웠을때, 메뉴(this)의 자식(find)인 서브메뉴를 올린다

//공지사항 첫 글 클릭 시 팝업 보이기
$('.c1 a:first-child').on('click',function(){
    $('.popup').show()
});
//팝업 닫기 클릭 시 팝업 숨기기
$('.popup a').on('click',function(){
    $('.popup').hide()
});

//공지, 갤러리 탭 구조
//공지 클릭 시 갤러리(숨기기) 공지(보이기)
$('.c2').hide() //맨 처음에 갤러리 안보이기
$('.c12 .title a:first-child').on('click',function(){
    //active Class 활용
    //모든 제목 active 클래스 해제
    //클릭한 제목 대상이 active 적용
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c2').hide()
    $('.c1').show()
});
//갤러리 클릭 시 갤러리(보이기) 공지(숨기기)
$('.c12 .title a:last-child').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').hide()
    $('.c2').show()
});

//슬라이드
//1. 이미지 슬라이드는「Fade-in, Fade-out」효과를 이용하여 제작한다. (하나의 이미지가 서서히 사라지고, 다른 이미지가 서서히 나타나는 효과이다.) 
//2. 슬라이드는 매 3초 이내로 하나의 이미지에서 다른 이미지로 전환되어야 한다. 
//3.  웹사이트를 열었을 때 자동으로 시작되어 반복적으로(마지막 이미지가 사라지 면 다시 첫 번째 이미지가 나타나는 방식) 전환 되어야한다.
$('.slide').hide()
$('.slide').eq(0).show() //eq:nth

let count = 0
setInterval(function(){
    count++
    if(count>2){count=0}
    console.log(count)
    $('.slide').fadeOut() //제자리 모든 슬라이드 숨기기
    $('.slide').eq(count).fadeIn()
},3000);