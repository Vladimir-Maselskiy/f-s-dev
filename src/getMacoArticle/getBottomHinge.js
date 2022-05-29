import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getBottomHinge(options) {
  const { withoutBottomHinge = false } = options;
  if (withoutBottomHinge) return;
  addArticleToOrderList(findElementsByArticle(52478, 52483), 12);
}
