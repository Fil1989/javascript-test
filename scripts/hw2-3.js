// const getItemsString = function (array) {
//   'use strict';
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     let result = `${i + 1} - ${array[i]} \n`;
//     console.log(result);
//   }
// };
// getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// getItemsString([5, 10, 15]);

// Правильный результат:

const getItemsString = function (array) {
  'use strict';
  // Write code under this line
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(`${i + 1} - ${array[i]}\n`);
  }
  return result.join('');
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log(getItemsString([5, 10, 15]));

console.log(getItemsString([]));
