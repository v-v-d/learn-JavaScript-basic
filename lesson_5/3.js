// 3**. Создать форму в html со следующими полями:
// * Имя - текстовое поле
// * Телефон - текстовое поле
// * Пароль - поле типа password
// * Повтор пароля - поле типа password
// * Кнопка отправить форму
//
// Необходимо реализовать валидацию этой формы по следующим правилам:
//
// * Имя - должно содержать как минимум 1 символ, не более 50 символов.
// * Телефон - должно содержать 11 цифр, не больше, не меньше.
// * Пароль - минимум 5 символов, максимум 50.
// * Повтор пароля - значение должно совпадать с полем пароль.
// * Кнопка отправить форму - при нажатии на кнопку форма должна провериться, при прохождении проверки, форма
// отправляется, если проверка не была пройдена, то:
// - Каждое поле, которое не прошло проверку должно выделяться красным цветом.
// - Под каждым полем, что не прошло проверку, должна писаться подсказка по какой причине проверка провалилась.
//
// Можете пользоваться стилями бутстрапа, если лень самим писать.
// Пользоваться аттрибутами HTML5 запрещено, необходимо проверки реализовать с помощью javascript.
'use strict';

/**
 * Сheck the form for validity
 * @param event
 * @return {boolean} true if valid, else false
 */
function isFormValid(event) {
  let parentElem = event.target.parentElement;
  let messageElems = parentElem.getElementsByClassName('message');
  return parentElem.getElementsByClassName('valid-feedback').length === messageElems.length
}

/**
 * Try to submit the form. Generate focus events for mark the fields if the form invalid and the fields are empty
 * @param event
 */
function submit(event) {
  if (!isFormValid(event)) {
    event.preventDefault();
    let parentElem = event.target.parentElement;
    let messageElems = parentElem.getElementsByClassName('message');
    let invalidElems = parentElem.getElementsByClassName('invalid-feedback');
    let inputElems = form.querySelectorAll('input');

    if (invalidElems.length < messageElems.length) {
      for (const elem of inputElems) {
        elem.focus();
        elem.blur();
      }
    }
  }
}

/**
 * Сheck the field for validity
 * @param event
 * @return {boolean} true if valid, else false
 */
function isFieldValid(event) {
  let field = event.target;
  let value = field.value;
  let placeholder = field.placeholder;
  let passwordElem = document.getElementById('password');

  switch (true){
    case placeholder === 'Name' && 1 <= value.length && value.length <= 50:
    case placeholder === 'Phone' && value.length === 11:
    case placeholder === 'Password' && 5 <= value.length && value.length <= 50:
    case placeholder === 'Confirm password' && value.length > 0 && passwordElem.classList.contains('is-valid') && value === passwordElem.value:
      return true
  }
}

/**
 * Add valid or invalid classes, add message in feedback div.
 * @param messageElem Element in which the message will be added
 * @param inputElem Field in which the class will be added
 * @param removedClass Valid or invalid class that will be removed from element
 * @param addedClass Valid or invalid class for adding to elements
 * @param message Message about what needs to be done that the field is validated
 */
function addValidationInfo(messageElem, inputElem, removedClass, addedClass, message) {
  if (messageElem.classList.contains(`${removedClass}-feedback`)) {
        messageElem.classList.remove(`${removedClass}-feedback`);
        inputElem.classList.remove(`is-${removedClass}`);
      }
      messageElem.innerText = '';
      messageElem.classList.add(`${addedClass}-feedback`);
      inputElem.classList.add(`is-${addedClass}`);
      messageElem.innerText += message;
}

/**
 * Mark the field as validated or invalidated
 * @param event
 */
function markTheField(event) {
  let parentElem = event.target.parentElement;
  let inputElem = parentElem.querySelector('input');
  let messageElem = parentElem.getElementsByClassName('message').item(0);

  if (isFieldValid(event)) {
    if (!messageElem.classList.contains('valid-feedback')) {
      addValidationInfo(messageElem, inputElem, 'invalid', 'valid', '');
    }
  } else {
    if (!messageElem.classList.contains('invalid-feedback')) {
      if (inputElem.placeholder === 'Name') {
        let message = 'Минимум 1 символ, максимум 50';
        addValidationInfo(messageElem, inputElem, 'valid', 'invalid', message)
      } else if (inputElem.placeholder === 'Phone') {
        let message = 'Поле должно содержать 11 цифр';
        addValidationInfo(messageElem, inputElem, 'valid', 'invalid', message)
      } else if (inputElem.placeholder === 'Password') {
        let message = 'Минимум 5 символов, максимум 50';
        addValidationInfo(messageElem, inputElem, 'valid', 'invalid', message)
      } else if (inputElem.placeholder === 'Confirm password') {
        let message = 'Поле должно совпадать с валидным полем пароль';
        addValidationInfo(messageElem, inputElem, 'valid', 'invalid', message)
      }
    }
  }
}


let form = document.getElementsByClassName('test-form').item(0);
let inputElems = form.querySelectorAll('input');

for (let i = 0; i < inputElems.length; i++) {
  inputElems.item(i).addEventListener('blur', markTheField)
}

let button = form.querySelector('button');
button.addEventListener('click', submit);