import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { findElementsByArticle } from './findElementsByArticle';
import { getMicroVentilationPlate } from './getMicroVentilationPlate';

export function getConerGear({ systemOfPVC, microVentilation = true }) {
  if (microVentilation) {
    addArticleToOrderList(findElementsByArticle(228430));
    getMicroVentilationPlate(systemOfPVC);
    return;
  }

  addArticleToOrderList(findElementsByArticle(211974));
}
