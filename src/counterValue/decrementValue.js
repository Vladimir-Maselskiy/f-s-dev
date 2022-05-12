export function decrementValue(spanRef) {
  if (Number(spanRef.textContent) === 1) return;
  spanRef.textContent = Number(spanRef.textContent) - 1;
}
