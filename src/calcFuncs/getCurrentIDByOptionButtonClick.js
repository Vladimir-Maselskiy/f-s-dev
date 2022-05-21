export function getCurrentIDByOptionButtonClick(event) {
  return Number(event.currentTarget.parentNode.parentNode.dataset.form);
}
