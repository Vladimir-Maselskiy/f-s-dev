import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getTurningSlantedPlate(options) {
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
    addArticleToOrderList(findElementsByArticle(33460), 8);
    return;
  }
  if (
    (systemOfPVC === '13' ||
      systemOfPVC === 'Salamander' ||
      systemOfPVC === 'Rehau' ||
      systemOfPVC === 'Veka') &&
    sideOfHinge === 'left'
  ) {
    addArticleToOrderList(findElementsByArticle(33461), 8);
    return;
  }
  if (systemOfPVC === '9' && sideOfHinge === 'right') {
    addArticleToOrderList(findElementsByArticle(33322), 8);
  }
  if (systemOfPVC === '9' && sideOfHinge === 'left') {
    addArticleToOrderList(findElementsByArticle(33323), 8);
    return;
  }
}
