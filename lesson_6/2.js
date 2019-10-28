// 2. Реализовать модуль корзины. У каждого товара есть кнопка «Купить», при нажатии на которую
// происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать
// общую сумму заказа. Один товар можно добавить несколько раз.
'use strict';

const basket = {
  settings: {
    basketSelector: '.myBasket',
    basketTotalPriceSelector: 'myTotalPriceSelector',
    basketTotalCountSelector: 'myTotalCountSelector',
  },

  /**
   * Инициализация корзины.
   */
  init(userSettings = {}) {
    // Записываем настройки, которые передал пользователь в наши настройки.
    Object.assign(this.settings, userSettings);

    // Находим элемент с кнопками и ставим обработчик на кнопки.
    let buyButtons = document.querySelector(this.settings.basketSelector).querySelectorAll('button');

    // Ставим обработчик на кнопки "Купить". При клике на кнопку вызовем функцию getPrice в нашем объекте
    // basket и передадим туда событие MouseEvent, которое случилось.
    for (const button of buyButtons) {
      button.addEventListener('click', event => this.buttonClickHandler(event));
    }
  },

  /**
   * Обработчик события клика для нажатия на кнопку "Купить".
   * @param {MouseEvent} event Событие клики мышью.
   */
  buttonClickHandler(event) {
    this.makeTotalPrice(event);
    this.makeTotalCount()
  },

  /**
   * Считает итоговое количество добавленных товаров и выводит их в html.
   */
  makeTotalCount() {
    let countElem = document.getElementById(this.settings.basketTotalCountSelector);
    countElem.innerText = +countElem.innerText + 1;
  },

  /**
   * Считает итоговую цену добавленных товаров и выводит ее в html.
   * @param {MouseEvent} event Событие клики мышью.
   */
  makeTotalPrice(event) {
    let priceElem = document.getElementById(this.settings.basketTotalPriceSelector);
    priceElem.innerText = +priceElem.innerText + +this.getPrice(event);
  },

  /**
   * Возвращает цену товара после нажатия на кнопку "Купить".
   * @param {MouseEvent} event Событие клика мышью.
   * @return {string} Цена товара.
   */
  getPrice(event) {
    return event.target.dataset.price
  },
};

// Инициализируем нашу корзину при загрузке страницы.
window.onload = () => basket.
  init({basketSelector: '.basket',
  basketTotalPriceSelector: 'basket-price',
  basketTotalCountSelector: 'basket-count'});