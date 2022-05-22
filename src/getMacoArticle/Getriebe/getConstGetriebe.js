import { addArticleToOrderList } from '../../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from '../findElementsByArticle';
import { getExtension } from '../getExtension';

export function getConstGetriebe(height, hanleDistance) {
  let cutGetriebeLength = null;

  if (hanleDistance >= 235 && hanleDistance <= 400) {
    addArticleToOrderList(findElementsByArticle(201746, 213287, 213287));
    cutGetriebeLength = hanleDistance + 400;
  }

  if (hanleDistance > 400 && hanleDistance <= 625) {
    addArticleToOrderList(findElementsByArticle(212156));
    cutGetriebeLength = hanleDistance + 625;
  }
  if (hanleDistance > 625 && hanleDistance <= 675) {
    addArticleToOrderList(findElementsByArticle(225098));
    cutGetriebeLength = hanleDistance + 675;
  }
  if (hanleDistance > 675 && hanleDistance <= 875) {
    addArticleToOrderList(findElementsByArticle(212158));
    cutGetriebeLength = hanleDistance + 875;
  }
  if (hanleDistance > 875 && hanleDistance <= 1125) {
    addArticleToOrderList(findElementsByArticle(212160));
    cutGetriebeLength = hanleDistance + 1125;
  }

  //   блок подовжувачів, при потребі

  if (height - cutGetriebeLength > 0) {
    getExtension(height - cutGetriebeLength);
  }
}
