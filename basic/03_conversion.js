let score = 33
console.log(typeof score)

score = "33"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
// "33" -> 33
// "33abc" -> NaN
// true -> 1

let isLoggedIn = 5
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)