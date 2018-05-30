function fivaa(number) {
  let string = "";
  for (i = number; i > 0; i--) {
    string = string.concat(i-1).concat(i-1);
    for (j = 0; j < i; j++) {
      string = string.concat(i + 1);
    }
    console.log(string);
    string = "";
  }
};

fivaa(5);
