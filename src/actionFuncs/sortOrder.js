export function sortOrder(order) {
  return order.sort((a, b) => a.articleGroupID - b.articleGroupID);
}
