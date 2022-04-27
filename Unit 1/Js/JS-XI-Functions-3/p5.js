// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]



let low="abcdefghijklmnopqrstuvwxyz"
let up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function lowerCase(a){
  for(i=0;i<up.length;i++){
    if(a===up[i]){
      // console.log(low[i])
      return (low[i])
    }
  }
}




let input=["MA","SA","I","SCH","OOL"]
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
