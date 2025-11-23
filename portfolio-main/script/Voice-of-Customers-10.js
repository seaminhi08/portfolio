document.addEventListener('DOMContentLoaded', function() {
    const part3Input = document.getElementById('email_part3');
    let currentValue = ''; // 현재 값을 임시 저장할 변수

    // 1. 포커스 이벤트 (클릭 시)
    part3Input.addEventListener('focus', function() {
        // 현재 값을 저장
        currentValue = part3Input.value;
        
        // 입력 필드를 임시로 비워 모든 datalist 옵션을 보이게 함
        part3Input.value = '';
    });

    // 2. 블러 이벤트 (포커스를 잃을 때)
    part3Input.addEventListener('blur', function() {
        // 만약 사용자가 아무것도 선택/입력하지 않았다면
        if (part3Input.value === '') {
            // 저장했던 원래 값으로 복원
            part3Input.value = currentValue;
        }
    });

    // 3. (선택 사항) datalist에서 선택한 값은 part2에 적용
    part3Input.addEventListener('change', function() {
        const part2Input = document.getElementById('email_part2');
        if (part2Input) {
            part2Input.value = part3Input.value;
        }
        // 이메일 주소 구조상 part3을 비우는 것이 일반적입니다.
        part3Input.value = '';
    });
});