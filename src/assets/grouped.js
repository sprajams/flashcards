import data from "./output.json";

const groups = {
  1: data.questions.slice(0, 56),
  2: data.questions.slice(57, 86),
  3: data.questions.slice(87, 99),
  all: data.questions,
};

export default groups;
