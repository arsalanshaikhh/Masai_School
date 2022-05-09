// Problem 1
// Given a square matrix print both the diagonals



let arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
let bag=""
let bag1=""
for(i=0;i<arr.length;i++){
  
  for(j=0;j<arr[0].length;j++){
  if(i==j){
    bag+=arr[i][j]+" "
  }
  if(i+j==2){
    bag1+=arr[i][j]+" "
  }
}
  
}
console.log(bag)
console.log(bag1)