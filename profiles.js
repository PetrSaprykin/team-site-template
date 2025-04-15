// image: [card_image_link, profile_image_link]

const profiles = [
    {
        id: 1,
        name: ['Сапрыкин', 'Пётр', 'Иванович'],
        role: 'frontend-developer',
        image: {
            card: 'https://i.postimg.cc/rpD3hG6D/petr-card-pic.png',
            profile: 'https://i.postimg.cc/mDXcbGXX/petr-profile.png',
        },
        contacts: {
            email: 'saprykin@new-devs.ru',
            phone: '+7 (905) 688-27-76',
            site: 'saprykin.su',
            telegram: 'easyforpapizzi',
            github: 'PetrSaprykin',
        },
        skills: 'Java, Python, C++, C#, Python, Python, Go, Python, Python,GitHub, Python, Go, Docker, GitHub, PostgreSQL, C++, C#, Discord, GitHub, Node.js, React, Vue, Slack',
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
        projects: {
            EasyWeek: 'frontend-developer',
            EasyAccess: 'frontend-developer',
            Dormitorium: 'game-designer',
            UnrealEngine: 'frontend-developer',
            Dormitorium_2: 'game-designer',
            Dormitorium_3: 'game-designer',
        },
    },
    {
        id: 2,
        name: ['Деев', 'Егор', 'Викторович'],
        role: 'backend-developer',
        image: {
            card: 'https://i.postimg.cc/R0bRD21m/egor-card.png',
            profile: 'https://i.postimg.cc/DZvTxJcH/egor-profile.png',
        },
        contacts: {
            email: 'deev@new-devs.ru',
            phone: '+7 (999) 373-77-37',
            site: 'deev.space',
            telegram: 'egor_deev',
            github: 'IGlek',
        },
        skills: 'Python, PostgreSQL, C++, Docker, Nginx, Qt, Django, Asyncio',
        about: `Мы - команда разработчиков из Московского политехнического университета. На этом сайте вы сможете найти все совместные
                проекты, а также контакты каждого отдельного участника`,
        projects: {
            EasyWeek: 'backend-developer',
            EasyAccess: 'python-developer',
            Dormitorium: 'game-designer',
        },
    },
    {
        id: 3,
        name: ['Ночной', 'Максим', 'Сергеевич'],
        role: 'backend-developer',
        image: {
            card: 'https://i.postimg.cc/rpD3hG6D/petr-card-pic.png',
            profile: 'https://i.postimg.cc/mDXcbGXX/petr-profile.png',
        },
        skills: 'Java, Python, Go, Docker, PostgreSQL, C++, C#, Discord, Slack',
        contacts: {
            email: 'nochnoy@new-devs.ru',
            phone: '+7 (987) 154-83-54',
            site: 'new-devs.ru',
            telegram: 'M_N1ght',
            github: 'MN1ght',
        },
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
        projects: {
            EasyWeek: 'docker-developer',
            EasyAccess: 'python-developer',
        },
    },
    {
        id: 4,
        name: ['Старков', 'Руслан', 'Владимирович'],
        role: 'backend-developer',
        image: {
            card: 'https://i.postimg.cc/R0bRD21m/egor-card.png',
            profile: 'https://i.postimg.cc/DZvTxJcH/egor-profile.png',
        },
        skills: 'Java, Python, Go, Docker, PostgreSQL, C++, C#, Discord, Slack, Unity, VSCode, Brain, Kubernetus',
        contacts: {
            email: 'starkov@new-devs.ru',
            phone: '+7 (978) 732-43-48',
            site: 'new-devs.ru',
            telegram: 'Poems_of_Ray',
            github: 'RayStar-k',
        },
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
        projects: {
            EasyWeek: 'docker-developer',
            EasyAccess: 'python-developer',
            Dormitorium: 'story-writer',
        },
    },
    {
        id: 5,
        name: ['Пахалюк', 'Илья', 'Николаевич'],
        role: 'ML-developer',
        image: {
            card: 'https://i.postimg.cc/rpD3hG6D/petr-card-pic.png',
            profile: 'https://i.postimg.cc/mDXcbGXX/petr-profile.png',
        },
        skills: 'Python, Go, Docker, PostgreSQL, C++, Discord',
        contacts: {
            email: 'pahaluyk@new-devs.ru',
            phone: '+7 (915) 109-54-54',
            site: 'new-devs.ru',
            telegram: 'ilyaPahaluyk',
            github: 'Starkcrimea',
        },
        about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex.`,
        projects: {
            EasyWeek: 'docker-developer',
            EasyAccess: 'document',
        },
    },
]

export default profiles
