let rus = {
    name_l: 'Г<span>|</span>А',
    name: 'Гринченко Алексей',
    name_d: 'Front-end разработчик',
    age: 'Возраст: 30 лет',
    location: 'Место жительства: г. Харьков',
    experience: 'Опыт работы',
    experience_text: 'До 2020 года работал в производственной сфере. Решил сменить деятельность, увлекся вёрсткой. Принимал участие в разработке многостраничного сайта.',
    personal_qualities: 'Личные качества',
    personal_qualities_text: 'Поклонник непрерывного образования для актуализации знаний.  Готов посвятить себя работе. <br>Стремление к профессионализму, многозадачность, стрессоустойчивость, умение работать с конфиденциальной информацией, ответственность, коммуникабельность, организованность, внимательность к деталям, аналитическое мышление.',
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
    age: 'Age: 30 y.o.',
    location: 'Location: Kharkov',
    experience: 'Work experience',
    experience_text: 'I worked in the manufacturing sector until 2020. I decided to change my activity and got carried away with front-end development. Took part in the development of a multi-page site.',
    personal_qualities: 'Soft skills',
    personal_qualities_text: 'I constantly education to gain more knowledge. I am ready to devote myself to work. <br>The pursuance of professionalism, multitasking, stress resistance, ability to work with confidential information, responsibility, communication skills, organised nature, attentive to details, analytical thinking.',
    examples: 'Work examples',
    // --------------------------------------
    skills: 'Hard skills',
    skills_one: 'Adaptive layout',
    skills_two: 'Neat, readable, well thought-out code.',
    education: 'Education',
    education_info: '(2009-2014) KSUFTT <br>Specialty: enterprise economics (specialist)',
    lаnguage: 'Lаnguages',
    lаnguage_ua: 'Ukrainian<span></span>Native',
    lаnguage_ru: 'Russian<span></span>Fluently',
    lаnguage_en: 'English<span></span>Pre-Intermediate',
    contact: 'Contact',
};

changeLagnuage();

function changeLagnuage() {
    let language = lang.checked ? rus : eng;
    document.querySelectorAll('[text]').forEach(el => {
        el.innerHTML = language[el.getAttribute('text')];
    })
}
