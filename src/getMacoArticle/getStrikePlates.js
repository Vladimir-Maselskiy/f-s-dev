import {
  addArticleToOrderList,
  singleOrder,
  clearSingleOrder,
} from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';

export function getStrikeplates({ systemOfPVC } = options) {
  const quantityOfPlates = getQuantityOfPlates(singleOrder);

  if (systemOfPVC === '13' || systemOfPVC === 'Salamander') {
    const strikePlates = findElementsByArticle(34824);
    const copyStrikePlates = getCopy(strikePlates);
    copyStrikePlates[0].quantity = quantityOfPlates;
    addArticleToOrderList(copyStrikePlates);
    return;
  }
  if (systemOfPVC === 'Rehau') {
    const strikePlates = findElementsByArticle(354970);
    const copyStrikePlates = getCopy(strikePlates);
    copyStrikePlates[0].quantity = quantityOfPlates;
    addArticleToOrderList(copyStrikePlates);
    return;
  }
  if (systemOfPVC === 'Veka') {
    const strikePlates = findElementsByArticle(34283);
    const copyStrikePlates = getCopy(strikePlates);
    copyStrikePlates[0].quantity = quantityOfPlates;
    addArticleToOrderList(copyStrikePlates);
    return;
  }
  if (systemOfPVC === '9') {
    const strikePlates = findElementsByArticle(34850);
    const copyStrikePlates = getCopy(strikePlates);
    copyStrikePlates[0].quantity = quantityOfPlates;
    addArticleToOrderList(copyStrikePlates);
    return;
  }
}

function getQuantityOfPlates(order) {
  let quantity = 0;
  order.forEach(element => {
    if (element.VZ) {
      quantity += element.VZ;
    }
  });
  clearSingleOrder();
  return quantity;
}

function getCopy(strikePlateArticle) {
  return JSON.parse(JSON.stringify(strikePlateArticle));
}
