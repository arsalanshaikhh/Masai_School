// Write a custom function that has the same behavior of inbuilt Array Includes Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


let bag=false

  function includes(p){
      
    for(let i=0;i<arr.length;i++){
    
    if(arr[i]==p){
      bag=true
    }
  }
return(bag)
  }


let arr=['Dodo','Tiger','Penguin','Dodo']


console.log(includes('Tiger'))