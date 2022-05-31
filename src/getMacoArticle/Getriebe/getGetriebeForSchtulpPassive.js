import { getLatch } from '../additionalArticle/getLatch';

export function getGetriebeForSchtulpPassive(options) {
  const {
    height,
    shtulpBlock,
    hanleDistance,
    typeOfOpening = 'type-1',
    isTurnTiltGetriebe = false,
  } = options;
  if (shtulpBlock === 'latch') {
    getLatch(options);
    return;
  }
}
