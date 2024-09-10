export function refineRTEstyles(styleList: string[]) {
  return styleList.map((style) => {
    const parts = style.toLowerCase().split('_');
    return `${parts[parts.length - 2]}_${parts[parts.length - 1]}`;
  });
}

export function keepLastOccurrence(arr: string[]) {
  const map = new Map();

  arr.forEach((item) => {
    const [prefix, suffix] = item.split('_');
    map.set(prefix, item);
  });

  return Array.from(map.values());
}

export function isEmptyObject(obj: object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
