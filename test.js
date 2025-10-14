// // function double(num){
// //     return num*2;
// // }
// // let arr=[2,3,4,5,6,7]
// // let doubledArr = arr.map(double);
// // console.log(doubledArr)
// // const tripleArr = arr.map((n)=>n*3);
// // console.log(tripleArr);
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = array.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum);
// // sum of even triple numbers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let tripleArr = arr.map((n=>n*3));
// let evenTripleArr = tripleArr.filter((n=>n%2===0));
// let sumoftriple=evenTripleArr.reduce((acc, curr)=>acc+curr,0);
// console.log(sumoftriple);
// let b = [1,2,3,4]
// const[one,,two]=b;
// console.log(two);
// let b = [1, 2, 3, 4];
// const [one,...two] = b;
// console.log(two);
// let b = [1,2,3,4,5,6]
// const [one,...two]=b;
// console.log(two);
// let num=[0,...b,7,8]
// console.log(num);
// const obj1={x:3,y:4};
// const obj2={y:6,z:7};
// const spread={...obj1,...obj2};
// console.log(spread);
// const promise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const success=true;
//         if(success){
//             resolve("Resolved successfully");
//         }
//         else{
//             reject("Rejected");
//         }
//     },1000)
// })
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// let name='Geevi'
// let age=21;
// console.log('my name is '+name+' and my age is '+age+'');
// const mul=(a,b)=>{
//     return a*b;
// }
// const square=(n)=>{
//     return mul(n,n);
// }
// const print=(n)=>{
//     let s=square(n);
//     console.log(s);
// }
// print(5);
console.log('first');
Promise.resolve().then(console.log('From Promise'));
setTimeout(()=>{
    console.log('Inside Timeout');
},2000);
console.log('Last');