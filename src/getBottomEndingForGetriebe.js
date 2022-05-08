import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getBottomEndingForGetriebe(height) {
  if (height > 470 && height < 1750) {
    addArticleToOrderList(maco.find(element => element.article === 212689));
  }
  if (height >= 1750 && height <= 2250) {
    addArticleToOrderList(maco.find(element => element.article === 212688));
  }
}
