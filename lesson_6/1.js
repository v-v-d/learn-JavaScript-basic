// 1. Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие большой
// картинки по указанному в src адресу. Если такой картинки не существует или она не доступна, то должна
// ставиться картинка-заглушка сообщающая об ошибке.
//
// 3*. Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки
// должны быть стрелки “вперед” и “назад”, по нажатию на которые происходит замена изображения на
// следующее или предыдущее.
"use strict";

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 */
const gallery = {
  settings: {
    previewSelector: '.mySuperGallery',
    openedImageWrapperClass: 'galleryWrapper',
    openedImageClass: 'galleryWrapper__image',
    openedImageScreenClass: 'galleryWrapper__screen',
    openedImageCloseBtnClass: 'galleryWrapper__close',
    openedImageCloseBtnSrc: 'images/gallery/close.png',
    defaultImageSrc: 'images/gallery/default.png',
  },

  /**
   * Инициализирует галерею, ставит обработчик события.
   * @param {Object} userSettings Объект настроек для галереи.
   */
  init(userSettings = {}) {
    // Записываем настройки, которые передал пользователь в наши настройки.
    Object.assign(this.settings, userSettings);

    // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
    // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
    // gallery и передадим туда событие MouseEvent, которое случилось.
    document
      .querySelector(this.settings.previewSelector)
      .addEventListener('click', event => this.containerClickHandler(event));
  },

  /**
   * Обработчик события клика для открытия картинки.
   * @param {MouseEvent} event Событие клики мышью.
   * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
   */
  containerClickHandler(event) {
    // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
    if (event.target.tagName !== 'IMG') {
      return;
    }
    // Открываем картинку с полученным из целевого тега (data-full_image_url аттрибут).
    this.openImage(event.target.dataset.full_image_url);
  },

  /**
   * Открывает картинку.
   * @param {string} src Ссылка на картинку, которую надо открыть.
   */
  openImage(src) {
    // Получаем контейнер для открытой картинки, в нем находим тег img и ставим ему нужный src.
    this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
  },

  /**
   * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
   * @returns {Element}
   */
  getScreenContainer() {
    // Получаем контейнер для открытой картинки.
    const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
    // Если контейнер для открытой картинки существует - возвращаем его.
    if (galleryWrapperElement) {
      return galleryWrapperElement;
    }

    // Возвращаем полученный из метода createScreenContainer контейнер.
    return this.createScreenContainer();
  },

  /**
   * Обработчик события клика для нажатия в карусели на кнопку вперед или назад.
   * @param {MouseEvent} event Событие клики мышью.
   */
  carouselClickHandler(event) {
    switch (true) {
      case this.isFirstImage(event) && this.isGoToBackButton(event):
        this.goToLastImage();
        break;
      case this.isLastImage(event) && this.isGoToForwardButton(event):
        this.goToFirstImage();
        break;
      default:
        this.goToImage(event)
    }
  },

  /**
   * Переходит на предыдущую или следующую картинку, в зависимости от того, на какую кнопку нажал пользователь.
   * @param {MouseEvent} event Событие клики мышью.
   */
  goToImage(event) {
    let images = this.getAllImages();

    for (let i = 0; i < images.length; i++) {
      if (this.isCurrentImage(event, images[i]) && this.isGoToBackButton(event)) {
        this.goToPreviousImage(images[i - 1]);
        break;
      }
      if (this.isCurrentImage(event, images[i]) && this.isGoToForwardButton(event)) {
        this.goToNextImage(images[i + 1]);
        break;
        }
    }
  },

  /**
   * Получает массив всех картинок в галерее.
   * @return {HTMLCollectionOf<HTMLElementTagNameMap[string]>} Массив картинок.
   */
  getAllImages() {
    return document.querySelector(this.settings.previewSelector).getElementsByTagName('img')
  },

  /**
   * Проверяет был ли клик на кнопку "назад".
   * @param {MouseEvent} event Событие клики мышью.
   * @return {boolean} True, если нажатие было сделано по кнопку "назад", иначе false.
   */
  isGoToBackButton(event) {
    return event.target.classList.contains('back-arrow')
  },

  /**
   * Проверяет был ли клик на кнопку "вперед".
   * @param {MouseEvent} event Событие клики мышью.
   * @return {boolean} True, если нажатие было сделано по кнопку "вперед", иначе false.
   */
  isGoToForwardButton(event) {
    return event.target.classList.contains('forward-arrow')
  },

  /**
   * Открывает первую картинку в галерее.
   */
  goToFirstImage() {
    let images = document.querySelector(this.settings.previewSelector).getElementsByTagName('img');
    let firstImageSrc = images[0].dataset.full_image_url;

    this.openImage(firstImageSrc)
  },

  /**
   * Открывает последнюю картинку в галерее.
   */
  goToLastImage() {
    let images = document.querySelector(this.settings.previewSelector).getElementsByTagName('img');
    let lastImageSrc = images[images.length - 1].dataset.full_image_url;

    this.openImage(lastImageSrc)
  },

  /**
   * Открывает следующую картинку в галерее.
   * @param {HTMLImageElement} img Картинка, которую необходимо открыть.
   */
  goToNextImage(img) {
    this.openImage(img.dataset.full_image_url)
  },

    /**
   * Открывает предыдущую картинку в галерее.
   * @param {HTMLImageElement} img Картинка, которую необходимо открыть.
   */
  goToPreviousImage(img) {
    this.openImage(img.dataset.full_image_url)
  },

  /**
   * Сравнивает 2 картинки на одинаковость.
   * @param {MouseEvent} event Событие клики мышью.
   * @param {HTMLImageElement} img Картинка, которую необходимо сравнить.
   * @return {boolean} True, если картинки одинаковые, иначе False.
   */
  isCurrentImage(event, img) {
    return img.dataset.full_image_url === this.getCurrentImage(event)
  },

  /**
   * Проверяет является ли открытая картинка последней в галерее.
   * @param {MouseEvent} event Событие клики мышью.
   * @return {boolean} True, если картинка последняя в галерее, иначе False.
   */
  isLastImage(event) {
    let images = document.querySelector(this.settings.previewSelector).getElementsByTagName('img');
    let lastImageSrc = images[images.length - 1].dataset.full_image_url;

    return this.getCurrentImage(event) === lastImageSrc
  },

  /**
   * Проверяет является ли открытая картинка первой в галерее.
   * @param {MouseEvent} event Событие клики мышью.
   * @return {boolean} True, если картинка первая в галерее, иначе False.
   */
  isFirstImage(event) {
    let images = document.querySelector(this.settings.previewSelector).getElementsByTagName('img');
    let firstImageSrc = images[0].dataset.full_image_url;

    return this.getCurrentImage(event) === firstImageSrc
  },

  getCurrentImage(event) {
    return event.target.parentElement.getElementsByClassName(this.settings.openedImageClass)[0].attributes[1].nodeValue;
  },

  /**
   * Создает контейнер для открытой картинки.
   * @returns {HTMLElement}
   */
  createScreenContainer() {
    // Создаем сам контейнер-обертку и ставим ему класс.
    const galleryWrapperElement = document.createElement('div');
    galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

    // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
    const galleryScreenElement = document.createElement('div');
    galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
    galleryScreenElement.addEventListener('click', () => this.close());
    galleryWrapperElement.appendChild(galleryScreenElement);

    // создаем кнопку-стрелку "назад", ставим класс и вешаем обработчик на клик по ней
    const backArrow = document.createElement('i');
    backArrow.classList.add('fas', 'fa-chevron-left', 'back-arrow');
    galleryWrapperElement.appendChild(backArrow);
    backArrow.addEventListener('click', event => this.carouselClickHandler(event));

    // создаем кнопку-стрелку "вперед", ставим класс и вешаем обработчик на клик по ней
    const forwardArrow = document.createElement('i');
    forwardArrow.classList.add('fas', 'fa-chevron-right', 'forward-arrow');
    galleryWrapperElement.appendChild(forwardArrow);
    forwardArrow.addEventListener('click', event => this.carouselClickHandler(event));

    // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
    const closeImageElement = new Image();
    closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
    closeImageElement.src = this.settings.openedImageCloseBtnSrc;
    closeImageElement.addEventListener('click', () => this.close());
    galleryWrapperElement.appendChild(closeImageElement);

    // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
    const image = new Image();
    image.classList.add(this.settings.openedImageClass);
    galleryWrapperElement.appendChild(image);

    // Если большой картинки нет, то показываем дефолтную картинку
    image.addEventListener('error', () => this.openImage(this.settings.defaultImageSrc));

    // Добавляем контейнер-обертку в тег body.
    document.body.appendChild(galleryWrapperElement);

    // Возвращаем добавленный в body элемент, наш контейнер-обертку.
    return galleryWrapperElement;
  },

  /**
   * Закрывает (удаляет) контейнер для открытой картинки.
   */
  close() {
    document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
  }
};

// Инициализируем нашу галерею при загрузке страницы.
window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});