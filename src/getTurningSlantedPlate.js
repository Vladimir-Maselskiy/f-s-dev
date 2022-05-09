import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getTurningSlantedPlate({ systemOfPVC, sideOfHinge } = options) {
  if (
    (systemOfPVC === '13' ||
      systemOfPVC === 'Salamander' ||
      systemOfPVC === 'Rehau' ||
      systemOfPVC === 'Veka') &&
    sideOfHinge === 'right'
  ) {
    addArticleToOrderList(maco.find(element => element.article === 33460));
    return;
  }
  if (
    (systemOfPVC === '13' ||
      systemOfPVC === 'Salamander' ||
      systemOfPVC === 'Rehau' ||
      systemOfPVC === 'Veka') &&
    sideOfHinge === 'left'
  ) {
    addArticleToOrderList(maco.find(element => element.article === 33461));
    return;
  }
  if (systemOfPVC === '9' && sideOfHinge === 'right') {
    addArticleToOrderList(maco.find(element => element.article === 33322));
  }
  if (systemOfPVC === '9' && sideOfHinge === 'left') {
    addArticleToOrderList(maco.find(element => element.article === 33323));
    return;
  }
}
