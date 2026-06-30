// ============================================
//  ГЕНЕРАТОР ПРИЧИН — 200+ причин, 25+ категорий
// ============================================

const reasonsDB = {
    "Игровые": [
        "Он всегда прикроет, даже если это плохая идея",
        "Может проигрывать, но никогда не сдаётся",
        "Радуется твоим успехам больше, чем своим",
        "Готов играть саппортом ради тебя",
        "Знает, когда нужно пошутить после слитой катки",
        "Не винит тебя за фейлы — винит патч",
        "Всегда зовёт играть вместе",
        "Умеет смеяться над собой",
        "С тобой даже лузстрик ощущается легче",
        "Он твой тиммейт, а не просто игрок",
    ],
    "Интим": [
        "Ему важна твоя реакция и комфорт",
        "Он умеет слушать и подстраиваться",
        "Ценит близость, а не просто результат",
        "С ним безопасно быть собой",
        "Он уважает твои границы",
        "Не торопит и не давит",
        "Ему важно, чтобы тебе было хорошо",
        "Он не сравнивает тебя с другими",
        "С ним нет ощущения соревнования",
        "Он выбирает тебя, а не сценарии",
    ],
    "Финансовые": [
        "Он честен в деньгах",
        "Готов делиться даже когда немного",
        "Учится распоряжаться финансами",
        "Не скрывает траты",
        "Готов экономить ради общего",
        "С тобой у него появляется мотивация зарабатывать",
        "Он не жадный, просто иногда наивный",
        "Планирует будущее, пусть и по-своему",
        "Не боится говорить о деньгах",
        "Хочет стабильности, а не показухи",
    ],
    "Отношения": [
        "Он выбирает тебя каждый день",
        "С тобой он становится лучше",
        "Он старается, даже если не всегда идеально",
        "С ним можно быть настоящей",
        "Он ценит время вместе",
        "Не исчезает в трудные моменты",
        "Он искренний, без масок",
        "С тобой он чувствует себя дома",
        "Он привязывается глубоко",
        "Ему важны отношения, а не просто статус",
    ],
    "Бытовые": [
        "Готов учиться ради тебя",
        "Иногда неловкий, но старается",
        "Помнит мелочи, которые важны тебе",
        "Со временем становится аккуратнее",
        "Прислушивается к просьбам",
        "С тобой у него появляется режим",
        "Он ценит уют, который вы создаёте вместе",
        "Может быть ленивым, но не безразличным",
        "Дом с ним — живой, а не пустой",
        "Он хочет быть частью общего быта",
    ],
    "Интеллект": [
        "Умеет думать по-своему",
        "Интересуется тем, что тебе важно",
        "Может учиться, когда есть мотивация",
        "Задает вопросы, а не делает вид, что всё знает",
        "Не боится показаться глупым",
        "Любит обсуждать, а не спорить",
        "С ним можно смеяться и думать одновременно",
        "Он открыт к новому",
        "Иногда наивен, но искренен",
        "Растёт рядом с тобой",
    ],
    "Стиль и внешность": [
        "С тобой он старается выглядеть лучше",
        "Его внешность — не главное",
        "Он комфортный и настоящий",
        "Ты ему нравишься больше, чем он себе",
        "Ему важнее быть рядом, чем выглядеть идеально",
        "Он не притворяется кем-то другим",
        "Со временем начинает следить за собой",
        "Он не боится быть смешным",
    ],
    "Друзья": [
        "Он выбирает тебя, даже если друзья зовут",
        "Готов ставить отношения выше тусовок",
        "Защищает тебя в разговорах",
        "Не позволяет шутить за твоей спиной",
        "Считает тебя частью своей команды",
        "Ему важно твоё мнение",
        "Он не живёт только прошлым",
        "С тобой его круг общения меняется",
    ],
    "Амбиции": [
        "С тобой у него появляется цель",
        "Он мечтает, а значит ещё не сдался",
        "Ищет свой путь",
        "Хочет доказать, что может больше",
        "Не боится начинать сначала",
        "С тобой он думает о будущем",
        "Он не безнадёжен — он в процессе",
    ],
    "Здоровье": [
        "С тобой он начинает заботиться о себе",
        "Прислушивается к твоему беспокойству",
        "Готов менять привычки",
        "Старается ради тебя",
        "Ты для него — мотивация",
        "Он ценит, что ты переживаешь",
        "Хочет быть рядом надолго",
    ],
    "Будущее вместе": [
        "Он видит тебя в своём будущем",
        "Говорит о совместных планах",
        "Не убегает от разговоров",
        "Хочет расти вместе",
        "С тобой он не боится ответственности",
        "Он выбирает «мы», а не «я»",
        "Ему важно, чтобы вы были командой",
    ],
};

let allReasons = [];
let categoriesList = [];

function buildReasonsList() {
    allReasons = [];
    categoriesList = [];
    for (const [category, reasons] of Object.entries(reasonsDB)) {
        categoriesList.push(category);
        reasons.forEach(reason => {
            allReasons.push({ category, reason });
        });
    }
}

buildReasonsList();

function populateCategorySelect() {
    const select = document.getElementById('categorySelect');
    if (!select) return;
    select.innerHTML = '<option value="all">Все категории</option>';
    categoriesList.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });
}

let generatedCount = 0;
let history = [];

const resultContent = document.getElementById('resultContent');
const copyBtn = document.getElementById('copyBtn');
const categoryBadge = document.getElementById('categoryBadge');
const generateBtn = document.getElementById('generateBtn');
const categorySelect = document.getElementById('categorySelect');
const generatedCountSpan = document.getElementById('generatedCount');
const totalReasonsCount = document.getElementById('totalReasonsCount');
const categoriesCountSpan = document.getElementById('categoriesCount');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const resultCard = document.getElementById('resultCard');

if (totalReasonsCount) totalReasonsCount.textContent = `${allReasons.length}+ причин`;
if (categoriesCountSpan) categoriesCountSpan.textContent = `${categoriesList.length}+ категорий`;

function generateReason() {
    const selectedCategory = categorySelect ? categorySelect.value : 'all';

    let pool;
    if (selectedCategory === 'all') {
        pool = allReasons;
    } else {
        pool = allReasons.filter(r => r.category === selectedCategory);
    }

    if (pool.length === 0) pool = allReasons;

    const randomIndex = Math.floor(Math.random() * pool.length);
    const chosen = pool[randomIndex];

    if (resultCard) {
        resultCard.style.transition = 'none';
        resultCard.style.transform = 'scale(0.99)';
        setTimeout(() => {
            resultCard.style.transition = 'transform 150ms ease-out';
            resultCard.style.transform = 'scale(1)';
        }, 10);
    }

    resultContent.innerHTML = `
        <p class="text-xl md:text-2xl font-bold text-white leading-relaxed">"${chosen.reason}"</p>
        <p class="text-neutral-500 text-sm mt-3 italic">Категория: ${chosen.category}</p>
    `;

    categoryBadge.textContent = chosen.category;
    categoryBadge.classList.remove('hidden');

    copyBtn.classList.remove('hidden');
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(
            `Почему Элина должна бросить Магу Нефора:\n${chosen.category}\n"${chosen.reason}"`
        ).then(() => {
            copyBtn.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Скопировано
            `;
            setTimeout(() => {
                copyBtn.innerHTML = `
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                    Копировать
                `;
            }, 2000);
        });
    };

    generatedCount++;
    if (generatedCountSpan) generatedCountSpan.textContent = `Сгенерировано: ${generatedCount}`;

    history.unshift({ category: chosen.category, reason: chosen.reason, time: new Date() });
    if (history.length > 20) history.pop();
    updateHistoryList();
}

function updateHistoryList() {
    if (!historyList) return;
    if (history.length === 0) {
        historyList.innerHTML = '<li class="italic text-neutral-600">— Пока пусто.</li>';
        return;
    }
    historyList.innerHTML = history.map(h =>
        `<li class="truncate hover:text-neutral-300 transition cursor-default text-neutral-500" title="${h.reason}">${h.category} — "${h.reason}"</li>`
    ).join('');
}

if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
        history = [];
        updateHistoryList();
    });
}

if (generateBtn) {
    generateBtn.addEventListener('click', generateReason);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.activeElement === document.body) {
        e.preventDefault();
        generateReason();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    populateCategorySelect();
    updateHistoryList();
    if (generatedCountSpan) generatedCountSpan.textContent = `Сгенерировано: ${generatedCount}`;
});
