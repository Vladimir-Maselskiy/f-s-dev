export function makeScrollToBottom() {
  const domRect = document.querySelector('.input-data-section').getBoundingClientRect();
  window.scrollBy({
    top: domRect.bottom,
    behavior: 'smooth',
  });
}
