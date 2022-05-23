// let ua = {
//     name_l: 'Г<span>|</span>O',
//     name: 'Грінченко Олексій',
//     name_d: 'Front-end розробник',
//     age: 'Повних років: 31',
//     location: 'Місце проживання: м. Харків',
//     experience: 'Досвід роботи',
//     experience_text: 'До 2020 года работал в производственной сфере. Решил сменить деятельность, увлекся вёрсткой. Принимал участие в разработке многостраничного сайта.',
//     experience_text_2: 'Я работал в небольшой компании (10 человек) до ее закрытия. Принимал активное участие в разработке трех проектов в качестве верстальщика.',
//     personal_qualities: 'Особисті якості',
//     personal_qualities_text: 'Шанувальник безперервної освіти для актуалізації знань. Готов посвятить себя работе. <br>Стремление к профессионализму, многозадачность, стрессоустойчивость, умение работать с конфиденциальной информацией, ответственность, коммуникабельность, организованность, внимательность к деталям, аналитическое мышление.',
//     examples: 'Приклади робіт',
//     // --------------------------------------
//     skills: 'Навички',
//     skills_one: 'Адаптивна верстка.',
//     skills_two: 'Охайний, читаємий, продуманий код.',
//     education: 'Освіта',
//     education_info: 'ХДУХТ (2009-2014) <br>Спеціальність: економіка підприємства (спеціаліст)',
//     lаnguage: 'Мова',
//     lаnguage_ua: 'Українська<span></span>Pідна',
//     lаnguage_ru: 'Російська<span></span>Вільно',
//     lаnguage_en: 'Англійська<span></span>Ниже среднего',
//     contact: 'Контакти',
// };

let ru = {
    name_l: 'Г<span>|</span>А',
    name: 'Гринченко Алексей',
    name_d: 'Front-end разработчик',
    age: 'Возраст: 31 год',
    location: 'Место жительства: г. Харьков',
    experience: 'Опыт работы',
    experience_text: 'С 2020 года решил сменить свою специальность и начал активно изучать разработку сайтов. Выполнял несколько фриланс заказов.',
    experience_text_2: 'Работал в небольшой компании (10 человек) до ее закрытия. Принимал основное участие в разработке проектов в качестве верстальщика.',
    personal_qualities: 'Личные качества',
    personal_qualities_text: 'Поклонник непрерывного образования для актуализации знаний. Для меня работа - это не только способ зароботка, а и то что должно приносить моральное удовольствие, гордость за то чем занимаешся. Стремление к профессионализму, многозадачность, стрессоустойчивость, умение работать с конфиденциальной информацией, ответственность, коммуникабельность, организованность, внимательность к деталям, аналитическое мышление.',
    examples: 'Примеры работ',
    // --------------------------------------
    skills: 'Навыки',
    skills_one: 'Адаптивная верстка.',
    skills_two: 'Аккуратный, читаемый, продуманный код.',
    education: 'Образование',
    education_info: 'ХГУПТ (2009-2014) <br>Специальность: экономика предприятия (специалист)',
    lаnguage: 'Языки',
    lаnguage_ua: 'Украинский<span></span>Pодной',
    lаnguage_ru: 'Русский<span></span>Cвободно',
    lаnguage_en: 'Английский<span></span>Ниже среднего',
    contact: 'Контакты',
};

let eng = {
    name_l: 'H<span>|</span>A',
    name: 'Hrinchenko Alexey',
    name_d: 'Front-end developer',
    age: 'Age: 31 y.o.',
    location: 'Location: Kharkov',
    experience: 'Work experience',
    experience_text: 'I decided to change my activity since 2020 and got carried away with front-end development. I have taken part in some freelance-projects.',
    experience_text_2: 'I worked for a small company (10 people) until it closed. I took one of the leading part in development of three projects as a layout designer.',
    personal_qualities: 'Soft skills',
    personal_qualities_text: 'I constantly education to gain more knowledge. I am ready to devote myself to work. For me, work is not only a way to earn money, but it is also something that can give you moral pleasure, pride in what you do. <br>The pursuance of professionalism, multitasking, stress resistance, ability to work with confidential information, responsibility, communication skills, organised nature, attentive to details, analytical thinking.',
    examples: 'Work examples',
    // --------------------------------------
    skills: 'Hard skills',
    skills_one: 'Adaptive layout.',
    skills_two: 'Neat, readable, well thought-out code.',
    education: 'Education',
    education_info: 'KSUFTT (2009-2014) <br>Specialty: enterprise economics (specialist)',
    lаnguage: 'Lаnguages',
    lаnguage_ua: 'Ukrainian<span></span>Native',
    lаnguage_ru: 'Russian<span></span>Fluently',
    lаnguage_en: 'English<span></span>Pre-Intermediate',
    contact: 'Contact',
};

function changeLagnuage() {
    let language = lang.checked ? ru : eng;
    document.querySelectorAll('[text]').forEach(el => {
        el.innerHTML = language[el.getAttribute('text')];
    })
}

changeLagnuage();