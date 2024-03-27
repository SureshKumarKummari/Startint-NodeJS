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
let a=['apple','oranges',' ','mango',' ','lemon']

let newa=a.map((i)=>{

if(i==' '){

i="empty string";

}

return i;

})
console.log(newa);



 const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)

const arr1 = ['value1', 'value2']

const [ val1, val2 ] = arr1



console.log(val1)

console.log(val2)



/*
async function p2() {
    console.log('a');
    console.log('b');
    await new Promise(async (resolve, reject) => {
       await new Promise((res,rej)=>{ 
        setTimeout(() => {
            console.log('c');
            res();
        }, 3000);
    });
        setTimeout(() => {
            console.log('d');
            console.log('e');
        }, 0);
    });
}

p2().then().catch();*/

console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)

setTimeout(() => console.log('d'), 0)

console.log('e');
