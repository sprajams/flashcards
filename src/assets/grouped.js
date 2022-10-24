import data from "./output.json";

const groups = {
  1: { title: "American Government", data: data.questions.slice(0, 57) },
  2: { title: "American History", data: data.questions.slice(57, 87) },
  3: { title: "Other", data: data.questions.slice(87, 100) },
  all: { title: "All", data: data.questions },
};

export default groups;
