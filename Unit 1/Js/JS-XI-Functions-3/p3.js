// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)



function isOdd(n){
  return (n%2!=0)
}

// let number=30

// for(i=1;i<=number;i++){
//   if(isOdd(i)==true){
//     console.log(i)
//   }
// }


function odd(number){
  for(i=1;i<=number;i++){
  if(isOdd(i)==true){
    console.log(i)
  }
}
}


odd(150)
