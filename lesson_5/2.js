// 2*. Заполнить созданную таблицу фигурами, фигуры должны выглядеть как картинки, либо можно использовать символы
// (существуют символы шахматных фигур) причем все фигуры должны стоять на своих местах и быть соответственно черными
// и белыми.
'use strict';

function insertFigureInACell(row, figures) {
  row.item(1).innerText += figures[0];
  row.item(row.length - 2).innerText += figures[0];
  row.item(2).innerText += figures[1];
  row.item(row.length - 3).innerText += figures[1];
  row.item(3).innerText += figures[2];
  row.item(row.length - 4).innerText += figures[2];
  row.item(4).innerText += figures[3];
  row.item(row.length - 5).innerText += figures[4];
}

let chessRows = document.getElementsByTagName('tr');

for (let row = 1; row < chessRows.length - 1; row++) {
  let chessRow = chessRows.item(row).cells;

  switch (true) {
    case row === 1:
      let chessFigures = ['\u265C', '\u265E', '\u265D', '\u265B', '\u265A'];
      insertFigureInACell(chessRow, chessFigures);
      break;
    case row === 2:
      for (let col = 1; col < chessRow.length - 1; col++) {
        let chessCell = chessRow.item(col);
        chessCell.innerText += '\u265F';
      }
      break;
    case row === chessRows.length - 2:
      let figures = ['\u2656', '\u2658', '\u2657', '\u2655', '\u2654'];
      insertFigureInACell(chessRow, figures);
      break;
    case row === chessRows.length - 3:
      for (let col = 1; col < chessRow.length - 1; col++) {
        let chessCell = chessRow.item(col);
        chessCell.innerText += '\u2659';
      }
      break;
  }
}