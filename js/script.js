let ua = {
    name_l: 'Г<span>|</span>O',
    name: 'Грінченко Олексій',
    name_d: 'Front-end розробник',
    age: 'Повних років: 32',
    location: 'Місце проживання: м. Харків',
    experience: 'Досвід роботи',
    // experience_text: 'До 2020 року працював у виробничій сфері. Вирішив змінити діяльність, захопився версткою. Брав участь у розробці сайту.',
    experience_text: 'У 2020 році змінив свою діяльність, перейшов в IT сектор, а саме захопився HTML та CSS версткою. Працював у невеликій команді, до 10 осіб, брали замовлення на Upwork. <br>Зараз на сервісі Freelancehunt займаюся розробкою нових та редагуванням вже існуючих сайтів.',
    personal_qualities: 'Особисті якості',
    personal_qualities_text: 'Шанувальник безперервної самоосвіти для актуалізації знань. Повністю концентруюся на роботі. Для мене робота — це не тільки те, що приносить гроші, але й те, що може принести мені моральне задоволення. <br>Прагнення до професіоналізму, багатозадачність, стресостійкість, уміння працювати з конфіденційною інформацією, відповідальність, комунікабельність, організованість, уважність до деталей, аналітичне мислення.',
    examples: 'Приклади робіт',
    // --------------------------------------
    skills: 'Навички',
    skills_one: 'Адаптивна верстка. Методологія БЕМ.',
    skills_two: 'Семантичний, читабельний, продуманий код.',
    education: 'Освіта',
    education_level: 'Вища економічна освіта ХДУХТ (2009-2014)',
    education_info: 'Спеціальність: економіка підприємства (спеціаліст)',
    lаnguage: 'Мова',
    lаnguage_ua: 'Українська<span></span>Pідна',
    lаnguage_ru: 'Російська<span></span>Вільно',
    lаnguage_en: 'Англійська<span></span>Нижче середнього',
    contact: 'Контакти',
};

let eng = {
    name_l: 'G<span>|</span>O',
    name: 'Grinchenko Oleksiy',
    name_d: 'Front-end developer',
    age: 'Age: 32 y.o.',
    location: 'Location: Kharkov',
    experience: 'Work experience',
    experience_text: 'I changed my activities on the IT sector, interested in HTML and CSS layout in 2020. Worked in a small team, up to 10 people, took orders on Upwork. <br>Currently, I am engaged in the development of new and editing of existing sites on the Freelancehunt service.',
    personal_qualities: 'Soft skills',
    personal_qualities_text: 'I constantly education to gain more knowledge. I fully concentrate on work. For me, work is not only a way to earn money, but it is also something that can give you moral pleasure, pride in what you do. <br>The pursuance of professionalism, multitasking, stress resistance, ability to work with confidential information, responsibility, communication skills, organised nature, attentive to details, analytical thinking.',
    examples: 'Work examples',
    // --------------------------------------
    skills: 'Hard skills',
    skills_one: 'Adaptive layout. BEM methodology.',
    skills_two: 'Semantic, readable, well thought-out code.',
    education: 'Education',
    education_level: 'Higher economic education KSUFTT (2009-2014)',
    education_info: 'Specialty: enterprise economics (specialist)',
    lаnguage: 'Lаnguages',
    lаnguage_ua: 'Ukrainian<span></span>Native',
    lаnguage_ru: 'Russian<span></span>Fluently',
    lаnguage_en: 'English<span></span>Pre-Intermediate',
    contact: 'Contact',
};

// let ru = {
//     name_l: 'Г<span>|</span>А',
//     name: 'Гринченко Алексей',
//     name_d: 'Front-end разработчик',
//     age: 'Возраст: 31 год',
//     location: 'Место жительства: г. Харьков',
//     experience: 'Опыт работы',
//     experience_text: 'С 2020 года решил сменить свою специальность и начал активно изучать разработку сайтов. Выполнял несколько фриланс заказов.',
//     experience_text_2: 'Работал в небольшой компании (10 человек) до ее закрытия. Принимал основное участие в разработке проектов в качестве верстальщика.',
//     personal_qualities: 'Личные качества',
//     personal_qualities_text: 'Поклонник непрерывного образования для актуализации знаний. Для меня работа - это не только способ зароботка, а и то что должно приносить моральное удовольствие, гордость за то чем занимаешся. Стремление к профессионализму, многозадачность, стрессоустойчивость, умение работать с конфиденциальной информацией, ответственность, коммуникабельность, организованность, внимательность к деталям, аналитическое мышление.',
//     examples: 'Примеры работ',
//     // --------------------------------------
//     skills: 'Навыки',
//     skills_one: 'Адаптивная верстка.',
//     skills_two: 'Аккуратный, читаемый, продуманный код.',
//     education: 'Образование',
//     education_info: 'ХГУПТ (2009-2014) <br>Специальность: экономика предприятия (специалист)',
//     lаnguage: 'Языки',
//     lаnguage_ua: 'Украинский<span></span>Pодной',
//     lаnguage_ru: 'Русский<span></span>Cвободно',
//     lаnguage_en: 'Английский<span></span>Ниже среднего',
//     contact: 'Контакты',
// };

function changeLagnuage() {
    let language = lang.checked ? eng : ua;
    document.querySelectorAll('[text]').forEach(el => {
        el.innerHTML = language[el.getAttribute('text')];
    })
}

changeLagnuage();
