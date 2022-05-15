import { maco } from '../../maco.json';
import { addArticleToOrderList } from '../addArticleToOrderList';

export function getTopHinge({ systemOfPVC } = options) {
  addArticleToOrderList(maco.find(element => element.article === 52480));
  if (
    systemOfPVC === '13' ||
    systemOfPVC === 'Salamander' ||
    systemOfPVC === 'Rehau' ||
    systemOfPVC === 'Veka'
  ) {
    addArticleToOrderList(maco.find(element => element.article === 52486));
  }

  if (systemOfPVC === '9') {
    addArticleToOrderList(maco.find(element => element.article === 52487));
  }

  addArticleToOrderList(maco.find(element => element.article === 94491));
}
