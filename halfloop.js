function print(count) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    stars = stars + "*";
  }
  console.log(stars);
}

for (let row = 1; row < 5; row++) {
  print(row);
}
