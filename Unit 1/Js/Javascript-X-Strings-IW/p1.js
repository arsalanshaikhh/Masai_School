// Problem 1 : Given a string count the number of words in that string

let str="Programming isn't about what you know it's about what you can figure out"
// let str=""
let count=0

if(str.length<=0){
  console.log(0)
}else{

  for (i=0;i<str.length;i++){
  
  if(str[i]==" "){
    count++
  }
  
}
console.log(count+1)
}
