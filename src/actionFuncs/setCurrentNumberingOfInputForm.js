export function setCurrentNumberingOfInputForm() {
  const inputFormsRefs = document.querySelectorAll('.form-group');
  let i = 1;
  inputFormsRefs.forEach(element => {
    const formNumber = element.querySelector('.form-counter');
    formNumber.textContent = i;
    i += 1;
  });
}
