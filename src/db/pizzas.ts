import { Pizza } from "../types";

export const pizzas: Pizza[] = [
  {
    id: 0,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    title: "Бефстроганов",
    price: [549, 819, 999],
    category: ["meat"],
    composition:
      "Пряная говядина, шампиньоны, грибной соус, маринованные огурчики, моцарелла, красный лук, фирменный соус альфредо",
    fresh: true,
    hit: false,
    rating: 9.39,
  },
  {
    id: 1,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EF438E93884BFEBFE79D11095AE2D4.avif",
    title: "Мясная с аджикой",
    price: [549, 819, 999],
    category: ["meat", "spicy"],
    composition:
      "Баварские колбаски, острый соус аджика, острые колбаски чоризо, цыпленок, пикантная пепперони, моцарелла, фирменный томатный соус",
    fresh: true,
    hit: false,
    rating: 8.75,
  },
  {
    id: 2,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EEFB595A197C24BA932A0AD1144AFB.avif",
    title: "Креветки со сладким чили",
    price: [589, 899, 999],
    category: ["spicy"],
    composition:
      "Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, фирменный соус альфредо",
    fresh: true,
    hit: false,
    rating: 9.19,
  },
  {
    id: 3,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D610D91679BB519F38C3F45880F.avif",
    title: "Сырная",
    price: [299, 559, 689],
    category: ["vegetarian"],
    composition: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
    fresh: false,
    hit: false,
    rating: 7.69,
  },
  {
    id: 4,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
    title: "Пепперони фреш",
    price: [329, 579, 689],
    category: ["meat"],
    composition:
      "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 6.38,
  },
  {
    id: 5,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
    title: "Двойной цыпленок",
    price: [459, 669, 779],
    category: ["meat"],
    composition: "Цыпленок, моцарелла, фирменный соус альфредо",
    fresh: false,
    hit: false,
    rating: 5.33,
  },
  {
    id: 6,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D60FDA22358AC33C6A44EB093A2.avif",
    title: "Ветчина и сыр",
    price: [439, 639, 769],
    category: ["meat"],
    composition: "Ветчина, моцарелла, фирменный соус альфредо",
    fresh: false,
    hit: false,
    rating: 7.35,
  },
  {
    id: 7,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D61706D472F9A5D71EB94149304.avif",
    title: "Чоризо фреш",
    price: [299, 559, 689],
    category: ["meat"],
    composition:
      "Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 3.34,
  },
  {
    id: 8,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6175C10773BFE36E56D48DF7E3.avif",
    title: "Пицца Жюльен",
    price: [569, 859, 999],
    category: ["meat"],
    composition:
      "Цыпленок, шампиньоны, ароматный грибной соус, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо",
    fresh: false,
    hit: false,
    rating: 9.23,
  },
  {
    id: 9,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EEE24316D49CCFA979EBAB4534A60D.avif",
    title: "Додо Микс",
    price: [559, 859, 999],
    category: ["meat"],
    composition:
      "Бекон, цыпленок, ветчина, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, фирменный соус альфредо, чеснок, итальянские травы ",
    fresh: false,
    hit: true,
    rating: 6.45,
  },
  {
    id: 10,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D613B84A5DBB4C1C50FB9583B7E.avif",
    title: "Песто",
    price: [589, 859, 999],
    category: ["meat"],
    composition:
      "Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо",
    fresh: false,
    hit: true,
    rating: 5.34,
  },
  {
    id: 11,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D61389AB51A8F648A0DBA5B1689.avif",
    title: "Карбонара",
    price: [609, 939, 1039],
    category: ["meat"],
    composition:
      "Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы ",
    fresh: false,
    hit: true,
    rating: 7.94,
  },
  {
    id: 12,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6108E3A1C9952CD3A7F39A4D02.avif",
    title: "Мясная",
    price: [579, 849, 999],
    category: ["meat"],
    composition:
      "Цыпленок, ветчина, пикантная пепперони, острые колбаски чоризо, моцарелла, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 9.95,
  },
  {
    id: 13,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6134BC4150BDD8E792D866AB52.avif",
    title: "Аррива!",
    price: [579, 859, 1049],
    category: ["meat"],
    composition:
      "Цыпленок, острые колбаски чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок ",
    fresh: false,
    hit: true,
    rating: 2.24,
  },
  {
    id: 14,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D61698827EE9B8DB6D0AEC53410.avif",
    title: "Бургер-пицца",
    price: [509, 759, 939],
    category: ["meat", "grill"],
    composition:
      "Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 3.34,
  },
  {
    id: 15,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D610E8BBB248F31270BE742B4BD.avif",
    title: "Сырный цыпленок",
    price: [579, 859, 999],
    category: ["meat"],
    composition:
      "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок ",
    fresh: false,
    hit: false,
    rating: 7.54,
  },
  {
    id: 16,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6101F670D6AA756B1C989E0489.avif",
    title: "Додо",
    price: [729, 1049, 1229],
    category: ["meat", "grill"],
    composition:
      "Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, фирменный томатный соус",
    fresh: false,
    hit: true,
    rating: 7.23,
  },
  {
    id: 17,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D610A62D78598406363A9A8AD65.avif",
    title: "Пепперони",
    price: [499, 759, 899],
    category: ["meat"],
    composition:
      "Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 6.43,
  },
  {
    id: 18,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D611ADF5AAD898B8B651186E023.avif",
    title: "Четыре сезона",
    price: [499, 749, 949],
    category: ["meat"],
    composition:
      "Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 8.23,
  },
  {
    id: 19,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D617E9339CFB185921A343AD8FD.avif",
    title: "Гавайская",
    price: [499, 759, 949],
    category: ["meat"],
    composition: "Цыпленок, ананасы, моцарелла, фирменный соус альфредо",
    fresh: false,
    hit: false,
    rating: 7.49,
  },
  {
    id: 20,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EF5B10B39BBBBDA9F8C4E4FF1B067C.avif",
    title: "Ветчина и грибы",
    price: [499, 729, 899],
    category: ["meat"],
    composition:
      "Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 5.25,
  },
  {
    id: 21,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6110059795842D40396BCF1E73.avif",
    title: "Цыпленок барбекю",
    price: [629, 959, 1059],
    category: ["meat", "grill"],
    composition:
      "Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 8.23,
  },
  {
    id: 22,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D610BBEB562BD4D48786AD87270.avif",
    title: "Цыпленок ранч",
    price: [699, 1009, 1179],
    category: ["meat"],
    composition: "Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок ",
    fresh: false,
    hit: false,
    rating: 5.93,
  },
  {
    id: 23,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
    title: "Маргарита",
    price: [489, 729, 899],
    category: ["meat"],
    composition:
      "Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 1.23,
  },
  {
    id: 24,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6149EB101D8727573088FA2EFF.avif",
    title: "Диабло",
    price: [629, 969, 1109],
    category: ["meat", "spicy"],
    composition:
      "Острые колбаски чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 8.42,
  },
  {
    id: 25,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6150D498419E133DF19945A00D.avif",
    title: "Колбаски барбекю",
    price: [509, 769, 959],
    category: ["meat", "spicy"],
    composition:
      "Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 7.24,
  },
  {
    id: 26,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D61546D8483A61A0BBAA7ADCC78.avif",
    title: "Овощи и грибы",
    price: [559, 859, 999],
    category: ["vegetarian"],
    composition:
      "Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, фирменный томатный соус, итальянские травы ",
    fresh: false,
    hit: false,
    rating: 8.49,
  },
  {
    id: 27,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EEBEEDA4B0427DB077A5ADBD30D154.avif",
    title: "Мясной микс с баварскими колбасками",
    price: [549, 819, 999],
    category: ["meat", "spicy"],
    composition:
      "Баварские колбаски, пикантная пепперони, острые колбаски чоризо, бекон, моцарелла, фирменный томатный соус",
    fresh: true,
    hit: false,
    rating: 9.42,
  },
  {
    id: 28,
    imageUrl:
      "https://media.dodostatic.net/image/r:1875x1875/11EE7D6122BB3424B593BB15EACE3197.avif",
    title: "Двойная пепперони",
    price: [569, 859, 999],
    category: ["meat"],
    composition:
      "Двойная порция пикантной пепперони, увеличенная порция моцареллы, фирменный томатный соус",
    fresh: false,
    hit: false,
    rating: 4.32,
  },
];
