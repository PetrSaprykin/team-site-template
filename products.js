const products = [
  {
    id: 0,
    name: 'EasyWeek',
    stack: ['C++', 'Qt', 'Docker', 'Doxygen'],
    about: `Приложенияе для автоматического составления индивидуального меню на неделю
     с учетом вкусовых предпочтений пользователя и желательного размера закладываемых средств на еду`,
    members: {
      0: 'client',
      1: 'teamlead',
      2: 'backend',
      3: 'server',
      4: 'docker',
    },
    icon: '/images/productIcons/easyweek.png',
    link: 'https://github.com/New-Ds/Easy-Week',
  },
  {
    id: 1,
    name: 'Сайт harlamenkov.ru',
    stack: ['Astroid', 'Joomla', 'CSS', 'JS'],
    about: `Разработали по заказу сайт директора ЦНИИ Русского жестового языка Харламенкова А.Е.`,
    members: {
      0: 'frontend',
      1: 'analyst',
      2: 'joomla',
    },
    icon: '/images/productIcons/site.svg',
    link: 'https://rph.new-devs.ru',
  },

  {
    id: 2,
    name: 'Сайт new-devs.ru',
    stack: ['SolidJS', 'HTML', 'CSS', 'Vite'],
    about: `Сайт команды New Devs, создан frontend-разработчиком команды`,
    members: {
      0: 'lead',
    },
    icon: '/images/productIcons/newdevs.png',
    link: 'https://new-devs.ru',
  },
  {
    id: 3,
    name: 'EasyAccess',
    stack: ['Python', 'SolidJS', 'Go', 'Supabase'],
    about: `Бразуерное расширение для обеспечения доступности веб-сайтов для лиц с ОВЗ`,
    members: {
      0: 'frontend',
      1: 'backend',
      2: 'backend',
      3: 'QA',
      4: 'QA',
    },
    icon: '/images/productIcons/easyaccess.svg',
    link: 'https://github.com/easyaccess-team/easyaccess-extension',
  },
  {
    id: 4,
    name: 'Dormitorium',
    stack: ['Python', 'PyGame'],
    about: `Визуальная пиксельная новелла про общежитие с элементами хоррора и простой шутерной составляющей`,
    members: {
      0: 'backend',
      1: 'backend',
      3: 'game-designer',
    },
    icon: '/images/productIcons/dormitorium.jpg',
    link: 'https://github.com/IGlek/Dormitorium',
  },
]

export default products
