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
    return doTask1()
      .then(function(rta1){
        strings.push(rta1);
        return doTask2()})
      .then(function(rta2){
        strings.push(rta2)
        return doTask3()})
      .then(function(rta3){
        strings.push(rta3)
        return strings})
}


runCode()
.then(response => console.log(response));

// Output:["Task 1", "Task 2", "Task 3"]