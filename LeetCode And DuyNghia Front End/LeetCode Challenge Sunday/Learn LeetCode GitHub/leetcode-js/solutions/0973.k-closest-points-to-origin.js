/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  points.sort((a, b) => {
    const da = dist(a);
    const db = dist(b);
    if (da > db) {
      return 1;
    } else if (da < db) {
      return -1;
    }

    return 0;
  });

  const out = [];
  for (let i = 0; i < K; i++) {
    out.push(points[i]);
  }
  return out;
};

var dist = function (a) {
  return a[0] ** 2 + a[1] ** 2;
};
