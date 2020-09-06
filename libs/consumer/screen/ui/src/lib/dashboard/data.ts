export const plotData = [...new Array(31)].map((_, index) => ({
  date: index + 1 < 10 ? `0${index + 1}` : index + 1,
  value: (Math.random() * 100).toFixed(2),
}));
