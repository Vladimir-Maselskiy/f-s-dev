export const refs = {
  bodyRef: document.querySelector('body'),
  currencyRate: document.querySelector('[data-currency-rate="currency-rate"]'),
  form: document.querySelector('form'),
  formGroup: document.querySelector('.form-group'),
  marginButton: document.querySelector('[data-action="margin"]'),
  submitButton: document.querySelector('[data-action="form-submit"]'),
  widthInput: document.querySelector('[data-input="width"]'),
  heightInput: document.querySelector('[data-input="height"]'),
  inputInfoButton: document.querySelector('.input-info'),
  addButton: document.querySelector('.add-button'),
  typeOfOpening: document.querySelector('.type-of-opening'),
  removeButton: document.querySelector('[data-action="remote"]'),
  optionButton: document.querySelector('[data-option="1"]'),
  tableContainerRef: document.querySelector('.table-container'),
  newOrderButtonRef: document.querySelector('.new-order-button'),

  // modalRefs
  submitModalButton: document.querySelector('[data-modal="modal__submit-button"]'),
  widthInModalInput: document.querySelector('.size-input-modal[data-input="width"]'),
  heightInModalInputRef: document.querySelector('.size-input-modal[data-input="height"]'),
  handleDistanceInModal: document.querySelector('.size-input-modal[data-input="handle-distance"]'),
  microVentilationInModal: document.querySelector('.micro-ventilation-modal'),
  gorizontalLock: document.querySelector('.bottom-horizontal-lock-modal'),
  withoutBottomHinge: document.querySelector('.without-bottom-hinge-modal'),
  isTurnTiltGetriebeInModal: document.querySelector('.turn-tilt-getriebe-type-2-modal'),
  hingeSidePress: document.querySelector('.hinge-side-press-block-modal'),

  modalFormRef: document.querySelector('.modal-form'),
  modalBlock: document.querySelector('[data-modal]'),

  // typeOfOpeningModalFormRef

  typeOfOpeningModalFormRef: document.querySelector('.type-of-opening-modal-form'),
  typeofOpeningModalBlock: document.querySelector('.type-of-opening-modal-backdrop'),
  submitButtonTypeofOpeningModal: document.querySelector(
    '[data-modal="type-of-opening-modal__submit-button"]',
  ),
  selectBlockTypeOfOpening: document.querySelector('.select-type-of-opening-block'),
};
