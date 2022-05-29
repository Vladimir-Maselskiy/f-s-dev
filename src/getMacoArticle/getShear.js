import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getShear(options) {
  const { width, typeOfOpening = 'type-1' } = options;
  if (typeOfOpening === 'type-2') {
    addArticleToOrderList(findElementsByArticle(52462), 1);
    return;
  }
  if (width >= 400 && width < 600) {
    addArticleToOrderList(findElementsByArticle(211695), 1);
  }
  if (width >= 600 && width < 800) {
    addArticleToOrderList(findElementsByArticle(211696), 1);
  }
  if (width >= 800 && width < 1050) {
    addArticleToOrderList(findElementsByArticle(211698), 1);
  }
  if (width >= 1050 && width < 1300) {
    addArticleToOrderList(findElementsByArticle(211699), 1);
  }
}
