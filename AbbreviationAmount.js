function formatNumberWithUnit(num) {
    const K = 1000;
    const M = 10000;
    const T = 100000000;
    const units = [
      { value: T, symbol: '亿' },
      { value: M, symbol: '万' },
      { value: K, symbol: '千' }
    ];
    let formattedNum = '';
    let unitIndex = 0;
    let remainder = num;
    while (remainder > 0 && unitIndex < units.length) {
      const { value } = units[unitIndex];
      const quotient = Math.floor(remainder / value);
      if (quotient > 0) {
        formattedNum += `${quotient}${units[unitIndex].symbol}`;
      }
      remainder = remainder % value;
      unitIndex++;
    }
    const decimal = remainder % 1 === 0 ? '' : remainder.toFixed(2).replace(/\.?0+$/, '');
    formattedNum += decimal;
    return formattedNum + unit;
  }