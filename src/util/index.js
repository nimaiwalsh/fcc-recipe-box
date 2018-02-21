export function largestObjectKeyNumber(obj) {
  let maxKey = Object.keys(obj)
  maxKey = maxKey.map((n) => parseInt(n))
  return Math.max(...maxKey);
}

