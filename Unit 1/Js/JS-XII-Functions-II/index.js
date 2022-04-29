// Write a custom function that has the same behavior of inbuilt Array Includes Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


let bag=false

  function includes(p){
      // if(q==undefined) {
      // q=str.length
      // }
      
      // if(q!=Math.abs(q)) {
      //   // +q because -ve -ve is +ve
      // q=arr.length+q
      //   console.log(q)
      // }
    // console.log(q)
    // if(q>str.length){
    //   q=str.length
    // }

    // if(p>q){
    //   let a=q
    //   q=p
    //   p=a
    // }
    // if(q!==Math.abs(q)) {
    //   // let a=Math.abs(q)
    //   q=p
    //   p=0
    // }
    for(let i=0;i<arr.length;i++){
    
    if(arr[i]==p){
      bag=true
    }
  }
return(bag)
  }


let arr=['Dodo','Tiger','Penguin','Dodo']


console.log(includes('Tiger'))