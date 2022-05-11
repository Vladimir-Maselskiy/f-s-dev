export function onInputValidate(event) {
  if (event.target.dataset.input === 'width' || event.target.dataset.input === 'height') {
    console.log(event);
  }
}
