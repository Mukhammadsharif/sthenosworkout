const exercises = [
  // 1. Утренняя разминка (10)
  {
    id: 1,
    category: 'Утренняя разминка',
    name: 'Бег на месте',
    description: 'Разогрев организма бегом на месте.',
    time: '10 минут',
    energy: '50',
    image: require('./exercise_images/morning_exercise_1.jpg'),
  },
  {
    id: 2,
    category: 'Утренняя разминка',
    name: 'Прыжки со скакалкой',
    description: 'Упражнение для улучшения кровообращения.',
    time: '15 минут',
    energy: '80',
    image: require('./exercise_images/morning_exercise_2.jpg'),
  },
  {
    id: 3,
    category: 'Утренняя разминка',
    name: 'Круговые движения руками',
    description: 'Разминка плеч и рук.',
    time: '5 минут',
    energy: '20',
    image: require('./exercise_images/morning_exercise_3.jpg'),
  },
  {
    id: 4,
    category: 'Утренняя разминка',
    name: 'Наклоны корпуса',
    description: 'Упражнение для разогрева спины и живота.',
    time: '10 минут',
    energy: '40',
    image: require('./exercise_images/morning_exercise_4.jpg'),
  },
  {
    id: 5,
    category: 'Утренняя разминка',
    name: 'Махи ногами',
    description: 'Разминка ног и бедер.',
    time: '10 минут',
    energy: '30',
    image: require('./exercise_images/morning_exercise_5.jpg'),
  },
  {
    id: 6,
    category: 'Утренняя разминка',
    name: 'Растяжка рук',
    description: 'Растяжка для мышц рук и плеч.',
    time: '5 минут',
    energy: '10',
    image: require('./exercise_images/morning_exercise_6.jpg'),
  },
  {
    id: 7,
    category: 'Утренняя разминка',
    name: 'Повороты головы',
    description: 'Разминка шеи и плеч.',
    time: '5 минут',
    energy: '10',
    image: require('./exercise_images/morning_exercise_7.jpg'),
  },
  {
    id: 8,
    category: 'Утренняя разминка',
    name: 'Приседания',
    description: 'Разминка ног и ягодиц.',
    time: '10 минут',
    energy: '60',
    image: require('./exercise_images/morning_exercise_8.jpg'),
  },
  {
    id: 9,
    category: 'Утренняя разминка',
    name: 'Бёрпи',
    description: 'Интенсивное упражнение для разогрева всего тела.',
    time: '15 минут',
    energy: '100',
    image: require('./exercise_images/morning_exercise_9.jpg'),
  },
  {
    id: 10,
    category: 'Утренняя разминка',
    name: 'Прыжки в сторону',
    description: 'Кардио-разминка для ног.',
    time: '10 минут',
    energy: '70',
    image: require('./exercise_images/morning_exercise_10.jpg'),
  },

  // 2. Кардио тренировка (10)
  {
    id: 11,
    category: 'Кардио тренировка',
    name: 'Бег',
    description: 'Кардио-нагрузка для укрепления сердца и выносливости.',
    time: '30 минут',
    energy: '300',
    image: require('./exercise_images/cardio_1.jpg'),
  },
  {
    id: 12,
    category: 'Кардио тренировка',
    name: 'Велосипед',
    description:
      'Эффективное упражнение для ног и сердечно-сосудистой системы.',
    time: '45 минут',
    energy: '400',
    image: require('./exercise_images/cardio_2.jpg'),
  },
  {
    id: 13,
    category: 'Кардио тренировка',
    name: 'Прыжки со скакалкой',
    description: 'Интенсивное кардио для сжигания калорий.',
    time: '20 минут',
    energy: '250',
    image: require('./exercise_images/cardio_3.jpg'),
  },
  {
    id: 14,
    category: 'Кардио тренировка',
    name: 'Забеги в гору',
    description: 'Кардио-упражнение для ног и ягодиц.',
    time: '15 минут',
    energy: '200',
    image: require('./exercise_images/cardio_4.jpg'),
  },
  {
    id: 15,
    category: 'Кардио тренировка',
    name: 'Спринты',
    description: 'Интервальная тренировка для повышения выносливости.',
    time: '20 минут',
    energy: '300',
    image: require('./exercise_images/cardio_5.jpg'),
  },
  {
    id: 16,
    category: 'Кардио тренировка',
    name: 'Танцы',
    description: 'Кардио-нагрузка с элементами танцев.',
    time: '30 минут',
    energy: '250',
    image: require('./exercise_images/cardio_6.jpg'),
  },
  {
    id: 17,
    category: 'Кардио тренировка',
    name: 'Аэробика',
    description: 'Кардио для сжигания жира и повышения выносливости.',
    time: '25 минут',
    energy: '270',
    image: require('./exercise_images/cardio_7.jpg'),
  },
  {
    id: 18,
    category: 'Кардио тренировка',
    name: 'Бокс',
    description: 'Кардио-упражнение для рук и всего тела.',
    time: '30 минут',
    energy: '350',
    image: require('./exercise_images/cardio_8.jpg'),
  },
  {
    id: 19,
    category: 'Кардио тренировка',
    name: 'Скакалка',
    description: 'Интенсивное упражнение для повышения выносливости.',
    time: '15 минут',
    energy: '200',
    image: require('./exercise_images/cardio_9.jpg'),
  },
  {
    id: 20,
    category: 'Кардио тренировка',
    name: 'Табата',
    description: 'Интервальная тренировка высокой интенсивности.',
    time: '10 минут',
    energy: '150',
    image: require('./exercise_images/cardio_10.jpg'),
  },

  // 3. Силовая тренировка (10)
  {
    id: 21,
    category: 'Силовая тренировка',
    name: 'Жим лежа',
    description: 'Упражнение для грудных мышц.',
    time: '20 минут',
    energy: '200',
    image: require('./exercise_images/strength_1.jpg'),
  },
  {
    id: 22,
    category: 'Силовая тренировка',
    name: 'Подтягивания',
    description: 'Укрепление мышц спины и рук.',
    time: '15 минут',
    energy: '150',
    image: require('./exercise_images/strength_2.jpg'),
  },
  {
    id: 23,
    category: 'Силовая тренировка',
    name: 'Приседания со штангой',
    description: 'Укрепление ног и ягодиц.',
    time: '25 минут',
    energy: '300',
    image: require('./exercise_images/strength_3.jpg'),
  },
  {
    id: 24,
    category: 'Силовая тренировка',
    name: 'Становая тяга',
    description: 'Упражнение для спины и ног.',
    time: '20 минут',
    energy: '250',
    image: require('./exercise_images/strength_4.jpg'),
  },
  {
    id: 25,
    category: 'Силовая тренировка',
    name: 'Бицепс с гантелями',
    description: 'Тренировка рук.',
    time: '15 минут',
    energy: '100',
    image: require('./exercise_images/strength_5.jpg'),
  },
  {
    id: 26,
    category: 'Силовая тренировка',
    name: 'Тяга в наклоне',
    description: 'Укрепление мышц спины.',
    time: '20 минут',
    energy: '200',
    image: require('./exercise_images/strength_6.jpg'),
  },
  {
    id: 27,
    category: 'Силовая тренировка',
    name: 'Жим ногами',
    description: 'Тренировка ног.',
    time: '15 минут',
    energy: '150',
    image: require('./exercise_images/strength_7.jpg'),
  },
  {
    id: 28,
    category: 'Силовая тренировка',
    name: 'Разведение гантелей',
    description: 'Упражнение на плечи.',
    time: '10 минут',
    energy: '100',
    image: require('./exercise_images/strength_8.jpg'),
  },
  {
    id: 29,
    category: 'Силовая тренировка',
    name: 'Отжимания на брусьях',
    description: 'Укрепление грудных мышц.',
    time: '20 минут',
    energy: '200',
    image: require('./exercise_images/strength_9.jpg'),
  },
  {
    id: 30,
    category: 'Силовая тренировка',
    name: 'Планка',
    description: 'Укрепление пресса и спины.',
    time: '10 минут',
    energy: '70',
    image: require('./exercise_images/strength_10.jpg'),
  },

  // 4. Растяжка (10)
  {
    id: 31,
    category: 'Растяжка',
    name: 'Наклоны вперед',
    description: 'Растяжка для ног и спины.',
    time: '10 минут',
    energy: '30',
    image: require('./exercise_images/stretching_1.jpg'),
  },
  {
    id: 32,
    category: 'Растяжка',
    name: 'Растяжка на шпагат',
    description: 'Растяжка для внутренней поверхности бедра.',
    time: '15 минут',
    energy: '40',
    image: require('./exercise_images/stretching_2.jpg'),
  },
  {
    id: 33,
    category: 'Растяжка',
    name: 'Растяжка спины',
    description: 'Снятие напряжения в спине.',
    time: '10 минут',
    energy: '20',
    image: require('./exercise_images/stretching_3.jpg'),
  },
  {
    id: 34,
    category: 'Растяжка',
    name: 'Растяжка плеч',
    description: 'Упражнение для растяжения плечевого сустава.',
    time: '5 минут',
    energy: '10',
    image: require('./exercise_images/stretching_4.jpg'),
  },
  {
    id: 35,
    category: 'Растяжка',
    name: 'Бабочка',
    description: 'Растяжка внутренней части бедра.',
    time: '10 минут',
    energy: '25',
    image: require('./exercise_images/stretching_5.jpg'),
  },
  {
    id: 36,
    category: 'Растяжка',
    name: 'Растяжка икроножных мышц',
    description: 'Растяжка для голени.',
    time: '10 минут',
    energy: '15',
    image: require('./exercise_images/stretching_6.jpg'),
  },
  {
    id: 37,
    category: 'Растяжка',
    name: 'Поза ребенка',
    description: 'Растяжка спины и бедер.',
    time: '10 минут',
    energy: '20',
    image: require('./exercise_images/stretching_7.jpg'),
  },
  {
    id: 38,
    category: 'Растяжка',
    name: 'Растяжка ног стоя',
    description: 'Растяжка для икроножных мышц.',
    time: '5 минут',
    energy: '10',
    image: require('./exercise_images/stretching_8.jpg'),
  },
  {
    id: 39,
    category: 'Растяжка',
    name: 'Растяжка бедра лежа',
    description: 'Упражнение для растяжения передней поверхности бедра.',
    time: '10 минут',
    energy: '20',
    image: require('./exercise_images/stretching_9.jpg'),
  },
  {
    id: 40,
    category: 'Растяжка',
    name: 'Растяжка на шпагат поперечный',
    description: 'Растяжка внутренней поверхности бедра.',
    time: '15 минут',
    energy: '50',
    image: require('./exercise_images/stretching_10.jpg'),
  },

  // 5. Йога (10)
  {
    id: 41,
    category: 'Йога',
    name: 'Поза дерева',
    description: 'Балансирующее упражнение для укрепления ног.',
    time: '10 минут',
    energy: '20',
    image: require('./exercise_images/yoga_1.jpg'),
  },
  {
    id: 42,
    category: 'Йога',
    name: 'Поза воина',
    description: 'Укрепление мышц ног и спины.',
    time: '15 минут',
    energy: '35',
    image: require('./exercise_images/yoga_2.jpg'),
  },
  {
    id: 43,
    category: 'Йога',
    name: 'Кобра',
    description: 'Растяжка спины и груди.',
    time: '10 минут',
    energy: '25',
    image: require('./exercise_images/yoga_3.jpg'),
  },
  {
    id: 44,
    category: 'Йога',
    name: 'Поза ребенка',
    description: 'Расслабляющее упражнение.',
    time: '10 минут',
    energy: '15',
    image: require('./exercise_images/yoga_4.jpg'),
  },
  {
    id: 45,
    category: 'Йога',
    name: 'Собака мордой вниз',
    description: 'Растяжка ног и спины.',
    time: '15 минут',
    energy: '30',
    image: require('./exercise_images/yoga_5.jpg'),
  },
  {
    id: 46,
    category: 'Йога',
    name: 'Скручивание сидя',
    description: 'Упражнение для растяжки спины.',
    time: '10 минут',
    energy: '20',
    image: require('./exercise_images/yoga_6.jpg'),
  },
  {
    id: 47,
    category: 'Йога',
    name: 'Поза лодки',
    description: 'Упражнение на мышцы пресса.',
    time: '10 минут',
    energy: '40',
    image: require('./exercise_images/yoga_7.jpg'),
  },
  {
    id: 48,
    category: 'Йога',
    name: 'Поза верблюда',
    description: 'Растяжка для спины и груди.',
    time: '10 минут',
    energy: '25',
    image: require('./exercise_images/yoga_8.jpg'),
  },
  {
    id: 49,
    category: 'Йога',
    name: 'Шавасана',
    description: 'Расслабление всего тела.',
    time: '10 минут',
    energy: '10',
    image: require('./exercise_images/yoga_9.jpg'),
  },
  {
    id: 50,
    category: 'Йога',
    name: 'Мостик',
    description: 'Растяжка и укрепление спины.',
    time: '15 минут',
    energy: '35',
    image: require('./exercise_images/yoga_10.jpg'),
  },
];

export default exercises;
