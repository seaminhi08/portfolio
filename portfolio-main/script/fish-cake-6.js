$(document).ready(function () {

    const slides = [
        {
            img: "img/food3.png",
            texts: ["삼각<br>어묵", "전통<br>어묵", "넓적<br>어묵"]
        },
        {
            img: "img/img2.png",
            texts: ["어묵<br>꼬치", "어묵<br>바", "미니<br>사각"]
        },
        {
            img: "img2/fishs-img1.png",
            texts: ["치즈<br>어묵", "매콤<br>어묵", "오징어<br>어묵"]
        }
    ];

    let currentIndex = 0;

    function updateSlide() {
        $(".menu-left-content img")
            .fadeOut(150, function () {
                $(this).attr("src", slides[currentIndex].img).fadeIn(150);
            });

        $(".menu-box").each(function (i) {
            $(this).html(slides[currentIndex].texts[i]);
        });
    }

    $(".arrow-right").on("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    });

    $(".arrow-left").on("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });

});
