import { onOptionButtonClick } from './onOptionButtonClick';
import { refs } from './refs';

export function onAddButtonClick() {
  const numberOfOrdersComplects = document.querySelectorAll('.form-group').length;
  const newFormGroup = document.createElement('div');
  newFormGroup.classList.add('form-group');
  newFormGroup.dataset.form = `${numberOfOrdersComplects + 1}`;

  //   newInputField.id = numbersOfRenderedInputFields + 1;
  const markup = `   
        <div class="form-group__input-field">
        <label
        >Ширина
        <input type="input" class="size-input" data-input="width" />
      </label>
      <label
        >Висота
        <input type="input" class="size-input" data-input="height" />
      </label>
      <div id="counter">
        <button type="button" data-action="decrement">-1</button>
        <span data-value="value">1</span>
        <button type="button" data-action="increment">+1</button>
      </div>
        </div>
        <div class="required-option">
          <div class="side-of-hinge-radio-block">
            <p class="side-of-hinge-radio-block__label">Сторона петель:</p>
            <label>
              <input
                type="radio"
                name="side-of-hinge-${numberOfOrdersComplects + 1}"
                class="side-of-hinge-css"
                value="left"
              />
              Ліворуч
            </label>
            <label>
              <input
                type="radio"
                name="side-of-hinge-${numberOfOrdersComplects + 1}"
                class="side-of-hinge-css"
                value="right"
                checked
              />
              Праворуч
            </label>
          </div>
          <div class="system-of-pvc-block">
            <label for="size">Профільна система</label>
            <select class="select-block">
              <option value="13" name="system-of-pvc" selected>13-та серія</option>
              <option value="9" name="system-of-pvc">9-та серія</option>
              <option value="Salamander" name="system-of-pvc">Salamander(13)</option>
              <option value="Rehau" name="system-of-pvc">Rehau(13)</option>
              <option value="Veka" name="system-of-pvc">Veka(13)</option>
            </select>
          </div>
        </div>
        <button type="button"  data-option="${numberOfOrdersComplects + 1}" class="option-button">
          Опції
        </button>
    `;

  newFormGroup.innerHTML = markup;
  refs.form.lastElementChild.insertAdjacentElement('beforebegin', newFormGroup);
  document
    .querySelector(`[data-option="${numberOfOrdersComplects + 1}"]`)
    .addEventListener('click', onOptionButtonClick);
}
