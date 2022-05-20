import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getBottomEndingForGetriebe(height) {
  if (height > 470 && height < 1750) {
    addArticleToOrderList(findElementsByArticle(212689));
  }
  if (height >= 1750 && height <= 2250) {
    addArticleToOrderList(findElementsByArticle(212688));
  }
}
