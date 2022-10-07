import { readFileSync, promises as fsPromises } from "fs";
// const { readFileSync, promises: fsPromises } = require("fs");

// ✅ read file SYNCHRONOUSLY
// function syncReadFile(filename) {
//   const contents = readFileSync(filename, "utf-8");

//   const arr = contents.split(/\r?\n/);

//   console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

//   return arr;
// }

// syncReadFile("/civics.txt");

console.log("test");
