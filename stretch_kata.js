const repeatNumbers = function(data) {
  let output = '';
  for (let array of data) {
    let temp = '';
    for (let i = 0; i < array[1]; i++) {
      temp += array[0].toString();
    }
    output += temp;
    output += ', ';

  }
  output.slice(0, output.length - 2);
  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));