// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log("Usage: node " + process.argv[1] + " FILENAME");
  process.exit(1);
}
// Read the file and print its contents.
var fs = require("fs"),
  filename = process.argv[2];
fs.readFile(filename, "utf8", function (err, data) {
  if (err) throw err;
  console.log("OK: " + filename);
  const arr = data.split(/\r?\n/);
  const regexQuestion = /^(\d+\.\s)(.+)/;
  const regexoptions = /^(-\s)(.+)/;
  const testBank = [];
  let current = {};
  let idNum = 1;
  arr.forEach((item, index) => {
    let matchedQuestion = item.match(regexQuestion);
    let matchedOptions = item.match(regexoptions);
    if (current.question && matchedQuestion) {
      // unique id
      current.id = idNum;
      idNum++;
      testBank.push(current);
      current = {};
    }
    // question
    if (matchedQuestion) {
      current.question = matchedQuestion[2];
    }
    // options
    if (matchedOptions) {
      if (!current.options) {
        current.options = [];
      }
      current.options.push(matchedOptions[2]);
    }
  });
  //   handle adding on the last question/answer
  testBank.push(current);
  // unique id
  current.id = idNum;
  const questionData = { questions: testBank };

  fs.writeFile(
    "output.json",
    JSON.stringify(questionData, null, 2),
    "utf-8",
    (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    }
  );
});
