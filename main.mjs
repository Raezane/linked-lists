import { linkedList } from "./javascript.mjs";

const list = linkedList();
list.append('eka')
list.append('toka')
list.append('kolmas')
list.append('neljäs')
list.insertAt('asd', 2)
console.log(list.toString())
list.removeAt(3)
console.log(list.toString())