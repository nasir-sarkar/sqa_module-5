let output = "";
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    output = output + "FizzBuzz ";
  } else if (i % 3 === 0) {
    output = output + "Fizz ";
  } else if (i % 5 === 0) {
    output = output + "Buzz ";
  } else {
    output = output + i + " ";
  }
}

console.log(output);






