// Write a custom function that has the same behavior of inbuilt String Substring Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring


let bag=""

  function substring(p,q){
      if(q==undefined) {
      q=str.length
      }
      
      // if(q!=Math.abs(q)) {
      //   // +q because -ve -ve is +ve
      // q=arr.length+q
      //   console.log(q)
      // }
    // console.log(q)
    if(q>str.length){
      q=str.length
    }

    if(p>q){
      let a=q
      q=p
      p=a
    }
    if(q!==Math.abs(q)) {
      // let a=Math.abs(q)
      q=p
      p=0
    }
    for(let i=p;i<q;i++){
    
    bag+=str[i]
  }
return(bag)
  }


// let arr=['Dodo','Tiger','Penguin','Dodo','Tiger','Penguin','Dodo']
let str="Mozilla"

console.log(substring(4))