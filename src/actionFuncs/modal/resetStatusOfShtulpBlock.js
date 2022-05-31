import { refs } from '../../refs';

export function resetStatusOfShtulpBlock() {
  refs.shtulpBlockInModal.querySelector('[value="latch"]').disabled = false;
  refs.shtulpBlockInModal
    .querySelector('[value="latch"]')
    .parentNode.classList.remove('disabled-text-gray');
  refs.shtulpBlockInModal.querySelector('[value="getriebe"]').checked = true;
  refs.shtulpBlockInModal.querySelector('[value="getriebe"]').disabled = false;
  refs.shtulpBlockInModal
    .querySelector('[value="getriebe"]')
    .parentNode.classList.remove('disabled-text-gray');
}
