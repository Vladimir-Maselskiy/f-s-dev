import { refs } from './refs';

export function onAddButtonClick() {
  const numbersOfRenderedInputFields = refs.formGroup.children.length;
  const newInputField = document.createElement('div');
  newInputField.classList.add('form-group__input-field');
  //   newInputField.id = numbersOfRenderedInputFields + 1;
  const markup = `
            <label for="width-input">Ширина</label>
            <input type="input" class="size-input" id="width-input-${
              numbersOfRenderedInputFields + 1
            }">
            <label for="hight-input">Висота</label>
            <input type="input" class="size-input" id="height-input-${
              numbersOfRenderedInputFields + 1
            }">
    `;
  newInputField.innerHTML = markup;
  refs.formGroup.insertAdjacentElement('beforeend', newInputField);
}
