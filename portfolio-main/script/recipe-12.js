/* ========================================================
    1번째 기능! 검색창기능!
======================================================== */
function searchRecipe(event) {
    event.preventDefault();

    const keyword = document.querySelector('.search-input').value.trim();

    // 🔗 키워드 → 링크 매핑
    const links = {
        "냉어묵우동": "http://www.omadeng.com/m/brand/recipe_view.html?seq=3",
        "어묵냉우동": "http://www.omadeng.com/m/brand/recipe_view.html?seq=3",
        "냉우동": "http://www.omadeng.com/m/brand/recipe_view.html?seq=3",

        "어묵국수": "http://www.omadeng.com/m/brand/recipe_view.html?seq=1",
        "국수": "http://www.omadeng.com/m/brand/recipe_view.html?seq=1",

        "어묵전골": "http://www.omadeng.com/m/brand/recipe_view.html?seq=5",
        "전골": "http://www.omadeng.com/m/brand/recipe_view.html?seq=5",

        "어묵볶음": "http://www.omadeng.com/m/brand/recipe_view.html?seq=2",
        "매콤어묵볶음": "http://www.omadeng.com/m/brand/recipe_view.html?seq=2",
        "볶음": "http://www.omadeng.com/m/brand/recipe_view.html?seq=2"
    };

    // 이동 처리
    if (links[keyword]) {
        window.location.href = links[keyword];
    } else {
        alert("검색 결과가 없습니다.");
    }
}

/* ========================================================
    2번째 기능! 슬라이드 데이터 (여기에 원하는 이미지/내용 추가!)
======================================================== */
const slides = [
    {
        img: "img3/rsp-2.png",   // ← png로 고침
        time: "20분",
        title: "엄마가 만든 시원한 어묵국수",
        tags: "#여름요리 #어묵 #시원함"
    },
    {
        img: "img3/rsp-3.png",   // ← png로 고침
        time: "15분",
        title: "감칠맛 폭발! 매콤 어묵볶음",
        tags: "#초간단 #청양고추 #밥도둑"
    },
    {
        img: "img3/rsp-4.jpg",   // ← 이미 jpg라 그대로 유지
        time: "30분",
        title: "든든하고 깊은맛 어묵전골",
        tags: "#따뜻한요리 #국물요리"
    }
];
let currentIndex = 0;


/* ========================================================
    ⭐ 슬라이드 화면 렌더링 (이미지+텍스트 동시에 변경)
======================================================== */
function renderSlide() {
    const slide = slides[currentIndex];

    // 이미지 변경
    document.getElementById("slideImage").src = slide.img;

    // 텍스트 변경
    document.getElementById("slideTime").innerHTML = slide.time;
    document.getElementById("slideTitle").innerHTML = slide.title;
    document.getElementById("slideTags").innerHTML = slide.tags;

    // dot 업데이트
    updateDots();
}


/* ========================================================
    🔵 dot(아래 점) 생성
======================================================== */
function createDots() {
    const dotsWrapper = document.getElementById("dotsWrapper");
    dotsWrapper.innerHTML = "";

    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");

        dot.addEventListener("click", () => {
            currentIndex = index;
            renderSlide();
        });

        dotsWrapper.appendChild(dot);
    });
}


/* ========================================================
    🔵 dot 활성화 표시
======================================================== */
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}


/* ========================================================
    ◀ ▶ 버튼 기능
======================================================== */
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    renderSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    renderSlide();
});


/* ========================================================
    초기 실행
======================================================== */
createDots();
renderSlide();
