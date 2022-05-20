import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getExtension(length) {
  let customLenght = length;

  while (customLenght > 0) {
    console.log(customLenght);
    if (customLenght >= 270) {
      addArticleToOrderList(findElementsByArticle(215272));
      customLenght -= 470;
      continue;
    }
    if (customLenght > 141) {
      addArticleToOrderList(findElementsByArticle(214711));
      customLenght -= 235;
      continue;
    }
    if (customLenght > 0) {
      addArticleToOrderList(findElementsByArticle(206630));
      customLenght -= 140;
    }
  }
}
