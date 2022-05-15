import { maco } from '../../maco.json';
import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';

export function getConerGear() {
  addArticleToOrderList(maco.find(element => element.article === 211974));
}
