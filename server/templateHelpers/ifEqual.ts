const ifEqual = (compare: any, to: any, context: any) => {
  if (compare === to) {
    return context.fn();
  }

  return context.inverse();
};

export default ifEqual;
