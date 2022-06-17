import { addArticleToOrderList } from '../../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from '../../calcFuncs/findElementsByArticle';
import { getLatch } from '../additionalArticle/getLatch';
import { getStrikePlatesForShtulp } from '../additionalArticle/getStrikePlatesForShtulp';

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
  if (shtulpBlock === 'getriebe') {
    addArticleToOrderList(findElementsByArticle(211745), 3.5);

    if (height >= 930 && height <= 1250) {
      addArticleToOrderList(findElementsByArticle(211791), 3);
    }

    if (height > 1250 && height <= 1750) {
      addArticleToOrderList(findElementsByArticle(209670), 3);
    }

    if (height > 1750 && height <= 2250) {
      addArticleToOrderList(findElementsByArticle(209671), 3);
    }
    if (height >= 930 && height <= 1250) {
      addArticleToOrderList(findElementsByArticle(209648), 3.5);
    }
    if (height > 1250) {
      addArticleToOrderList(findElementsByArticle(209637), 3.5);
    }
    if (height > 2250) {
      addArticleToOrderList(findElementsByArticle(206630, 206630), 7);
    }
    getStrikePlatesForShtulp(options);
  }
}
