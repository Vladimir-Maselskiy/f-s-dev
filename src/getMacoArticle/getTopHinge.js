import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getTopHinge({ systemOfPVC } = options) {
  addArticleToOrderList(findElementsByArticle(52480, 94491));
  if (
    systemOfPVC === '13' ||
    systemOfPVC === 'Salamander' ||
    systemOfPVC === 'Rehau' ||
    systemOfPVC === 'Veka'
  ) {
    addArticleToOrderList(findElementsByArticle(52486));
  }

  if (systemOfPVC === '9') {
    addArticleToOrderList(findElementsByArticle(52487));
  }
}
