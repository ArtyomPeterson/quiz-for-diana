console.log('Happy developing ✨')
const questions = [
    {
        text: "Как ты относишься к неожиданным предложениям?",
        options: [
            { text: "Если от правильного человека — интересно", points: 3 },
            { text: "Хочу понимать формат", points: 2 },
            { text: "Смотря какое настроение", points: 1 }
        ],
        explanation: `
      <b>A)</b> Жду в феврале, едем кататься на упряжках 🙂<br>
      <b>B)</b> Так бы и сказала — я всё спокойно объясню<br>
      <b>C)</b> Я знаю, как поднять тебе настроение
    `
    },
    {
        text: "Что тебе важнее в мужчине?",
        options: [
            { text: "Умение слушать", points: 3 },
            { text: "Чувство юмора", points: 2 },
            { text: "Спокойствие", points: 1 }
        ],
        explanation: `
      <b>A)</b> Я реально люблю диалоги<br>
      <b>B)</b> Без юмора мне сложно<br>
      <b>C)</b> Со мной можно выдохнуть
    `
    },
    {
        text: "Ты хочешь приехать к Артёму в январе?",
        options: [
            { text: "Я прилечу в декабре", points: 5 },
            { text: "Хорошо, да", points: 4 },
            { text: "Не могу", points: 2 },
            { text: "Не хочу", points: 0 }
        ],
        explanation: `
      <b>A)</b> Выдающийся результат теста 😌<br>
      <b>B)</b> Психологически здоровый ответ<br>
      <b>C)</b> Внешние обстоятельства, личность сохранна<br>
      <b>D)</b> Защитная реакция
    `
    }
];

let currentIndex = 0;
let totalScore = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const explanationEl = document.getElementById("explanation");
const nextBtn = document.getElementById("nextBtn");
const app = document.getElementById("app");

function renderQuestion() {
    answered = false;
    explanationEl.style.display = "none";
    nextBtn.style.display = "none";
    optionsEl.innerHTML = "";

    const q = questions[currentIndex];
    questionEl.textContent = q.text;

    q.options.forEach(option => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = option.text;

        div.addEventListener("click", () => {
            if (answered) return;
            answered = true;

            totalScore += option.points;

            document.querySelectorAll(".option").forEach(o =>
                o.classList.remove("selected")
            );
            div.classList.add("selected");

            explanationEl.innerHTML =
                "<b>Интерпретация ChatGPT:</b><br><br>" + q.explanation;
            explanationEl.style.display = "block";
            nextBtn.style.display = "block";
        });

        optionsEl.appendChild(div);
    });
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    let text = "";

    if (totalScore >= 10) {
        text = "Идеальная психологическая совместимость. Лёгкость, юмор и отличный контакт.";
    } else if (totalScore >= 7) {
        text = "Очень высокий уровень совпадения. Комфорт и интерес.";
    } else if (totalScore >= 4) {
        text = "Потенциальная совместимость. Нужно больше живого общения.";
    } else {
        text = "Сдержанный тип реагирования. Защитные механизмы активны.";
    }

    app.innerHTML = `
    <div class="result">
      <b>Результат:</b><br><br>
      ${text}<br><br>
      <i>Кстати, я тоже прошёл этот тест 😄</i>
    </div>
  `;
}

renderQuestion();
