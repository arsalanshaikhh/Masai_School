// Write a custom function that has the same behavior of inbuilt Array Slice Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice



let bag=[]

  function Slice(p,q){
      if(q==undefined) {
      q=arr.length
      }
      
      if(q!=Math.abs(q)) {
        // +q because -ve -ve is +ve
      q=arr.length+q
        console.log(q)
      }
    for(let i=p;i<q;i++){
    
    bag.push(arr[i])
  }
return(bag)
  }


let arr=['Dodo','Tiger','Penguin','Dodo','Tiger','Penguin','Dodo']

console.log(Slice(1,-2))