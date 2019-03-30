const textalyze = require('./textalyze');

let result = '';
let array = [];
let string = '';

async function main() {
  console.log('\n -- v0.1 -- \n');

  array = ['car', 'house', 'car', 'b', 'c', 'd', 'c'];
  result = textalyze.itemCounts(array);

  console.log(`The counts for "${array.join('","')}" are...`);
  result.forEach((value, index) => {
    console.log(`${index} ${value}`);
  });

  console.log('\n -- v0.2 -- \n');

  string = 'testing it';
  result = textalyze.stringCharsToArray(string);
  console.log(`The counts for '${string}' are...`);
  result.forEach((value, index) => {
    console.log(`${index} ${value}`);
  });
  console.log(result);

  console.log('\n -- v0.3 -- \n');

  string = 'HEY: ThIs Is hArD tO rEaD!';
  result = textalyze.sanitize(string);
  console.log(`Text without sanitize: ${string}`);
  console.log(`Text with sanitize: ${result}`);

  console.log('\n -- v0.4 -- \n');

  const file = './sample_data/great-gatsby.txt';
  result = await textalyze.readFromFile(file);
  console.log(`Last 100 Chars from file: ${file} \n ${result.substr(result.length - 100, result.length)}`);

  console.log('\n -- v1.0 -- \n');

  result = await textalyze.readFromFile(process.argv[2]);
  console.log(`Last 100 Chars from file: ${process.argv[2]}: \n ${result.substr(result.length - 100, result.length)}`);

  console.log('\n -- v1.1 -- \n');

  array = ['b', 'c'];
  result = textalyze.frequencyStatics(array);
  console.log(`The frequencies for "${array.join('","')}" are...`);
  result.forEach((value, index) => {
    console.log(`${index}: ${value}%`);
  });

  console.log('\n -- v1.2 -- \n');

  array = ['car', 'car', 'car', 'b', 'b', 'e'];
  textalyze.histogram(array);
}

main();
