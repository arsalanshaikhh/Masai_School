// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block





let low="abcdefghijklmnopqrstuvwxyz"
let up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function lowerCase(a){
  for(i=0;i<up.length;i++){
    if(a===up[i]){
      // console.log(low[i])
      return (low[i])
    }
    else if(a===low[i]){
      return (up[i])
    }
  }
}




let input=['Test','Bat']
let output=[]
for(let i=0;i<input.length;i++){
  let x=input[i]
// console.log(x)
  let word=""
  for(let j=0;j<x.length;j++){
    let c=x[j]
    // console.log(c)
    let y=lowerCase(c)
    word=word+y
  
}
  output.push(word)
}
console.log(output)