var swiper = new Swiper(".main", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
/*메인배너슬라이드끝*/

AOS.init();
/*스크롤애니메이션효과*/

$(document).ready(function () {
    var jbOffset = $('#header').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 969) {//여기 지정된 길이 이후부터 적용됩니다
            $('#header').addClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('#header').removeClass("on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });
});
  /*특정부분픽스되게하기*/