// tasks:
// ------
// 1.Uppercase first letter

// - Input: "hello"
// - Output: "Hello"

// - Input: "world"
// - Output: "World"
// hint:charAt(), toUpperCase(), slice(), concat()


let x="world".charAt(0)
let a="world".slice(1)
let b=x.toUpperCase()
console.log(b+a)



// 2.Remove vowels

// - Input: "hello"
// - Output: "hll"

// - Input: "world"
// - Output: "wrld"

// using replace().

let d= "world"
let e = d.replace(/[aeiou]/g,"")
console.log(e)