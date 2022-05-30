import { addArticleToOrderList } from '../../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from '../../calcFuncs/findElementsByArticle';
import { getExtension } from '../getExtension';
import { getConstGetriebe } from './getConstGetriebe';
import { getTiltGetriebe } from './getTiltGetriebe';
import { getTurningGetgriebe } from './getTurningGetgriebe';

export function getGetriebe(options) {
  const { height, hanleDistance, typeOfOpening = 'type-1', isTurnTiltGetriebe = false } = options;
  if (typeOfOpening === 'type-3') {
    getTiltGetriebe(options);
    return;
  }
  if (typeOfOpening === 'type-2' && !isTurnTiltGetriebe) {
    getTurningGetgriebe(options);
    return;
  }
  if (hanleDistance) {
    getConstGetriebe(height, hanleDistance);
    return;
  }
  let cutGetriebeLength = null;

  if (height >= 470 && height < 800) {
    addArticleToOrderList(findElementsByArticle(201746, 213287, 213287), 3);
    cutGetriebeLength = 1250;
  }
  if (height >= 800 && height < 1250) {
    addArticleToOrderList(findElementsByArticle(212156), 3);
    cutGetriebeLength = 1250;
  }
  // if (height >= 1250 && height < 1350) {
  //   addArticleToOrderList(findElementsByArticle(225098), 3);
  //   cutGetriebeLength = 1350;
  // }
  if (height >= 1250 && height < 1750) {
    addArticleToOrderList(findElementsByArticle(212158), 3);
    cutGetriebeLength = 1750;
  }
  if (height >= 1750) {
    addArticleToOrderList(findElementsByArticle(212160), 3);
    cutGetriebeLength = 2250;
  }
  if (height - cutGetriebeLength > 0) {
    getExtension((height - cutGetriebeLength) / 2);
    getExtension((height - cutGetriebeLength) / 2);
  }
}
