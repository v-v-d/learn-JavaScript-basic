// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

'use strict';

function getChessBoard(rowsNum, colsNum) {
  const chessTable = document.querySelector('.chess');

for (let row = 0; row < rowsNum; row++) {
    const trElem = document.createElement('tr');
    chessTable.appendChild(trElem);

    for (let col = 0; col < colsNum; col++) {
      const tdElem = document.createElement('td');
      switch (true) {
        case row % 2 && !(col % 2) && row > 0 && col > 0 && row < rowsNum -1 && col < colsNum -1:
        case !(row % 2) && col % 2 && row > 0 && col > 0 && row < rowsNum -1 && col < colsNum -1:
          tdElem.className += 'filled-chess-cell';
          break;
        case col === 0 && row > 0 && row < rowsNum - 1:
        case col === colsNum - 1 && row > 0 && row < rowsNum - 1:
          tdElem.innerText = `${rowsNum - 1 - row}`;
          break;
        case row === 0 && col > 0 && col < colsNum - 1:
        case row === rowsNum - 1 && col > 0 && col < colsNum - 1:
          let asciiCode = 64 + col;
          tdElem.innerText = String.fromCharCode(asciiCode);
          break;

      }

      trElem.appendChild(tdElem);
    }
  }
}

let rows = 10;
let cols = 10;

getChessBoard(rows, cols);