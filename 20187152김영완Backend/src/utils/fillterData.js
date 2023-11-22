const continents = [
  {
    _id: 1,
    name: "의류",
  },
  {
    _id: 2,
    name: "뷰티",
  },
  {
    _id: 3,
    name: "모바일/태블릿",
  },
  {
    _id: 4,
    name: "노트북/PC",
  },
  {
    _id: 5,
    name: "리빙/생활",
  },
  {
    _id: 6,
    name: "식재료",
  },
  {
    _id: 7,
    name: "디저트",
  },
];

const prices = [
  {
    _id: 0,
    name: "모두",
    array: [],
  },
  {
    _id: 1,
    name: "1천원 이하",
    array: [0, 1000],
  },
  {
    _id: 2,
    name: "1만원 이하",
    array: [0, 10000],
  },
  {
    _id: 3,
    name: "10만원 이하",
    array: [10000, 100000],
  },
  {
    _id: 4,
    name: "100만원 이하",
    array: [100000, 10000000],
  },
  {
    _id: 5,
    name: "100만원 이상",
    array: [1000000, 9999999999],
  },
];

export { continents, prices };
