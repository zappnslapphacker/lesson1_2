const myArray = [];
let i = 0;
do {
  myArray.push(i);
  i++;
}
 
while (i <= 5) ;
console.log(myArray)



function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }}