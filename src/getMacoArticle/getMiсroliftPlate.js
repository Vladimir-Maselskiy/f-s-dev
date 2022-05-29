import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getMicroliftPlate(options) {
  const {
    systemOfPVC,
    sideOfHinge,
    typeOfOpening = 'type-1',
    isTurnTiltGetriebe = false,
  } = options;
  if (typeOfOpening === 'type-2' && !isTurnTiltGetriebe) {
    return;
  }

  if (
    (systemOfPVC === '13' ||
      systemOfPVC === 'Salamander' ||
      systemOfPVC === 'Rehau' ||
      systemOfPVC === 'Veka') &&
    sideOfHinge === 'right'
  ) {
    addArticleToOrderList(findElementsByArticle(356966), 9);
    return;
  }
  if (
    (systemOfPVC === '13' ||
      systemOfPVC === 'Salamander' ||
      systemOfPVC === 'Rehau' ||
      systemOfPVC === 'Veka') &&
    sideOfHinge === 'left'
  ) {
    addArticleToOrderList(findElementsByArticle(356967), 9);
    return;
  }
  if (systemOfPVC === '9' && sideOfHinge === 'right') {
    addArticleToOrderList(findElementsByArticle(358680), 9);
  }
  if (systemOfPVC === '9' && sideOfHinge === 'left') {
    addArticleToOrderList(findElementsByArticle(358681), 9);
    return;
  }
}
