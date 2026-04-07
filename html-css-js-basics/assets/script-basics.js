// JavaScript 기본 문법

// 1) 변수 선언 (let/const)
const clickBtn = document.getElementById("click-btn");
const clickResult = document.getElementById("click-result");

// 클릭 횟수를 저장할 변수
let clickCount = 0;

// 2) 이벤트 리스너 등록
clickBtn.addEventListener("click", function () {
  // 클릭할 때마다 숫자를 1 증가
  clickCount += 1;

  // 3) DOM 텍스트 업데이트
  clickResult.textContent = "버튼을 " + clickCount + "번 클릭했습니다.";
});

// 나이 확인 기능 요소 찾기
const ageInput = document.getElementById("age-input");
const checkBtn = document.getElementById("check-btn");
const ageResult = document.getElementById("age-result");

checkBtn.addEventListener("click", function () {
  // input.value는 문자열이므로 Number()로 숫자 변환
  const age = Number(ageInput.value);

  // 입력값 검증: 숫자가 아니거나 0 이하라면 안내 문구 출력
  if (!age || age <= 0) {
    ageResult.textContent = "올바른 나이를 입력해주세요.";
    return; // 함수 종료
  }

  // 4) 조건문 if / else if / else
  if (age < 20) {
    ageResult.textContent = "청소년 또는 미성년자입니다.";
  } else if (age < 65) {
    ageResult.textContent = "성인입니다.";
  } else {
    ageResult.textContent = "시니어입니다.";
  }
});
