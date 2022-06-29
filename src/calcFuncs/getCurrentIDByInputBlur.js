export function getCurrentIDByInputBlur(event) {
  return Number(event.target.closest('[data-form]').dataset.form);
}
