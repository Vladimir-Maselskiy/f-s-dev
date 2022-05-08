import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getShear(width) {
  if (width >= 400 && width < 600) {
    addArticleToOrderList(maco.find(element => element.article === 211695));
  }
  if (width >= 600 && width < 800) {
    addArticleToOrderList(maco.find(element => element.article === 211696));
  }
  if (width >= 800 && width < 1050) {
    addArticleToOrderList(maco.find(element => element.article === 211698));
  }
  if (width >= 1050 && width < 1300) {
    addArticleToOrderList(maco.find(element => element.article === 211699));
  }
}
