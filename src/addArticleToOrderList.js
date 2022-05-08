export let orderList = [];

export function addArticleToOrderList(article) {
  const newArticle = JSON.parse(JSON.stringify(article));
  if (!newArticle.quantity) newArticle.quantity = 1;
  const index = orderList.findIndex(item => item.id === newArticle.id);

  if (index !== -1) {
    orderList[index].quantity += newArticle.quantity;

    return;
  }
  orderList.push(newArticle);
}
