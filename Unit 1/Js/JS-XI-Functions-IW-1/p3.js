// Problem 3: Use the same function to print Non-Primes from 2 to a given limit





function isNotPrime(N){
  
 
    for(i=2;i<=N;i++){
    
     let count=0
        for(j=1;j<=N;j++){
              if(i%j==0){
                count++
              }
        }
      if(count!=2){
      // console.log("a")
      console.log(i)
    }
    
  }

}
isNotPrime(12)

