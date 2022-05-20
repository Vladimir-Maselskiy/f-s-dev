import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getShear(width) {
  if (width >= 400 && width < 600) {
    addArticleToOrderList(findElementsByArticle(211695));
  }
  if (width >= 600 && width < 800) {
    addArticleToOrderList(findElementsByArticle(211696));
  }
  if (width >= 800 && width < 1050) {
    addArticleToOrderList(findElementsByArticle(211698));
  }
  if (width >= 1050 && width < 1300) {
    addArticleToOrderList(findElementsByArticle(211699));
  }
}
