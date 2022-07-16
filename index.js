// console.log('a');

// console.log('b');



// setTimeout(()=> console.log('c'), 1000);



// console.log('d');

// console.log('a');

// console.log('b');



// setTimeout(()=> console.log('c'), 1000);



// setTimeout(()=> console.log('hec'), 0);



// console.log('d');

// let arr = [2,3,5,6,745,856,0]
// arr.map((value, index, array) => console.log({[index]:value}))

// const a = 10;

// {

// const a = 20;

// {


// console.log(a);

// }

// console.log(a)

// }

// console.log(a)

// var obj  = {num:2}
// var addToThis = function(a, b, c) 
// {
//     return this.num + a + b+c
// }
// // console.log( addToThis.call(obj, 3))
// let arr = [1,2,3]
// // console.log( addToThis.apply(obj, arr))
// var bound =  addToThis.bind(obj)
// console.log(bound(1,2,3,));

// var student = {age:20}
// var printingTheAge = function() 
// {
//     console.log(this.age);
// }

// printingTheAge.call(student)

// function currying using bind and function closer
// let multiply = function(x,y) 
// {
//     console.log(x*y);
// } 

let multiply = function(x) {
    return function(y) {
        console.log(x*y)
    }
}

//let multiplyByTwo = multiply.bind(this, 2, 3)//6
// let multiplyByTwo = multiply.bind(this, ) //NaN

let multiplyByTwo = multiply(2)
multiplyByTwo(5)