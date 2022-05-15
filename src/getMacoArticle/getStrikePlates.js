import { maco } from '../../maco.json';
import { addArticleToOrderList, singleOrder, clearSingleOrder } from '../addArticleToOrderList';

export function getStrikeplates({ systemOfPVC } = options) {
  const quantityOfPlates = getQuantityOfPlates(singleOrder);

  if (systemOfPVC === '13' || systemOfPVC === 'Salamander') {
    const strikePlates = maco.find(element => element.article === 34824);
    const copyStrikePlates = getCopy(strikePlates);
    copyStrikePlates.quantity = quantityOfPlates;
    addArticleToOrderList(copyStrikePlates);
    return;
  }
  if (systemOfPVC === 'Rehau') {
    const strikePlates = maco.find(element => element.article === 354970);
    const copyStrikePlates = getCopy(strikePlates);
    copyStrikePlates.quantity = quantityOfPlates;
    addArticleToOrderList(copyStrikePlates);
    return;
  }
  if (systemOfPVC === 'Veka') {
    const strikePlates = maco.find(element => element.article === 34283);
    const copyStrikePlates = getCopy(strikePlates);
    copyStrikePlates.quantity = quantityOfPlates;
    addArticleToOrderList(copyStrikePlates);
    return;
  }
  if (systemOfPVC === '9') {
    const strikePlates = maco.find(element => element.article === 34850);
    const copyStrikePlates = getCopy(strikePlates);
    copyStrikePlates.quantity = quantityOfPlates;
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
