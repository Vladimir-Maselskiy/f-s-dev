import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { maco } from '../../maco.json';

export function getExtension(length) {
  let customLenght = length;

  while (customLenght > 0) {
    console.log(customLenght);
    if (customLenght >= 270) {
      addArticleToOrderList(maco.find(element => element.article === 215272));
      customLenght -= 470;
      continue;
    }
    if (customLenght > 141) {
      addArticleToOrderList(maco.find(element => element.article === 214711));
      customLenght -= 235;
      continue;
    }
    if (customLenght > 0) {
      addArticleToOrderList(maco.find(element => element.article === 206630));
      customLenght -= 140;
    }
  }
}
