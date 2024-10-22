const analyzeArray = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return "input must be an array";
  }

  const total = array.reduce((sum, value) => sum + value, 0);
  const average = total / array.length;

  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average: average,
    min: min,
    max: max,
    length: array.length,
  };
};

export { analyzeArray };
