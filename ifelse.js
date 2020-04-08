const fs = require("fs");
fs.readFile("text.txt", (err, data) => {
  const text = data.toString();
  if (text === "Okay") {
    console.log("yes");
  } else {
    console.log("no");
  }
});
