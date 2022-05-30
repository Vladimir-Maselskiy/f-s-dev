import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from '../calcFuncs/findElementsByArticle';

export function getExtension(length) {
  let customLenght = length;

  while (customLenght > 0) {
    if (customLenght >= 270) {
      addArticleToOrderList(findElementsByArticle(215272), 7);
      customLenght -= 470;
      continue;
    }
    if (customLenght > 141) {
      addArticleToOrderList(findElementsByArticle(214711), 7);
      customLenght -= 235;
      continue;
    }
    if (customLenght > 0) {
      addArticleToOrderList(findElementsByArticle(206630), 7);
      customLenght -= 140;
    }
  }
}
