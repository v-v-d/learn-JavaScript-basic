// 6**. Программа должна спросить у пользователя количество денег, которое он хочет положить
// в банк. Пользователь должен ввести целое число, а программа должна выдать
// соответствующее сообщение:
// "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
// Если пользователь введет любое другое целое число, программа также должна выдать
// соответствующее сообщение, в котором будет отображено это число, а также поставить
// верное окончание в слове "рубль". Для получения верного склонения слова (любого слова с
// числом) вам необходимо создать функцию.
'use strict';

/**
 * Check the last digit from passed amount of money argument and returns the name of the currency with the correct declension.
 * @param {number} money
 * @returns {string} The name of the currency with the correct declension
 */
function getCurrencyWordRU(money) {
    let lastDigit = money % 10;
    let currencyWord = 'рублей';

    if (lastDigit === 1) {
        currencyWord = 'рубль'
    } else if (lastDigit > 1 && lastDigit < 5) {
        currencyWord = 'рубля'
    }

    return currencyWord
}

let moneyAmount = parseInt(prompt('Пожалуйста, введите сумму, которую вы хотите зачислить на свой счет'));

alert(`Ваша сумма в ${moneyAmount} ${getCurrencyWordRU(moneyAmount)} успешно зачислена.`);