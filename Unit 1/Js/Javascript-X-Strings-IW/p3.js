// Problem 3 : Given an array of string count the overall total number of characters.









str=["Ani", "Sam", "Joe"]

let count=0

for (let i=0;i<str.length;i++){
  
      let item = str[i]
      // console.log(item.length)
        
        for (let j=0;j<item.length;j++){
            count++ 
          
        }
}


console.log(count)
