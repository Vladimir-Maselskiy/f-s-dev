import { addArticleToOrderList } from '../../actionFuncs/addArticleToOrderList';
import { maco } from '../../../maco.json';
import { getExtension } from '../getExtension';

export function getConstGetriebe(height, hanleDistance) {
  let cutGetriebeLength = null;
  if (hanleDistance >= 400 && hanleDistance <= 625) {
    addArticleToOrderList(maco.find(element => element.article === 212156));
    cutGetriebeLength = hanleDistance + 625;
  }
  if (hanleDistance > 625 && hanleDistance <= 675) {
    addArticleToOrderList(maco.find(element => element.article === 225098));
    cutGetriebeLength = hanleDistance + 675;
  }
  if (hanleDistance > 675 && hanleDistance <= 875) {
    addArticleToOrderList(maco.find(element => element.article === 212158));
    cutGetriebeLength = hanleDistance + 875;
  }
  if (hanleDistance > 875 && hanleDistance <= 1125) {
    addArticleToOrderList(maco.find(element => element.article === 212160));
    cutGetriebeLength = hanleDistance + 1125;
  }

  //   блок подовжувачів, при потребі

  if (height - cutGetriebeLength > 0) {
    getExtension(height - cutGetriebeLength);
  }
}
