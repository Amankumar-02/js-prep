function generatePyramid(n) {
  if (
    typeof n !== "number" ||
    !Number.isFinite(n) ||
    !Number.isInteger(n) ||
    n < 0
  ) {
    return false;
  }

  const pyramid = [];
  const width = 2 * n - 1;

  for (let row = 0; row < n; row++) {
    let line = "";

    const stars = 2 * row + 1;
    const spaces = (width - stars) / 2;

    for (let i = 0; i < spaces; i++) {
      line += " ";
    }

    for (let i = 0; i < stars; i++) {
      line += "*";
    }

    for (let i = 0; i < spaces; i++) {
      line += " ";
    }

    pyramid.push(line);
  }

  return pyramid;

}
console.log(generatePyramid(9));