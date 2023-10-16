import BigNumber from 'bignumber.js'; // See https://github.com/MikeMcl/bignumber.js

const denominationsMultiplier = {
  WEI: new BigNumber(1, 10).times(10).exponentiatedBy(18), // 10 pow 18
  GWEI: new BigNumber(1, 2).times(10).exponentiatedBy(10), // original was: GWEI: new BigNumber(1, 10).times(8).exponentiatedBy(10),
  ETH: new BigNumber(1, 10).times(10).exponentiatedBy(1),   // result = 121010101615
}

function getFiatValueToRender({
  value,
  conversionRate = 1,
  fromDenomination,
  fromCurrency,
}) {
  let number = new BigNumber(value, 10); // original was: let number = new BigNumber(value, 16);
  if (fromCurrency !== 'ETH') {
    number = number.multipliedBy(conversionRate);
  }
  if (fromDenomination !== 'WEI') {
    number = number.multipliedBy(
      denominationsMultiplier.WEI
        .dividedBy(denominationsMultiplier[fromDenomination])
    )
  }
  return number.toString(16); // original was: return number.toString(32);
}

function getResult(value) {
  return getFiatValueToRender({
    value,
    conversionRate: 15,
    fromDenomination: 'GWEI',
    fromCurrency: 'ABC',
  })
}
it('should return 0', () => {
  expect(getResult(0)).toBe('0');
});
it('should return 59682f00', () => {
  expect(getResult(1)).toBe('59682f00');
});
it('should return e762bdf8a40', () => {
  expect(getResult(10600.47)).toBe('e762bdf8a40');
});