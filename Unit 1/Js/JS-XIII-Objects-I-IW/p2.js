// Problem 2 :
// Given a string print, the number of times each character appears




let str="arsalan"
let obj={}

for(i=0;i<str.length;i++){
  char =str[i]
  if(obj[char]===undefined){
    obj[char]=1
  }else{
    obj[char]=obj[char]+1
  }
}
console.log(obj)



