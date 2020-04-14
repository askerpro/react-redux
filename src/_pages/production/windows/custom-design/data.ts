/* eslint-disable global-require */

export default {
  url: '/production/windows/custom-design',
  title: 'Пластиковые окна нестандартных форм',
  description:
    'У вас дизайнерский интерьер и особый архитектурный взгляд? Поддержим любые идеи и воплотим их в окнах. Пусть это будет витраж в виде павлина для привлечения достатка и богатства или декоративная раскладка в классическом стиле.',
  images: [require('./img/header.jpg')],
  sections: [
    {
      title: 'Треугольные пластиковые окна',
      description:
        'Конструкции-треугольники встречаются в проемах мансардных комнат, украшают фронтоны. В любую комнату они привносят особенную атмосферу. Впечатление от окна зависит от архитектуры объекта.',
      images: [require('./img/1.jpg'), require('./img/triangle.jpg')],
    },
    {
      title: 'Круглые пластиковые окна',
      description:
        'Стильные окна круглой формы используются для жилых чердачных и мансардных помещений. Такие изделия подчеркивают особенности крыши, оригинальность фасадной части дома.',
      images: [require('./img/circle.jpg')],
    },
    {
      title: 'Арочные пластиковые окна',
      description:
        'С помощью окон арочной формы можно преобразить фасад здания. Такие оконные системы используются для частных загородных домов, коттеджей, дач и присутствуют на фасадах административных и офисных зданий.',
      images: [require('./img/aroch.jpg')],
    },
    {
      title: 'Трапецевидные пластиковые окна',
      description:
        'Идеальное решение для обустройства пространства под крышей. Окна-трапеции помогают наиболее эффективно эксплуатировать площадь проема. Также они пропускают максимум света.',
      images: [require('./img/2.jpg'), require('./img/trapec2.jpg')],
    },
    {
      title: 'Эркерные  пластиковые окна',
      description:
        'Когда нужно остеклить необычный фасад, лучше всего подойдут эркерные окна. В отличие от стандартных изделий, система в пол позволяет «впустить» больше света в помещение, визуально расширить его и придать интерьерам оригинальность.',
      images: [require('./img/erker_1.jpg')],
    },
  ],
};