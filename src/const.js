export let sizeRestrictions = {
  minWidth: 400,
  maxWidth: 1300,
  minHeight: 470,
  maxHeight: 2400,
};
export const sizeRestrictionsTiltMode = {
  minWidth: 300,
  maxWidth: 2250,
  minHeight: 350,
  maxHeight: 2250,
};

export const sizeRestrictionsStandartMode = {
  minWidth: 400,
  maxWidth: 1300,
  minHeight: 470,
  maxHeight: 2400,
};

export const numberAfterDecimalPoint = 2;

export const clientPercentage = {
  deilleDiscount: 0,
  tradeMargin: 0,
  setTradeMargin(newTradeMargin) {
    this.tradeMargin = newTradeMargin;
  },
};

export const commerceStatistic = false;

export function setCurrentSizeRestrictions(options) {
  if (options.typeOfOpening === 'type-3') {
    sizeRestrictions = sizeRestrictionsTiltMode;
  } else {
    sizeRestrictions = sizeRestrictionsStandartMode;
  }
}
