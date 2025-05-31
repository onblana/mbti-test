const questions = [
  // E (외향)
  { text: "새로운 사람을 만나는 것이 즐겁다.", type: "E" },
  { text: "여러 사람과 함께 있을 때 에너지가 충전된다.", type: "E" },
  { text: "파티나 모임에서 중심이 되는 걸 좋아한다.", type: "E" },
  // I (내향)
  { text: "혼자만의 시간이 꼭 필요하다.", type: "I" },
  { text: "생각을 정리할 때 글을 쓰거나 혼자만의 시간을 갖는다.", type: "I" },
  { text: "많은 사람과 함께 있으면 쉽게 피곤해진다.", type: "I" },
  // S (감각)
  { text: "현실적이고 구체적인 사실에 집중하는 편이다.", type: "S" },
  { text: "세부사항을 꼼꼼하게 챙기는 것이 중요하다고 생각한다.", type: "S" },
  { text: "과거의 경험을 바탕으로 판단하는 편이다.", type: "S" },
  // N (직관)
  { text: "새로운 아이디어나 가능성을 상상하는 걸 좋아한다.", type: "N" },
  { text: "미래에 대한 상상을 자주 한다.", type: "N" },
  { text: "직감적으로 결정을 내릴 때가 많다.", type: "N" },
  // T (사고)
  { text: "결정을 내릴 때 논리와 객관성을 중시한다.", type: "T" },
  { text: "문제를 해결할 때 감정보다 사실에 집중한다.", type: "T" },
  { text: "비판을 받아도 감정적으로 크게 동요하지 않는다.", type: "T" },
  // F (감정)
  { text: "다른 사람의 감정에 쉽게 공감한다.", type: "F" },
  { text: "갈등 상황에서 상대방의 기분을 먼저 생각한다.", type: "F" },
  { text: "누군가 힘들어하면 도와주고 싶어진다.", type: "F" },
  // J (판단)
  { text: "계획을 세우고 그에 따라 움직이는 것이 편하다.", type: "J" },
  { text: "일정을 미리 정해두는 것을 선호한다.", type: "J" },
  { text: "마감일을 잘 지키는 편이다.", type: "J" },
  // P (인식)
  { text: "즉흥적으로 결정하는 것을 좋아한다.", type: "P" },
  { text: "상황에 따라 유연하게 대처하는 편이다.", type: "P" },
  { text: "계획보다는 그때그때 하고 싶은 대로 하는 것을 선호한다.", type: "P" }
];

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(questions);

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
