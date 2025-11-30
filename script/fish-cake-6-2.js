/**************************************************************
 *  📌 SECTION 1 — 이미지 줌(모달) 기능
 **************************************************************/
const images = document.querySelectorAll(".zoom-img");
const modal = document.querySelector(".img-modal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal-close");

if (images.length && modal && modalImage && closeBtn) {
  images.forEach((img) => {
    img.addEventListener("click", () => {
      const rect = img.getBoundingClientRect();

      const parent = img.closest(".square-card");
      const allCards = Array.from(document.querySelectorAll(".square-card"));
      const cardIndex = allCards.indexOf(parent);

      modal.style.display = "flex";
      modalImage.src = img.src;

      modalImage.style.top = rect.top + window.scrollY + "px";
      modalImage.style.left = rect.left + window.scrollX + "px";
      modalImage.style.width = rect.width + "px";
      modalImage.style.height = rect.height + "px";
      modalImage.style.opacity = 1;

      const col = cardIndex % 3;
      const colPos = [25, 50, 75];

      requestAnimationFrame(() => {
        modalImage.style.top = "50%";
        modalImage.style.left = colPos[col] + "%";
        modalImage.style.width = "1200px";
        modalImage.style.height = "auto";
        modalImage.style.opacity = 1;
      });
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImage.style.opacity = 0;
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.style.opacity = 0;
  });
}

// ===========================================================
// 📌 SECTION 3 — Swiper 슬라이드 (완전한 버전)
// ===========================================================
var swiper = new Swiper(".fish-swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 20,

  // 🔥 화살표 기능
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 🔥 손가락/마우스로 슬라이드 밀기 활성화
  grabCursor: true,
  touchRatio: 1,
  touchAngle: 30,
  simulateTouch: true,
});
