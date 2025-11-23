// HTML 문서 전체가 로드될 때까지 기다립니다.
document.addEventListener('DOMContentLoaded', function () {
    let isSauceOne = true;
    const imgElement = document.getElementById('sauceImage');

    function switchSauceImage() {
        // imgElement가 null인지 확인하는 로직은 이제 필요 없지만,
        // 혹시 모를 상황에 대비하여 유지하는 것은 좋습니다.
        if (!imgElement) return;

        if (isSauceOne) {
            imgElement.src = 'img2/soy-sauce-2.png';
            imgElement.alt = '두 번째 맛간장 이미지';
            isSauceOne = false;
        } else {
            imgElement.src = 'img2/soy-sauce-1.png';
            imgElement.alt = '첫 번째 맛간장 이미지';
            isSauceOne = true;
        }
    }

    // 이 시점에서는 imgElement가 null이 아님을 보장합니다.
    if (imgElement) {
        imgElement.addEventListener('click', switchSauceImage);
    }
});



/***/
// HTML 문서 전체가 로드될 때까지 기다립니다.
document.addEventListener('DOMContentLoaded', function () {

    // 🌟 1. ID에 맞게 요소를 가져오고, 변수 이름을 명확히 변경합니다.
    const imgGravyElement = document.getElementById('sauceImage2'); // HTML의 ID: sauceImage2 사용
    
    // 🌟 2. 상태 변수를 '육수' 로직에 맞게 변경합니다. (gravy-1이 첫 번째 상태)
    let isGravyOne = true; 

    function switchGravyImage() { // 🌟 3. 함수 이름도 육수 관련으로 변경
        // 🌟 4. if (!imgGravyElement)를 사용하여 안전 장치
        if (!imgGravyElement) return;

        if (isGravyOne) {
            // 현재 gravy-1 -> gravy-2로 전환
            imgGravyElement.src = 'img2/gravy-2.png'; 
            imgGravyElement.alt = '두 번째 육수 이미지';
            isGravyOne = false;
        } else {
            // 현재 gravy-2 -> gravy-1로 전환 (이미지 전환이 되도록 경로 수정)
            imgGravyElement.src = 'img2/gravy-1.png';
            imgGravyElement.alt = '첫 번째 육수 이미지';
            isGravyOne = true;
        }
    }

    // 🌟 5. 요소가 존재하는지 확인하고 이벤트 리스너를 붙입니다.
    if (imgGravyElement) {
        imgGravyElement.addEventListener('click', switchGravyImage);
    }
});