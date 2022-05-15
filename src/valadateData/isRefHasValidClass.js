export function isRefHasValidClass(ref) {
  if (ref.classList.contains('valid')) {
    return true;
  }
  return false;
}
