function print(count) {
  let finalNums = "";
  for (i = 1; i <= count; i++) {
    finalNums = finalNums + i;
  }
  console.log(finalNums);
}

for (row = 1; row < 5; row++) {
  print(row);
}
