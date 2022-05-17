export function getCurrentIDByInputBlur(event) {
  return Number(event.target.parentNode.parentNode.parentNode.parentNode.dataset.form);
}
