const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number:\n", (answer) => {
  const num = parseInt(answer);
  switch (num) {
    case 1:
      console.log("bruh");
      break;
    case 2:
      console.log("Okay");
      break;
    case 3:
      console.log("nice");
      break;
    default:
      console.log("unknown");
  }
  rl.close();
});
