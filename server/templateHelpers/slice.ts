const slice = (list: any[], from: number, to: number): any[] => {
  if (!list) {
    return [];
  }

  return list.slice(from, to);
};

export default slice;
