//linear search

// let arr = [1, 4, 8, 10, 12];
// let findNumber = 10;
// let numberTry = 0;
// for (let i = 0; i < arr.length; i++) {
//   numberTry++;
//   if (arr[i] == findNumber) {
//     console.log(`found number at ${numberTry} of try`);
//   }
// }

//binary search

let h1 = document.querySelector('[data-arr]');
let h2 = document.querySelector('[data-mid]');

let recursiveFunction = async function (arr2, x, start, end) {
  if (start > end) return false;
  await sleep(500);
  let mid = Math.floor((start + end) / 2);
  h2.innerHTML = arr2[mid];

  if (arr2[mid] === x) {
    h2.innerHTML = 'founded at index value ' + arr2[mid];
  }

  if (arr2[mid] > x) {
    return await recursiveFunction(arr2, x, start, mid - 1);
  } else {
    return await recursiveFunction(arr2, x, mid + 1, end);
  }
};

let arr2 = [1, 3, 5, 10, 15, 20];
let x = 10;
h1.innerHTML = `[${arr2}]`;

recursiveFunction(arr2, x, 0, arr2.length - 1);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
