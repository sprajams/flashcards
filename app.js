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
  const regexNum = /^\d+\..+/g;
  const regexDash = /^-.+/;
  const testBank = [];
  let current = {};
  arr.forEach((item) => {
    if (current.question && item.match(regexNum)) {
      testBank.push(current);
      current = {};
    }
    // question
    if (item.match(regexNum)) {
      current.question = item;
    }
    // options
    if (item.match(regexDash)) {
      if (!current.option) {
        current.option = [];
      }
      current.option.push(item);
    }
  });
  //   handle last question/answer
  testBank.push(current);
  console.log(testBank, "tb");
});
