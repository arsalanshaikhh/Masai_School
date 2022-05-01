// Problem 1 :
// Given an array find the unique items in the array






let arr=["bat","masai", "ball", "bat"]
let obj={}

for(i=0;i<arr.length;i++){
  char =arr[i]
  if(obj[char]===undefined){
    obj[char]=1
  }else{
    obj[char]=obj[char]+1
  }
}
console.log(Object.keys(obj))



