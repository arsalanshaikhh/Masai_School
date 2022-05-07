// Problem 2
// Given a matrix print it in the form of a snake


let arr=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]


for(i=0;i<arr.length;i++){
  let bag=""
  let x=arr[0].length
  
  if(i%2==0 ){
    for(j=0;j<x;j++){

    bag+=arr[i][j]+" "
  }
  }
  else{
    

      for(j=x-1;j>=0;j--){
      bag+=arr[i][j]+" "
    }
  
  }
  console.log(bag)
}

