import { addArticleToOrderList } from '../../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from '../findElementsByArticle';
import { getExtension } from '../getExtension';
import { getConstGetriebe } from './getConstGetriebe';

export function getGetriebe(options) {
  const { height, hanleDistance } = options;
  if (hanleDistance) {
    getConstGetriebe(height, hanleDistance);
    return;
  }
  let cutGetriebeLength = null;

  if (height >= 470 && height < 800) {
    addArticleToOrderList(findElementsByArticle(201746, 213287, 213287));
    cutGetriebeLength = 1250;
  }
  if (height >= 800 && height < 1250) {
    addArticleToOrderList(findElementsByArticle(212156));
    cutGetriebeLength = 1250;
  }
  if (height >= 1250 && height < 1350) {
    addArticleToOrderList(findElementsByArticle(225098));
    cutGetriebeLength = 1350;
  }
  if (height >= 1350 && height < 1750) {
    addArticleToOrderList(findElementsByArticle(212158));
    cutGetriebeLength = 1750;
  }
  if (height >= 1750) {
    addArticleToOrderList(findElementsByArticle(212160));
    cutGetriebeLength = 2250;
  }
  if (height - cutGetriebeLength > 0) {
    getExtension((height - cutGetriebeLength) / 2);
    getExtension((height - cutGetriebeLength) / 2);
  }
}
