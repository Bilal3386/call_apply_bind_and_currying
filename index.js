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

// Answer 1 = Call 
// var obj  = {num:2}

// var addToThis = function(a) 

// {

//     return this.num + a

// }

// console.log( addToThis.call(obj, 3))



// //Call method takes object and an arguments 



// o/p = 5



// Answer 2 = Apply
// var obj  = {num:2}

// var addToThis = function(a, b, c) 

// {

//     return this.num + a + b + c

// }



// let arr = [1,2,3]

// console.log( addToThis.apply(obj, arr))

// //apply method takes an object and array of list as an argument



// o/p = 8



// Answer 3 = Bind
// var obj  = {num:2}

// var addToThis = function(a, b, c) 

// {

//     return this.num + a + b+c

// }

// let arr = [1,2,3]

// var bound =  addToThis.bind(obj)

// console.log(bound(1,2,3,));



// o/p = 8



// Answer 4 
// var student = {age:20}

// var printingTheAge = function() 

// {

//     console.log(this.age);

// }



// printingTheAge.call(student)



// o/p = 20

