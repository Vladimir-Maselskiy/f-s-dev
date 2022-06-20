export let orderList = [];
export let singleOrder = [];

export function addArticleToOrderList(articles, articleGroupID) {
  articles.forEach(article => {
    console.log('article', article);
    if (!article) {
      return;
    }
    const newArticle = JSON.parse(JSON.stringify(article));
    newArticle.articleGroupID = articleGroupID;
    if (!newArticle.quantity) newArticle.quantity = 1;
    singleOrder.push(newArticle);
    const index = orderList.findIndex(item => item.id === newArticle.id);
    if (index !== -1) {
      orderList[index].quantity += newArticle.quantity;
      return;
    }
    orderList.push(newArticle);
  });
}

export function clearSingleOrder() {
  singleOrder = [];
}

export function clearOrderlist() {
  orderList = [];
}
