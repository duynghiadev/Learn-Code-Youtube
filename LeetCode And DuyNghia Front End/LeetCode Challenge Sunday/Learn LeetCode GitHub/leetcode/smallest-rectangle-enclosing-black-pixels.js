function findMinArea(image, x, y) {
  if (image == null || image.length === 0 || image[0].length === 0) {
    return 0;
  }

  const width = image[0].length;
  const height = image.length;

  const left = findLeft(image, 0, y);
  const right = findRight(image, x, width - 1);
  const top = findTop(image, 0, x);
  const bottom = findBottom(image, y, height - 1);

  return (right - left + 1) * (bottom - top + 1);
}

function isEmptyColumn(image, column) {
  for (i = 0; i < image.length; i++) {
    if (image[i][column] !== 0) {
      return false;
    }
  }
  return true;
}

function isEmptyRow(image, row) {
  for (i = 0; i < image[row].length; i++) {
    if (image[row][i] !== 0) {
      return false;
    }
  }
  return true;
}

function findLeft(image, start, end) {
  let mid;
  while (start < end) {
    mid = Math.ceil((start + end) / 2);
    if (isEmptyColumn(image, mid)) {
      start = mid;
    } else {
      end = mid;
    }
  }

  return mid;
}
function findRight(image, start, end) {
  let mid;
  while (start < end) {
    mid = Math.ceil((start + end) / 2);
    if (isEmptyColumn(image, mid)) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return mid;
}
function findTop(image, start, end) {
  let mid;

  while (start < end) {
    mid = Math.ceil((start + end) / 2);

    if (isEmptyRow(image, mid)) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return mid;
}
function findBottom(image, start, end) {
  let mid;
  while (start < end) {
    mid = Math.ceil((start + end) / 2);

    if (isEmptyRow(image, mid)) {
      bottom = mid;
    } else {
      top = mid;
    }
  }
  return mid;
}

console.time(`Testing:`);
console.timeEnd(`Testing:`);
