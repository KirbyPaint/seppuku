export default function Sudoku(array) {
  this.table = array;
}

Sudoku.prototype.checkRows = function() {
  let table = this.table;
  let allRowsPass = 0;

  table.forEach(function(row) {
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
    if (columnTotal == 45) {
      allColsPass++;
    }
    columnTotal = 0;
  }
  if (allColsPass == 9) {
    return true;
  }
};