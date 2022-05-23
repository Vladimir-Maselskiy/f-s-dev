import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getBottomHinge() {
  addArticleToOrderList(findElementsByArticle(52478, 52483), 12);
}
