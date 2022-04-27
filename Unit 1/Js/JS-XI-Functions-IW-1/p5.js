// Problem 5: Write a function to replace spaces in a given string with - .








function char(){
  let n="“Life is what happens when you’re busy making other plans"
  let bag=""
    for(i=0;i<n.length;i++){
    
     

              if(n[i]==" "){
               bag=bag+"-"
              }else{
                   bag=bag+n[i]            

              }
        
      
    
  }
console.log(bag)
}
char()