import { maco } from '../../maco.json';
import { addArticleToOrderList } from '../actionFuncs/addArticleToOrderList';

export function getMicroVentilationPlate(systemOfPVC) {
  if (
    systemOfPVC === '13' ||
    systemOfPVC === 'Salamander' ||
    systemOfPVC === 'Rehau' ||
    systemOfPVC === 'Veka'
  ) {
    addArticleToOrderList(maco.find(element => element.article === 25816));
  }

  if (systemOfPVC === '9') {
    addArticleToOrderList(maco.find(element => element.article === 25850));
  }
}
