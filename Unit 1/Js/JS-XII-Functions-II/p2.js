// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf



let bag=0

  function last(p){
    for(let i=0;i<arr.length;i++){
    
    if(p==arr[i]){
      bag=i
    }
  }
return(bag)
  }


let arr=['Dodo','Tiger','Penguin','Tiger','Dodo']

console.log(last('Dodo'))