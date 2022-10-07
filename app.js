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
  const regexOption = /^(-\s)(.+)/;
  const testBank = [];
  let current = {};
  arr.forEach((item) => {
    let matchedQuestion = item.match(regexQuestion);
    let matchedOption = item.match(regexOption);
    if (current.question && matchedQuestion) {
      testBank.push(current);
      current = {};
    }
    // question
    if (matchedQuestion) {
      current.question = matchedQuestion[2];
    }
    // options
    if (matchedOption) {
      if (!current.option) {
        current.option = [];
      }
      current.option.push(matchedOption[2]);
    }
  });
  //   handle adding on the last question/answer
  testBank.push(current);
  console.log(testBank, "tb");
});
