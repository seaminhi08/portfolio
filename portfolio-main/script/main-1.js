// HTML 문서가 완전히 로드되면 실행 (jQuery + Vanilla JS 통합)
$(document).ready(function () {

    // =========================================
    // 1. 물고기 클릭 통통 튀기기 🐟
    // =========================================
    $('.fishs img').on('click', function () {
        $(this).addClass('is-bouncing');
        // 애니메이션 끝나면 클래스 제거 (다음 클릭을 위해)
        $(this).one('animationend', function () {
            $(this).removeClass('is-bouncing');
        });
    });

    // =========================================
    // 2. 타임라인 원 클릭 시 슬라이드 ⏳
    // =========================================
    $('.item-circle').on('click', function () {
        $(this).siblings('.item-content').slideToggle();
    });

    // =========================================
    // 3. 메인 슬라이드 (이미지 롤링) 🎠
    // =========================================
    $(".item-wrap").each(function () {
        const slides = $(this).find(".menu-image");
        const total = slides.length;
        let current = 0;
        const duration = 1000; // 이동 속도
        const delay = 3000;    // 멈춰있는 시간 (2초는 너무 짧아서 3초로 늘려봄!)

        // 초기 세팅: 첫 번째 이미지만 보이게
        slides.css("left", "100%"); // 나머지는 오른쪽에 대기
        slides.eq(0).css("left", "0"); // 첫 번째만 정중앙

        function slideNext() {
            const next = (current + 1) % total; // 다음 번호 계산

            // 현재 슬라이드: 왼쪽으로 퇴장 👋
            slides.eq(current).stop().animate({ left: "-100%" }, duration);

            // 다음 슬라이드: 오른쪽에서 등장! 🤗
            slides.eq(next).css("left", "100%").stop().animate({ left: "0" }, duration);

            current = next; // 번호 교체

            // 다음 실행 예약
            setTimeout(slideNext, delay);
        }

        // 첫 시작 (딜레이 후에 시작)
        setTimeout(slideNext, delay);
    });

}); // jQuery 끝


// =========================================
// 4. 내비게이션 & 스크롤 애니메이션 (순수 JS) ✨
// =========================================
document.addEventListener("DOMContentLoaded", () => {

    // [기능 A] 내비게이션 버튼 Active 처리
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // [기능 B] 스크롤 감지 (최신 옵저버 방식) 😎
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    // 감시 대상 등록 (카드, 프로모션 섹션 등등)
    const hiddenElements = document.querySelectorAll(".product-card, .promo-section");
    hiddenElements.forEach((el) => observer.observe(el));

});



const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const closeBottom = document.getElementById("closeBottom");
const noToday = document.getElementById("noToday");

// 1) 단순 닫기
const closePopupFunc = () => {
  popup.style.display = "none";
};
closePopup.onclick = closePopupFunc;
closeBottom.onclick = closePopupFunc;

// 2) 오늘 하루 보지 않기
noToday.onclick = () => {
  const date = new Date();
  // 오늘 24시(자정)에 만료되도록 설정
  date.setHours(24, 0, 0, 0);

  // 쿠키 저장
  document.cookie =  
    "popupHide=true; expires=" + date.toUTCString() + "; path=/";

  popup.style.display = "none";
};

// 3) 쿠키 체크 (페이지 로드 시 실행)
window.onload = () => {
  if (document.cookie.includes("popupHide=true")) {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";  // 팝업 보여주기
  }
};


