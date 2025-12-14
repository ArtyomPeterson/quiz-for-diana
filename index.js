// =======================
// ДАННЫЕ ТЕСТА
// =======================

const questions = [
    {
        type: "choice",
        text: "Как ты относишься к неожиданным предложениям?",
        options: [
            {
                text: "Если от правильного человека - интересно",
                points: 3,
                hint: "Жду в феврале, едем кататься на упряжках 🙂❄️"
            },
            {
                text: "Хочу понимать формат",
                points: 3,
                hint: "Так бы и сказала - я всё спокойно объясню 🤓"
            },
            {
                text: "Смотря какое настроение",
                points: 2,
                hint: "Я обычно знаю, как его поднять 😎"
            }
        ]
    },
    {
        type: "choice",
        text: "Как тебе комфортнее знакомиться?",
        options: [
            {
                text: "Когда всё само складывается",
                points: 3,
                hint: "Я все устрою, ты главное не сопротивляйся 😘"
            },
            {
                text: "Легко и без спешки",
                points: 3,
                hint: "Спешить некуда, я свободен до четверга 😏"
            },
            {
                text: "Когда понятно, кто и зачем",
                points: 3,
                hint: "Если что - объясню с презентацией 😄"
            }
        ]
    },
    {
        type: "choice",
        text: "Что тебе важнее в мужчине?",
        options: [
            {
                text: "Чувство юмора",
                points: 3,
                hint: "🤡"
            },
            {
                text: "Надежность",
                points: 3,
                hint: "Можешь на меня положиться... и поусесться"
            },
            {
                text: "Щедрость",
                points: 2,
                hint: "Щедрость на комплементы считается?"
            }
        ]
    },
    {
        type: "choice",
        text: "Как ты понимаешь, что человек тебе симпатичен?",
        options: [
            {
                text: "С ним легко и смешно",
                points: 3,
                hint: "Контакт установлен 💪😄"
            },
            {
                text: "Хочется делиться",
                points: 3,
                hint: "В основном мемами"
            },
            {
                text: "Просто чувствую",
                points: 3,
                hint: "Это мой вариант, он уже занят 😌"
            }
        ]
    },
    {
        type: "text",
        text: "Напиши самый необычный факт о себе ✍️"
    },
    {
        type: "choice",
        text: "Как ты реагируешь на комплименты?",
        options: [
            {
                text: "Смущаюсь, но приятно",
                points: 3,
                hint: "Кстати, ты красотка 🔥"
            },
            {
                text: "Спокойно принимаю",
                points: 3,
                hint: "Ты очаровательна 😍 (и да - верни фотки в телегу 😤)"
            },
            {
                text: "Отвечаю шуткой",
                points: 3,
                hint: "Готовься шутить часто 😄 Ты ещё и умна 🤩"
            },
        ]
    },
    {
        type: "choice",
        text: "Как ты относишься к флирту?",
        options: [
            {
                text: "Если умно - люблю",
                points: 3,
                hint: "Мой гений меня еще не подводил 🧠"
            },
            {
                text: "Если ненавязчиво - окей",
                points: 3,
                hint: "Разработка сайта с квизом - это ненавязчиво? 😅"
            },
            {
                text: "Предпочитаю осторожно",
                points: 2,
                hint: "Темп всегда можно подобрать 🙂"
            }
        ]
    },
    {
        type: "choice",
        text: "Что для тебя \"химия\" между людьми?",
        options: [
            {
                text: "Когда появляется желание увидеться ещё раз",
                points: 3,
                hint: "Самый точный ответ 👍"
            },
            {
                text: "Когда ждёшь сообщения",
                points: 3,
                hint: "О пополнении счета"
            },
            {
                text: "Когда ловишь себя на улыбке без причины",
                points: 3,
                hint: "Ты сейчас улыбаешься? 😏"
            }
        ]
    },
    {
        type: "choice",
        text: "Что тебя быстрее всего расслабляет?",
        options: [
            {
                text: "Разговор с близким человеком",
                points: 3,
                hint: "Буду писать чаще 😊"
            },
            {
                text: "Музыка",
                points: 3,
                hint: "Ского будет готово 😘"
            },
            {
                text: "Массаж",
                points: 3,
                hint: "У меня, между прочим, сильные руки 💪😌"
            }
        ]
    },
    {
        type: "choice",
        text: "Любимый жанр музыки?",
        options: [
            {
                text: "Поп / инди-поп / танцевальная",
                points: 3,
                hint: "🪩"
            },
            {
                text: "Рок / метал / рок-н-ролл",
                points: 3,
                hint: "🤘"
            },
            {
                text: "Латиноамериканская / кантри / фолк",
                points: 3,
                hint: "💃"
            },
            {
                text: "Джаз / блюз",
                points: 3,
                hint: "🎺"
            },
            {
                text: "Электронная / хаус / техно",
                points: 2,
                hint: "🦾"
            },
            {
                text: "Хип-хоп / R&B / реп",
                points: 2,
                hint: "😨"
            },
            {
                text: "Слушаю разное",
                points: 3,
                hint: "Определись пожалуйста"
            }
        ]
    },
    {
        type: "choice",
        text: "Любимые цветы?",
        options: [
            {
                text: "Без разницы, главное внимание",
                points: 3,
                hint: "Очень здоровый подход"
            },
            {
                text: "Те, которые дарят с поводом",
                points: 3,
                hint: "Повод я обязательно придумаю 💐"
            },
            {
                text: "Я скину ссылку, закажешь",
                points: 2,
                hint: "Хотя бы честно 😄"
            }
        ]
    },
    {
        type: "choice",
        text: "Что для тебя идеальный вечер?",
        options: [
            {
                text: "Разговоры и смех",
                points: 3,
                hint: "Очень мой вариант 😄"
            },
            {
                text: "Спокойный уют",
                points: 3,
                hint: "Иногда именно это"
            },
            {
                text: "Кино и чипсы",
                points: 3,
                hint: "Уважительно 🙂‍↕️"
            }
        ]
    },
    {
        type: "choice",
        text: "Как ты относишься к спонтанным поездкам?",
        options: [
            {
                text: "Обожаю",
                points: 3,
                hint: "+1000 баллов ✈️🔥"
            },
            {
                text: "Если всё продумано",
                points: 3,
                hint: "Я умею планировать"
            },
            {
                text: "Редко",
                points: 2,
                hint: "Ну ладно 😬"
            }
        ]
    },
    {
        type: "choice",
        text: "Что может оттолкнуть в человеке?",
        options: [
            {
                text: "Отсутствие юмора",
                points: 3,
                hint: "Я в безопасности 😎"
            },
            {
                text: "Давление",
                points: 3,
                hint: "Никакого давления - просто приезжай в Осло"
            },
            {
                text: "Излишняя серьёзность",
                points: 2,
                hint: "Жизнь и так достаточно серьёзная 🙃"
            },
            {
                text: "Излишняя несерьёзность",
                points: 2,
                hint: "Я абсолютно серьезен 😑"
            }
        ]
    },
    {
        type: "choice",
        text: "Как ты понимаешь, что с человеком можно быть собой?",
        options: [
            {
                text: "Не нужно притворяться",
                points: 3,
                hint: "Это большая редкость ✨"
            },
            {
                text: "Можно быть смешной",
                points: 3,
                hint: "Это грин флаг 😂"
            },
            {
                text: "Можно молчать",
                points: 2,
                hint: "Это уже высокий уровень"
            }
        ]
    },
    {
        type: "choice",
        text: "Что для тебя важнее на свидании?",
        options: [
            {
                text: "Лёгкость разговора",
                points: 3,
                hint: "Я умею поддержать 💬"
            },
            {
                text: "Атмосфера романтики",
                points: 3,
                hint: "Её можно создать 🌙✨"
            },
            {
                text: "Чтобы не было неловко",
                points: 3,
                hint: "Я, увы, апологет кринжа 🤡❤️"
            },
            {
                text: "Килограммовый омар и бутылка шампанского",
                points: 3,
                hint: "Организую 🦞🍾😏"
            }
        ]
    },
    {
        type: "text",
        text: "Опиши своё идеальное свидание тремя словами ✨"
    },
    {
        type: "choice",
        text: "Как ты относишься к инициативе от мужчины?",
        options: [
            {
                text: "Люблю",
                points: 3,
                hint: "Тогда я точно на своём месте 😌"
            },
            {
                text: "Если аккуратно",
                points: 3,
                hint: "Именно так 🙂"
            },
            {
                text: "Лучше пополам",
                points: 2,
                hint: "Тогда с тебя песня 🎤😂"
            }
        ]
    },
    {
        type: "choice",
        text: "Как ты обычно принимаешь решения?",
        options: [
            {
                text: "По ощущениям",
                points: 3,
                hint: "Интуиция редко врёт 🔮"
            },
            {
                text: "Обдумываю",
                points: 3,
                hint: "Зрелый подход 🧠"
            },
            {
                text: "Долго сомневаюсь",
                points: 2,
                hint: "Я заметил 👀"
            }
        ]
    },
    {
        type: "text",
        text: "Напиши, о чём ты думаешь прямо сейчас 💭"
    }
];

let currentIndex = 0;
let answers = []; // { question, answer, points }
let totalScore = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const app = document.getElementById("app");
const progressBar = document.getElementById("progressBar");

// =======================
// ПРОГРЕСС
// =======================

function updateProgress() {
    const progress = ((currentIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function renderQuestion() {
    const q = questions[currentIndex];

    questionEl.textContent = q.text;
    optionsEl.innerHTML = "";

    updateProgress();

    // Кнопка "Назад" — только со второго вопроса
    backBtn.style.display = currentIndex > 0 ? "block" : "none";

    // Кнопка "Дальше" — неактивна, пока нет ответа
    nextBtn.disabled = true;

    // ---------- ВОПРОС С ВАРИАНТАМИ ----------
    if (q.type === "choice") {
        q.options.forEach(option => {
            const optionEl = document.createElement("div");
            optionEl.className = "option";

            const textEl = document.createElement("div");
            textEl.textContent = option.text;

            const hintEl = document.createElement("div");
            hintEl.className = "hint";
            hintEl.textContent = option.hint;
            hintEl.style.display = "none";

            optionEl.appendChild(textEl);
            optionEl.appendChild(hintEl);

            optionEl.addEventListener("click", () => {
                document.querySelectorAll(".option").forEach(o => {
                    o.classList.remove("selected");
                    const h = o.querySelector(".hint");
                    if (h) h.style.display = "none";
                });

                optionEl.classList.add("selected");
                hintEl.style.display = "block";

                answers[currentIndex] = {
                    question: q.text,
                    answer: option.text,
                    points: option.points
                };

                nextBtn.disabled = false;
            });

            // восстановление выбранного варианта
            if (answers[currentIndex]?.answer === option.text) {
                optionEl.classList.add("selected");
                hintEl.style.display = "block";
                nextBtn.disabled = false;
            }

            optionsEl.appendChild(optionEl);
        });
    }

    if (q.type === "text") {
        const textarea = document.createElement("textarea");
        textarea.placeholder = "Напиши здесь...";
        textarea.value = answers[currentIndex]?.answer || "";

        textarea.addEventListener("input", () => {
            answers[currentIndex] = {
                question: q.text,
                answer: textarea.value,
                points: 0
            };

            nextBtn.disabled = textarea.value.trim().length === 0;
        });

        nextBtn.disabled = !(answers[currentIndex]?.answer?.trim().length > 0);

        optionsEl.appendChild(textarea);
    }
}

nextBtn.addEventListener("click", () => {
    if (!answers[currentIndex]) return;

    currentIndex++;

    if (currentIndex < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
});

backBtn.addEventListener("click", () => {
    if (currentIndex === 0) return;
    currentIndex--;
    renderQuestion();
});

function getResultByScore(score) {
    if (score >= 47) {
        return {
            title: "🔥 Редкое совпадение",
            text: `
                Чувствуются лёгкость, юмор и интерес.
                Ты умеешь чувствовать момент и не боишься эмоций.
                <br><br>
                Честно? С таким результатом тест обычно заканчивается встречей 😌
            `
        };
    }

    if (score >= 43) {
        return {
            title: "✨ Очень приятное совпадение",
            text: `
                С тобой спокойно, легко и без напряжения.
                Ты выбираешь комфорт и искренность -
                а это лучшая база для продолжения 🙂
            `
        };
    }

    if (score >= 40) {
        return {
            title: "🙂 Есть интерес",
            text: `
                Ты аккуратно выбираешь, кому открываться,
                но при этом не закрыта от нового.
                <br><br>
                Тебе важно, чтобы было комфортно —
                и это очень здоровый подход.
            `
        };
    }

    if (score >= 37) {
        return {
            title: "🌙 Осознанность",
            text: `
                Ты ценишь границы и личное пространство.
                <br><br>
                Иногда самые интересные истории
                начинаются именно так.
            `
        };
    }

    return {
        title: "👀 Интрига",
        text: `
            Похоже, ты проходила тест с иронией
            или в особом настроении.
            <br><br>
            В любом случае — я намерен узнавать тебя вне тестов 😉
        `
    };
}

let confettiCanvas;
let confettiCtx;
let confettiParticles = [];
let confettiAnimationId;

function launchConfetti() {
    confettiCanvas = document.createElement("canvas");
    confettiCanvas.id = "confetti-canvas";
    document.body.appendChild(confettiCanvas);

    confettiCtx = confettiCanvas.getContext("2d");
    resizeConfettiCanvas();

    confettiParticles = [];

    const colors = ["#6366f1", "#22c55e", "#f59e0b", "#ec4899", "#38bdf8"];

    for (let i = 0; i < 150; i++) {
        confettiParticles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 40 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncrement: Math.random() * 0.1 + 0.05,
            tiltAngle: 0
        });
    }

    animateConfetti();

    // авто-остановка через 3 секунды
    setTimeout(stopConfetti, 3000);
}

function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
}

window.addEventListener("resize", () => {
    if (confettiCanvas) resizeConfettiCanvas();
});

function animateConfetti() {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiParticles.forEach(p => {
        p.tiltAngle += p.tiltAngleIncrement;
        p.y += Math.cos(p.d) + 3;
        p.x += Math.sin(p.d);
        p.tilt = Math.sin(p.tiltAngle) * 15;

        confettiCtx.beginPath();
        confettiCtx.lineWidth = p.r;
        confettiCtx.strokeStyle = p.color;
        confettiCtx.moveTo(p.x + p.tilt + p.r, p.y);
        confettiCtx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
        confettiCtx.stroke();
    });
}

function stopConfetti() {
    cancelAnimationFrame(confettiAnimationId);
    if (confettiCanvas) {
        confettiCanvas.remove();
        confettiCanvas = null;
    }
}

function buildResultData() {
    const result = getResultByScore(totalScore);

    return {
        meta: {
            version: "1.0",
            createdAt: new Date().toISOString()
        },
        result: {
            score: totalScore,
            title: result.title
        },
        answers: answers.map((a, index) => ({
            index: index + 1,
            question: a.question,
            answer: a.answer,
            points: a.points ?? null
        }))
    };
}


function buildResultFile() {
    return new File(
        [JSON.stringify(buildResultData(), null, 2)],
        "quiz-result.artem",
        { type: "application/json" }
    );
}

function downloadResultFile() {
    const blob = new Blob(
        [JSON.stringify(buildResultData(), null, 2)],
        { type: "application/json;charset=utf-8;" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "quiz-result.artem";
    link.click();

    URL.revokeObjectURL(url);
}



async function shareResultFile() {
    if (!navigator.share) {
        alert(
            "Этот браузер не поддерживает быстрый шеринг 😕\n" +
            "Файл сейчас скачается, его можно отправить вручную."
        );
        downloadResultFile();
        return;
    }

    try {
        await navigator.share({
            title: "Результат квиза",
            text: "Я прошла твой квиз 🙂",
            files: [buildResultFile()]
        });
    } catch (err) {
        console.log("Шеринг отменён", err);
    }
}

function showResult() {
    totalScore = answers.reduce((sum, a) => sum + (a.points || 0), 0);
    progressBar.style.width = "100%";

    const result = getResultByScore(totalScore);

    if (totalScore >= 43) launchConfetti();

    app.innerHTML = `
        <div class="result">
            <h3>${result.title}</h3>
            <p>${result.text}</p>

            <p style="margin-top:20px;">
                Чтобы получить награду, системе нужно визуальное подтверждение 📸
                <br><br>
                Отправь Артёму селфи и поделись с ним результатом теста 🥰
            </p>
        
            <div class="buttons">
                <button onclick="shareResultFile()">Поделиться результатом</button>
                <button onclick="restart()">Пройти тест заново</button>
            </div>
        </div>
    `;
}

function restart() {
    currentIndex = 0;
    answers = [];
    totalScore = 0;
    location.reload();
}

renderQuestion();
