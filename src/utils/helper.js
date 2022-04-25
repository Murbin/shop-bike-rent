export const items = Array(5)
  .fill()
  .map((v, i) => {
    return { title: '' };
  });

export const types = ['electrics', 'old', 'normal'];

export const validateEmpty = (value) => {
  let error;
  if (!value) {
    error = `Required field`;
    return error;
  }
};

export const maxDays = Array(51)
  .fill()
  .map((v, i) => i);

export const eurosDE = Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  currencyDisplay: 'symbol'
});
