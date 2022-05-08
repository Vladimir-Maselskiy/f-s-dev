import { maco } from '../maco.json';
import { addArticleToOrderList } from './addArticleToOrderList';

export function getCenterLocks(width, height) {
  if (width > 480 && width < 800) {
    addArticleToOrderList(maco.find(element => element.article === 228398));
  }
  if (width >= 800 && width < 1200) {
    addArticleToOrderList(maco.find(element => element.article === 211924));
  }
  if (height > 480 && height < 800) {
    addArticleToOrderList(maco.find(element => element.article === 228398));
  }
  if (height >= 800 && height < 1280) {
    addArticleToOrderList(maco.find(element => element.article === 211924));
  }
  if (height >= 1280 && height < 1500) {
    addArticleToOrderList(maco.find(element => element.article === 211925));
  }
  if (height >= 1500 && height < 2000) {
    addArticleToOrderList(maco.find(element => element.article === 211926));
  }
  if (height >= 2000 && height < 2200) {
    addArticleToOrderList(maco.find(element => element.article === 211927));
  }
  if (height >= 2200 && height < 2450) {
    addArticleToOrderList(maco.find(element => element.article === 211928));
  }
}
