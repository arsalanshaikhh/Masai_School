// PROBLEM 3
// Problem 3: Print a box patterns using *
// **********
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// *        *
// **********
// Submission Link






let N=10
for(let i=1;i<=N;i++){
  let bag=""
    for(let j=1;j<=N;j++){
      if(i==1 || i==N || j==1 || j==N ){

      bag=bag+"*"

    }else{

      bag=bag+" "

  }

  }
  console.log(bag)

}