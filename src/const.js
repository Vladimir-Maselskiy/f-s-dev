export const sizeRestrictions = {
  minWidth: 400,
  maxWidth: 1300,
  minHeight: 470,
  maxHeight: 2400,
};

export const numberAfterDecimalPoint = 2;

export const clientPercentage = {
  deilleDiscount: 8,
  tradeMargin: 23,
  setTradeMargin(newTradeMargin) {
    this.tradeMargin = newTradeMargin;
  },
};
