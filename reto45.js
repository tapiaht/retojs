export function searchValue1(array, value) {
  if (!array.flat(1).includes(value))
 throw new Error("Valor no encontrado");
  else {
    const row=array.findIndex(x=>x.includes(value));
    const column=array[row].findIndex(x=>x==value);  
    return {row: row,column: column,} 
  }
}

export function searchValue(array, value) {
  const singleArray = array.flatMap((x) => x);
  const index = singleArray.findIndex((val) => val === value);
  if (index === -1) {
    throw new Error("Valor no encontrado");
  }
  const rowsize=array[0].length
  const row = Math.floor(index / rowsize);
  console.log(index)
  const column = index % rowsize;

  return { row, column };
}


const array = [
  [1, 2, 3, 5, 3],
  [4, 5, 11, 12, 6],
  [7, 8, 99, 88, 9],
];

const value = 99;

searchValue(array, value)