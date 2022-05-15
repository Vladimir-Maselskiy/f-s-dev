import { maco } from '../../../maco.json';
import { addArticleToOrderList } from '../../actionFuncs/addArticleToOrderList';
import { getExtension } from '../getExtension';
import { getConstGetriebe } from './getConstGetriebe';

export function getGetriebe(options) {
  const { height, hanleDistance } = options;
  if (hanleDistance) {
    getConstGetriebe(height, hanleDistance);
    return;
  }
  let cutGetriebeLength = null;

  if (height > 850 && height < 1250) {
    addArticleToOrderList(maco.find(element => element.article === 212156));
    cutGetriebeLength = 1250;
  }
  if (height >= 1250 && height < 1350) {
    addArticleToOrderList(maco.find(element => element.article === 225098));
    cutGetriebeLength = 1350;
  }
  if (height >= 1350 && height < 1750) {
    addArticleToOrderList(maco.find(element => element.article === 212158));
    cutGetriebeLength = 1750;
  }
  if (height >= 1750) {
    addArticleToOrderList(maco.find(element => element.article === 212160));
    cutGetriebeLength = 2250;
  }
  if (height - cutGetriebeLength > 0) {
    getExtension((height - cutGetriebeLength) / 2);
    getExtension((height - cutGetriebeLength) / 2);
  }
}
