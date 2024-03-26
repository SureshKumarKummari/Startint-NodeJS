//student object
const student={
    name: "mahesh",
    age:26,
    greet: function(){
        console.log("Hi! This is "+this.name+" !");
    }
}
console.log(student);
student.greet();

//arrow function
let product=(a,b)=>{
    return a*b;
}

console.log(product(8,9));