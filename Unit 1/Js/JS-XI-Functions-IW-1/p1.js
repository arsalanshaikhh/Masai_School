// Problem 1: Create a function to check if a number is Prime or Not




function isPrime(N){
  
  let count=0
  for(i=1;i<=N;i++){
    if(N%i==0){
      count++
    }
  }
  if(count==2){
    console.log("Prime")
  }
  else{
    console.log("Not")
  }
}


isPrime(19)