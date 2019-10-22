// 2*. Для игры, реализованной на уроке (бродилка), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9.
// Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку
// игрок оставался на том же месте где стоял.
"use strict";

/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 * @property {int} startPositionX Начальная позиция игрока по X координате.
 * @property {int} startPositionY Начальная позиция игрока по Y координате.
 */
const settings = {
  rowsCount: 10,
  colsCount: 10,
  startPositionX: 0,
  startPositionY: 0,

  // Управление.
  quitFromGame: -1,
  downAndLeft: 1,
  down: 2,
  downAndRight: 3,
  left: 4,
  right: 6,
  upAndLeft: 7,
  up: 8,
  upAndRight: 9,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {settings} settings Настройки игры.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
  settings,

  x: null,
  y: null,

  /**
   * Инициализация игрока и его метоположения.
   */
  init(startX, startY) {
    this.x = startX;
    this.y = startY;
  },

  /**
   * Двигает игрока по переданному направлению.
   * @param {int} direction Направление, в котором будет движение.
   */
  move(direction) {
    // Определяем направление и обновляем местоположение игрока в зависимости от направления.
    switch (direction) {
      case this.settings.downAndLeft:
        this.x--;
        this.y++;
        break;
      case this.settings.down:
        this.y++;
        break;
      case this.settings.downAndRight:
        this.x++;
        this.y++;
        break;
      case this.settings.left:
        this.x--;
        break;
      case this.settings.right:
        this.x++;
        break;
      case this.settings.upAndLeft:
        this.y--;
        this.x--;
        break;
      case this.settings.up:
        this.y--;
        break;
      case this.settings.upAndRight:
        this.y--;
        this.x++;
        break;
    }
  }
};

/**
 * Объект игры, здесь будут все методы и свойства связанные с самой игрой в общем.
 * @property {settings} settings Настройки игры.
 * @property {player} player Игрок, участвующий в игре.
 */
const game = {
  settings,
  player,

  /**
   * Запускает игру.
   */
  run() {
    // Инициализируем игрока, ставим его начальное местоположение
    this.player.init(this.settings.startPositionX, this.settings.startPositionY);
    // Бесконечный цикл
    while (true) {
      // Отображаем нашу игру.
      this.render();

      // Получаем направление от игрока.
      const direction = this.getDirection();

      // Если игрок сказал что хочет выйти (набрал -1), значит выходим.
      if (direction === this.settings.quitFromGame) {
        alert('До свидания.');
        return;
      }

      // Если игрок не у стенки, то двигаем игрока.
      if (this.canPlayerMakeStep(direction)) {
        this.player.move(direction);
      }
    }
  },

  /**
   * Отображает игру в консоли.
   */
  render() {
    // Сюда запишем все что надо отобразить.
    let map = "";

    // Цикл перебирает все строки, которые надо отобразить.
    for (let row = 0; row < this.settings.rowsCount; row++) {
      // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
      for (let col = 0; col < this.settings.colsCount; col++) {
        // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
        if (this.player.y === row && this.player.x === col) {
          map += 'o ';
        } else {
          map += 'x ';
        }
      }
      // После того как отобразили всю строку делаем переход на следующую строку.
      map += '\n';
    }

    // Чистим консоль.
    console.clear();
    // Выводим все что надо отобразить в игре.
    console.log(map);
  },

  /**
   * Получает и отдает направление от пользователя.
   * @returns {int} Возвращаем направление, введенное пользователем.
   */
  getDirection() {
    // Доступные значения ввода.
    const availableDirections = [
      this.settings.quitFromGame,
      this.settings.downAndLeft,
      this.settings.down,
      this.settings.downAndRight,
      this.settings.left,
      this.settings.right,
      this.settings.upAndLeft,
      this.settings.up,
      this.settings.upAndRight,
    ];

    while (true) {
      // Получаем от пользователя направление.
      const direction = parseInt(prompt(`Введите число, куда вы хотите переместиться, ${this.settings.quitFromGame} для выхода.`));

      // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
      // и начинаем новую итерацию.
      if (!availableDirections.includes(direction)) {
        alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
        continue;
      }

      // Если пользователь ввел корректное значение - отдаем его.
      return direction;
    }
  },

  /**
   * Проверяет можно ли сделать следующий шаг.
   * @param {int} direction Направление, в котором будет движение.
   * @return {boolean}
   */
  canPlayerMakeStep(direction) {
    const stepToLeft = [this.settings.downAndLeft, this.settings.left, this.settings.upAndLeft];
    const stepToRight = [this.settings.downAndRight, this.settings.right, this.settings.upAndRight];
    const stepToUp = [this.settings.upAndLeft, this.settings.up, this.settings.upAndRight];
    const stepToDown = [this.settings.downAndLeft, this.settings.down, this.settings.downAndRight];

    switch (true) {
      case stepToLeft.includes(direction) && this.player.x === this.settings.startPositionX:
      case stepToRight.includes(direction) && this.player.x === this.settings.rowsCount - 1:
      case stepToUp.includes(direction) && this.player.y === this.settings.startPositionY:
      case stepToDown.includes(direction) && this.player.y === this.settings.colsCount - 1:
        return false;
      default:
        return true
    }
  }
};

// Запускаем игру.
game.run();