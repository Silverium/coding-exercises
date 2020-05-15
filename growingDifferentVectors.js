// toptal task
// Given N points in a plain, how many points with different tags could be included inside the circle?

export const solution = (tags, X, Y) => {
  if (tags.length < 2) return tags.length;
  const vectors = [...tags].map((tag, i) => ({
    value: Math.pow(X[i], 2) + Math.pow(Y[i], 2),
    tag,
  }));
  // List of vector magnitudes, from smaller to bigger
  vectors.sort((a, b) => a.value - b.value);
  const tagsUsed = new Set([vectors[0].tag]);
  let result = 1;
  for (let i = 1; i < vectors.length; i += 1) {
    const element = vectors[i];
    const last = vectors[i - 1];
    if (element.value === last.value && element.tag === last.tag)
      return result - 1;
    if (tagsUsed.has(element.tag)) return result;
    tagsUsed.add(element.tag);
    result += 1;
  }

  return result;
};
