export function sortOrder(order) {
  return order.sort((a, b) => {
    if (a.articleGroupID - b.articleGroupID === 0) {
      return a.article - b.article;
    } else {
      return a.articleGroupID - b.articleGroupID;
    }
  });
}
