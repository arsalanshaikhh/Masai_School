


// Problem 2 : Given a string in lower case convert it to upper case


let str="cricket"
let low="abcdefghijklmnopqrstuvwxyz"
let up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"


let bag=""

for (let i=0;i<str.length;i++){
    for (let j=0;i<low.length;j++){
        let a=low[j]
        if(a===str[i]){
            bag=bag+up[j]
          break
          
          
        }
    }
}
console.log(bag)