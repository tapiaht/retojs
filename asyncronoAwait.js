/* import { doTask1, doTask2, doTask3 } from './tasks.mjs';
async function runCode() {
  const strings=[]
  strings.push(await doTask1())
  strings.push(await doTask2())
  strings.push(await doTask3())
  return strings 
} */

import { doTask1, doTask2, doTask3 } from './tasks.mjs';

async function runCode() {
  return await Promise.all([doTask1(), doTask2(), doTask3()]);
}

runCode()
.then(response => console.log(response));

// Output:["Task 1", "Task 2", "Task 3"]