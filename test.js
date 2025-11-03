const { mergeTimeRanges } = require('./mergeTimeRanges');

const ranges = [
  [1000, 2000],
  [2500, 3000],
  [3000, 4000],
  [6000, 7000]
];

const threshold = 600;

console.log('Merged Ranges:', mergeTimeRanges(ranges, threshold));
