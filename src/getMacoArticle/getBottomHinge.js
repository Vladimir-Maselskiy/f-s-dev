import { maco } from '../../maco.json';
import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';

export function getBottomHinge() {
  addArticleToOrderList(maco.find(element => element.article === 52478));
  addArticleToOrderList(maco.find(element => element.article === 52483));
}
