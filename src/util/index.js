//Return the highest key value in the passed Object
export function largestObjectKeyNumber(obj) {
  let maxKey = Object.keys(obj)
  maxKey = maxKey.map((n) => parseInt(n, 10));
  return Math.max(...maxKey);
}

