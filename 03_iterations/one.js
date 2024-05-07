// for ( let i = 0; i<=10; i++){
//     const element = i;
//     if (element==5) {
//         console.log(element," is the best no.");
//         continue
//     }
//     console.log(element);
// }
// console.log(element);

for(let i = 1; i<=10; i++){
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop value is ${j} and outer loop value ${i}`);        
    }
}