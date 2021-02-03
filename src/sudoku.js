// Completed Sudoku array
// DO NOT MODIFY
// [[4,2,6,5,7,1,3,9,8],
// [8,5,7,2,9,3,1,4,6],
// [1,3,9,4,6,8,2,7,5],
// [9,7,1,3,8,5,6,2,4],
// [5,4,3,7,2,6,8,1,9],
// [6,8,2,1,4,9,7,5,3],
// [7,9,4,6,3,2,5,8,1],
// [2,6,5,8,1,4,9,3,7],
// [3,1,8,9,5,7,4,6,2]]

export default function Sudoku(array) {
  this.table = array;
}

Sudoku.prototype.checkRows = function() {
  let table = this.table;
  let allRowsPass = 0;

  table.forEach(function(row, index) {
    let rowTotal = 0;
    row.forEach(function(element) {
      rowTotal += element;
    });
    if (rowTotal == 45) {
      allRowsPass++;
    }
  });

  if (allRowsPass == 9) {
    return true;
  }
};

Sudoku.prototype.checkCols = function() {
  let table = this.table;
  let allColsPass = 0;
  let currentColumn = [];
  let columnTotal = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      currentColumn.push(table[j][i]);
    }
    currentColumn.forEach(function(element) {
      columnTotal += element;
    });
    currentColumn = [];
    columnTotal = 0;
    if (columnTotal !== 45) {
      allColsPass++;
    }
  }
  if (allColsPass == 9) {
    return true;
  }
};