import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getMicroliftPlate({ systemOfPVC, sideOfHinge } = options) {
  if (
    (systemOfPVC === '13' ||
      systemOfPVC === 'Salamander' ||
      systemOfPVC === 'Rehau' ||
      systemOfPVC === 'Veka') &&
    sideOfHinge === 'right'
  ) {
    addArticleToOrderList(maco.find(element => element.article === 356966));
    return;
  }
  if (
    (systemOfPVC === '13' ||
      systemOfPVC === 'Salamander' ||
      systemOfPVC === 'Rehau' ||
      systemOfPVC === 'Veka') &&
    sideOfHinge === 'left'
  ) {
    addArticleToOrderList(maco.find(element => element.article === 356967));
    return;
  }
  if (systemOfPVC === '9' && sideOfHinge === 'right') {
    addArticleToOrderList(maco.find(element => element.article === 358680));
  }
  if (systemOfPVC === '9' && sideOfHinge === 'left') {
    addArticleToOrderList(maco.find(element => element.article === 358681));
    return;
  }
}
