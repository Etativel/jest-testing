const calculator = () => {
  const add = (a, b) => {
    return a + b;
  };

  const subtract = (a, b) => {
    return a - b;
  };

  const divide = (a, b) => {
    if (b === 0) return "Cannot divide by 0";
    return a / b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
  };
};

export { calculator };
