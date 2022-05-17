export function getCurrentIDByOptionButtonClick(event) {
  console.log(event.target.parentNode.parentNode.dataset.form);
  return Number(event.currentTarget.parentNode.parentNode.dataset.form);
}
