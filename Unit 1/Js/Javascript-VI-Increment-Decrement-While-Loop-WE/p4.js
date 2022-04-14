// Problem 4: Print the average of even numbers from 1 to 100 (both included)









let i=1
let bag=0
let limit=100
let N=0



while(i<=limit){
  if(i%2==0){
    bag=bag+i
    N++
  }
   i++
  
}
console.log(bag/N)

