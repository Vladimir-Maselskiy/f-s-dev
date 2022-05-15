import { maco } from '../../maco.json';
import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';
import { getMicroVentilationPlate } from './getMicroVentilationPlate';

export function getConerGear({ systemOfPVC, microVentilation = true }) {
  if (microVentilation) {
    addArticleToOrderList(maco.find(element => element.article === 228430));
    getMicroVentilationPlate(systemOfPVC);
    return;
  }

  addArticleToOrderList(maco.find(element => element.article === 211974));
}
