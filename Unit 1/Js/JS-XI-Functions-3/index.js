// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average







let arr=[1,2,3,4,5,6,7]
let bag=0
function sum() {
  
  for(i=0;i<arr.length;i++){
      // console.log(arr[i])
    bag+=arr[i]
      // console.log(bag)
  }
  return bag;
}

function average(x) {
  
 
  return (x/arr.length);
}


let step1=sum();
let step2=average(step1);

console.log(step2)