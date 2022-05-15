export function getCurrentIDByOptionButtonClick(event) {
  return Number(event.target.parentNode.dataset.form);
}
