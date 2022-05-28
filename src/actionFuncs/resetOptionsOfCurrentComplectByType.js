export function resetOptionsOfCurrentComplectByType(typeOfOpening) {
  const optionFields = document.querySelectorAll('[data-select="select"]');

  optionFields.forEach(optionField => {
    if (optionField.classList.contains(`${typeOfOpening}`)) {
      optionField.classList.remove('hidden');
    } else {
      optionField.classList.add('hidden');
    }
  });
}
