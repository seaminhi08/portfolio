const images    = document.querySelectorAll(".zoom-img");
const modal     = document.querySelector(".img-modal");
const modalImage = document.getElementById("modalImage");
const closeBtn  = document.querySelector(".modal-close");

if (images.length && modal && modalImage && closeBtn) {
  images.forEach((img) => {
    img.addEventListener("click", () => {
      const rect = img.getBoundingClientRect();

      // 클릭된 카드
      const parent   = img.closest(".square-card");
      const allCards = Array.from(document.querySelectorAll(".square-card"));
      const cardIndex = allCards.indexOf(parent); // 0 ~ 5 (6개 카드 기준)

      // 모달 열기
      modal.style.display = "flex";   // ⭐ flex로 해야 가운데 정렬됨
      modalImage.src = img.src;

      // 시작 위치: 클릭한 이미지 자리
      modalImage.style.top    = rect.top + window.scrollY + "px";
      modalImage.style.left   = rect.left + window.scrollX + "px";
      modalImage.style.width  = rect.width + "px";
      modalImage.style.height = rect.height + "px";
      modalImage.style.opacity = 1;

      // ===== 3×2 레이아웃 기준 열(column) 계산 =====
      const col = cardIndex % 3;         // 0,1,2
      const colPos = [25, 50, 75];       // 왼/중/오 위치(%)

      requestAnimationFrame(() => {
        modalImage.style.top  = "50%";
        modalImage.style.left = colPos[col] + "%";
        modalImage.style.transform = "translate(-50%, -50%) scale(1)";
        modalImage.style.width  = "900px"; // 크게
        modalImage.style.height = "auto";
        modalImage.style.opacity = 1;
      });
    });
  });

  // 배경 클릭 시 닫기 (검은 부분만)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImage.style.opacity = 0;
    }
  });

  // X 버튼
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImage.style.opacity = 0;
  });
}
////////////////////////////////////////////////////////////////
const cards = document.querySelectorAll(".card-box");
const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");

let index = 0; // 현재 슬라이드 페이지

function updateSlide() {
  // 한 페이지 = 3개
  const pageSize = 3;

  cards.forEach((card, i) => {
    if (i >= index * pageSize && i < (index + 1) * pageSize) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

updateSlide();

leftBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlide();
  }
});

rightBtn.addEventListener("click", () => {
  if ((index + 1) * 3 < cards.length) {
    index++;
    updateSlide();
  }
});
