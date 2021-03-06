export const initialValues = {
  username: '',
  type: '',
  days: undefined,
  bicycle: undefined,
  price: undefined,
  image: undefined
};

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

export const mywords = [
  'bianchi',
  'orbea',
  'mtb',
  'frime',
  'road',
  'best',
  'chisel',
  'turbo',
  'weel',
  'montain',
  'proper',
  'turbo levo',
  's-works',
  'epic evo',
  'oxigen',
  'electric',
  'ancient',
  'normal',
  'kona',
  'cruiser',
  'omafiet',
  'proper',
  'bianchi',
  'orbea',
  'mtb',
  'frime',
  'road',
  'best',
  'chisel',
  'turbo',
  'weel',
  'montain',
  'proper',
  'turbo levo',
  's-works',
  'epic evo',
  'oxigen',
  'electric',
  'ancient',
  'normal',
  'kona',
  'cruiser',
  'omafiet',
  'proper'
];
