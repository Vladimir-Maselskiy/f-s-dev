import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getBottomDecor({ withoutBottomHinge }) {
  if (withoutBottomHinge) return;

  addArticleToOrderList(findElementsByArticle(42087, 41742, 41743), 14);
}
