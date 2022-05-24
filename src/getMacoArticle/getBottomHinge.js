import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getBottomHinge({ withoutBottomHinge }) {
  if (withoutBottomHinge) return;
  addArticleToOrderList(findElementsByArticle(52478, 52483), 12);
}
