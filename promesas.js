import { doTask1, doTask2, doTask3 } from './tasks.mjs';
/*  function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
}
 */
function runCode() {
    const strings = [];
    return new Promise((resolve) 
      .then(doTask1((rta1) => {
        strings.push(rta1)}))
      .then(doTask2((rta2) => {
          strings.push(rta2)}))
      .then(doTask3((rta3) => {
            strings.push(rta3)
            resolve(strings)
          }))
        .catch()
    )
}


runCode()
.then(response => console.log(response));

// Output:["Task 1", "Task 2", "Task 3"]