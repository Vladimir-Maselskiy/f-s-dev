import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getGetriebe(height) {
  if (height > 850 && height < 1250) {
    addArticleToOrderList(maco.find(element => element.article === 212156));
  }
  if (height >= 1250 && height < 1350) {
    addArticleToOrderList(maco.find(element => element.article === 225098));
  }
  if (height >= 1350 && height < 1750) {
    addArticleToOrderList(maco.find(element => element.article === 212158));
  }
  if (height >= 1750 && height <= 2250) {
    addArticleToOrderList(maco.find(element => element.article === 212160));
  }
}
