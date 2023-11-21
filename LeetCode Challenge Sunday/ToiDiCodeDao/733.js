// 733. Flood Fill
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const height = image.length;
  const width = image[0].length;

  fill(image, sr, sc, height, width, image[sr][sc], color);

  return image;
};

const fill = function (image, sr, sc, height, width, originalColor, color) {
  if (sr < 0 || sc < 0 || sr > height - 1 || sc > width - 1) {
    return;
  }

  if (image[sr][sc] !== originalColor || image[sr][sc] === color) {
    return;
  }

  image[sr][sc] = color;
  fill(image, sr - 1, sc, height, width, originalColor, color);
  fill(image, sr + 1, sc, height, width, originalColor, color);
  fill(image, sr, sc - 1, height, width, originalColor, color);
  fill(image, sr, sc + 1, height, width, originalColor, color);
};

console.time(`Testing:`);
console.timeEnd(`Testing:`);
