// Problem 2: Print Prime Numbers from 1 to given limit





let N=100
for(let i=1;i<=N;i++){
  let count=0

  for(let j=1;j<=12;j++){

    if(i%j==0){
      count++
    }

  }

  if(count==2){
    console.log(i)
  }

}