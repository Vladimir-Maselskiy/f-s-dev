export const sizeRestrictions = {
  minWidth: 400,
  maxWidth: 1300,
  minHeight: 800,
  maxHeight: 2250,
};

export const numberAfterDecimalPoint = 2;

export const clientPercentage = {
  deilleDiscount: 8,
  tradeMargin: 23,
  setTradeMargin(newTradeMargin) {
    this.tradeMargin = newTradeMargin;
  },
};
