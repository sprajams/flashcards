import data from "./output.json";

const groups = {
  1: {
    title: "American Government",
    data: data.questions.slice(0, 57),
    minNum: 0,
    maxNum: 57,
  },
  2: {
    title: "American History",
    data: data.questions.slice(57, 87),
    minNum: 58,
    maxNum: 87,
  },

  3: {
    title: "Other",
    data: data.questions.slice(87, 100),
    minNum: 88,
    maxNum: 100,
  },
  all: { title: "All", data: data.questions, minNum: 1, maxNum: 100 },
};

export default groups;
