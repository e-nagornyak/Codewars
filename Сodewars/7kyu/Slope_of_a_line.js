function getSlope(point1, point2) {
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  if (x1 === x2 || (x1 === x2 && y1 === y2)) {
    return null;
  }

  const slope = (y2 - y1) / (x2 - x1);
  return slope;
}
