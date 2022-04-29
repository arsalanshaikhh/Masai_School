// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


let arr=['masai','school']
let bag=""


function join(a){

  for(let i=0;i<arr.length;i++){
    
    let x=arr[i]
    if(i!=0){
      bag=bag+a
    }
    bag=bag+arr[i]
  // for(let j=0;j<x.length;j++){
  // bag=bag+arr[j]
  // }
}
return(bag)
}
console.log(join('-'))