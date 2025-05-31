const questions = [
  { text: "친구들과 함께 있을 때 에너지가 충전된다.", type: "E" },
  { text: "혼자만의 시간이 꼭 필요하다.", type: "I" },
  { text: "현실적인 편이다.", type: "S" },
  { text: "상상하고 아이디어 내는 걸 좋아한다.", type: "N" },
  { text: "논리적으로 판단한다.", type: "T" },
  { text: "감정과 분위기를 중시한다.", type: "F" },
  { text: "계획 세우는 걸 좋아한다.", type: "J" },
  { text: "즉흥적으로 행동하는 편이다.", type: "P" }
];

let step = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

const questionEl = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const resultEl = document.getElementById('result');
const questionBox = document.getElementById('question-box');

function showQuestion() {
  if (step < questions.length) {
    questionEl.textContent = questions[step].text;
  }
}

function showResult() {
  let mbti = '';
  mbti += scores.E >= scores.I ? 'E' : 'I';
  mbti += scores.S >= scores.N ? 'S' : 'N';
  mbti += scores.T >= scores.F ? 'T' : 'F';
  mbti += scores.J >= scores.P ? 'J' : 'P';
  questionBox.style.display = 'none';
  document.getElementById('buttons').style.display = 'none';
  resultEl.style.display = 'block';
  resultEl.textContent = `당신의 MBTI는 ${mbti}입니다!`;
}

yesBtn.addEventListener('click', () => {
  scores[questions[step].type] += 1;
  step++;
  if (step < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

noBtn.addEventListener('click', () => {
  step++;
  if (step < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// 첫 질문 표시
showQuestion();
