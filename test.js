const global = {}
let index = 0

const result = global.states = []
//console.log(global) // { states: [] } -> global = { state : [] }
//console.log(result)

const test = global.states = [] || index
console.log(test)

function add(init) {
  if (global.states === undefined) {
    global.states = [];
  }
  const current = global.states[index] || init;
  global.states[index] = current
}
//console.log(add()); // undefined

//const current = global.states[index];
//global.states[index] = current
//console.log(current)

