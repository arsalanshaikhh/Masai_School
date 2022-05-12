// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle






let Rectangle={
  length:12,
  width:20,
  perimeter: function(){
    return(this.length*2+this.width*2)
  },
  area: function(){
    return(this.length*this.width)
  }
}


let p= Rectangle.perimeter()
let a= Rectangle.area()

console.log(p)
console.log(a)


