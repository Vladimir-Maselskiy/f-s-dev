import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getBottomEndingForGetriebe(options) {
  const { height, isTurnTiltGetriebe = false, typeOfOpening = 'type-1' } = options;
  if (!isTurnTiltGetriebe && typeOfOpening === 'type-2') {
    return;
  }
  if (height >= 470 && height < 1750) {
    addArticleToOrderList(findElementsByArticle(212689), 5);
  }
  if (height >= 1750 && height <= 2250) {
    addArticleToOrderList(findElementsByArticle(212688), 5);
  }
}
