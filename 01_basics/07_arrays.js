const myArr = [1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

myArr.push(6)
// console.log(myArr);
myArr.push(7)
// console.log(myArr);
myArr.pop()
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// console.log("A", myArr);

const myn1 = myArr.slice(1,3)
// console.log(myn1);

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);
