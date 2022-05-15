export let orderList = [];
export let singleOrder = [];

export function addArticleToOrderList(article) {
  const newArticle = JSON.parse(JSON.stringify(article));
  if (!newArticle.quantity) newArticle.quantity = 1;
  const index = orderList.findIndex(item => item.id === newArticle.id);
  singleOrder.push(newArticle);
  if (index !== -1) {
    orderList[index].quantity += newArticle.quantity;

    return;
  }
  orderList.push(newArticle);
}

export function clearSingleOrder() {
  singleOrder = [];
}

export function clearOrderlist() {
  orderList = [];
}
