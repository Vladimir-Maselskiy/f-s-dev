import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getCenterLocks(options) {
  const { width, height } = options;
  if (width > 480 && width < 800) {
    addArticleToOrderList(findElementsByArticle(228398), 6);
  }
  if (width >= 800 && width < 1200) {
    addArticleToOrderList(findElementsByArticle(211924), 6);
  }
  if (height > 480 && height < 800) {
    addArticleToOrderList(findElementsByArticle(228398), 6);
  }
  if (height >= 800 && height < 1280) {
    addArticleToOrderList(findElementsByArticle(211924), 6);
  }
  if (height >= 1280 && height < 1500) {
    addArticleToOrderList(findElementsByArticle(211925), 6);
  }
  if (height >= 1500 && height < 2000) {
    addArticleToOrderList(findElementsByArticle(211926), 6);
  }
  if (height >= 2000 && height < 2200) {
    addArticleToOrderList(findElementsByArticle(211927), 6);
  }
  if (height >= 2200 && height < 2450) {
    addArticleToOrderList(findElementsByArticle(211928), 6);
  }
}
