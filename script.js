//linear search

let arr = [1, 4, 8, 10, 12];
let findNumber = 10;
let numberTry = 0;
for (let i = 0; i < arr.length; i++) {
  numberTry++;
  if (arr[i] == findNumber) {
    console.log(`found number at ${numberTry} of try`);
  }
}

//binary search

let recursiveFunction = function (arr, x, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);
  console.log(mid);
  if (arr[mid] === x) return true;

  if (arr[mid] > x) {
    console.log('mid is big');
    return recursiveFunction(arr, x, start, mid - 1);
  } else {
    console.log('x is big');
    return recursiveFunction(arr, x, mid + 1, end);
  }
};

let arr2 = [1, 3, 5, 10, 15, 20];
let x = 10;

if (recursiveFunction(arr, x, 0, arr.length - 1)) {
  console.log('number is found');
} else {
  console.log('number is not found');
}
