// image: [card_image_link, profile_image_link]
const members = [
  {
    id: 0,
    name: ['Сапрыкин', 'Пётр ', 'Иванович'],
    role: 'frontend-developer',
    image: './public/membersPhotos/petr.png',
    contacts: {
      email: 'saprykin@new-devs.ru',
      phone: '+7 (905) 688-27-76',
      site: 'saprykin.su',
      telegram: 'easyforpapizzi',
      github: 'PetrSaprykin',
    },
    skills: 'JavaScript, HTML, CSS, SolidJS, C++, DiscordJS, SCSS, NodeJS, Electron, YoutubeAPI',
    about: `С программированием познакомился в 7-классе, начинал с вёрсткий простых лендингов, постепенно
    осваивая HTML и CSS. Позже занялся изучением JavaScript, а так же немного работал с NodeJS, писал Discord и
    Telegram ботов. Один telegram-бот в 2022 году отправился на областной конкурс проектов, на котором занял второе место
    Так же проходил небольшие курсы по введению в программирование на С++ в школе Стратегия. В данный момент обучаюсь в Московском политехе по
    специальности "Системная и программная инженерия".`,
  },
  {
    id: 1,
    name: ['Деев', 'Егор', 'Викторович'],
    role: 'backend-developer',
    image: './public/membersPhotos/egor.png',
    contacts: {
      email: 'deev@new-devs.ru',
      phone: '+7 (999) 373-77-37',
      site: 'deev.space',
      telegram: 'egor_deev',
      github: 'IGlek',
    },
    skills:
      'Python, C++, Nginx, gRPC, Docker, Kubernetes, Git, PostgreSQL, SQLite, QT, WinSCP, PyQT, Aiogram, Asyncio, Django, PyGame',
    about: `Программирую с 15 лет. Начал свой путь с обучения в Яндекс Лицее, регулярно повышаю навыки в программировании на сторонних ресурсах и в личных проектах. 
    В университете на проектной деятельности являюсь руководителем команды разработки на Python, также сейчас занимаюсь разработкой сервера и сайта для ЦНИИ русского жестового языка. 
    Занимаюсь парсингом, написанием различных скриптов, в том числе с использованием AI технологий. Люблю сталкиваться с неочевидными проблемами и решать их при помощи логики и кода.`,
  },
  {
    id: 2,
    name: ['Ночной', 'Максим', 'Сергеевич'],
    role: 'backend-developer',
    image: './public/membersPhotos/maks.png',
    skills: 'Java, Python, Go, Docker, PostgreSQL, C++, C#, Discord, Slack',
    contacts: {
      email: 'nochnoy@new-devs.ru',
      phone: '+7 (987) 154-83-54',
      site: null,
      telegram: 'M_N1ght',
      github: 'MN1ght',
    },
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    id: 3,
    name: ['Старков', 'Руслан', 'Владимирович'],
    role: 'backend-developer',
    image: './public/membersPhotos/ruslan.png',
    skills:
      'Java, Python, Go, Docker, PostgreSQL, C++, C#, Discord, Slack, Unity, VSCode, Brain, Kubernetus',
    contacts: {
      email: 'starkov@new-devs.ru',
      phone: '+7 (978) 732-43-48',
      site: null,
      telegram: 'Poems_of_Ray',
      github: 'RayStar-k',
    },
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
  },
  {
    id: 4,
    name: ['Пахалюк', 'Илья', 'Николаевич'],
    role: 'ML-developer',
    image: './public/membersPhotos/ilya.png',
    skills: 'Python, Go, Docker, PostgreSQL, C++, Discord',
    contacts: {
      email: 'pahaluyk@new-devs.ru',
      phone: '+7 (915) 109-54-54',
      site: null,
      telegram: 'ilyaPahaluyk',
      github: 'Starkcrimea',
    },
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
  },
]

export default members
