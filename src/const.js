export const sizeRestrictions = {
  minWidth: 400,
  maxWidth: 1300,
  minHeight: 470,
  maxHeight: 2400,
};

export const numberAfterDecimalPoint = 2;

export const clientPercentage = {
  deilleDiscount: 0,
  tradeMargin: 10,
  setTradeMargin(newTradeMargin) {
    this.tradeMargin = newTradeMargin;
  },
};
