// Create an object with the following functionality

// Ability to add student details and 3 subject marks
// Methods to find the student with the least and highest total

let details = {
  data : [],
  addStudent : function(nam,math,hin,phy){
    let obj = {};
    obj.name = nam;
    obj.maths = math;
    obj.hindi = hin;
    obj.physics = phy;
    this.data.push(obj);
  },
  low_marks : function(){
    let notebook = Infinity;
    let lowStudent;
    for(let i=0;i<this.data.length;i++){
      let total=this.data[i].maths+this.data[i].hindi+this.data[i].physics;
      if(total<notebook){
        notebook = total;
        lowStudent = this.data[i];
      }
    }
    console.log(lowStudent.name, "has the Minimum marks")
  },
  max_marks : function(){
    let notebook = -Infinity;
    let highStudent;
    for(let i=0;i<this.data.length;i++){
      let total=this.data[i].maths+this.data[i].hindi+this.data[i].physics;
      if(total>notebook){
        notebook = total;
        highStudent = this.data[i];
      }
    }
    console.log(highStudent.name, "has the Maximum marks")
  }
};

details.addStudent("Arsalan",85,45,60);
details.addStudent("Akash",51,70,97);
details.addStudent("Kapil",81,64,47);