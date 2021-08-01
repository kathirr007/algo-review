// O(n^2) time | O(n) space - where n is the number of coordinates
function rectangleMania(coords) {
  const coordsTable = getCoordsTable(coords);
  return getRectangleCount(coords, coordsTable);
}
function getCoordsTable(coords) {
  const coordsTable = {};
  for (const coord of coords) {
    const coordString = coordToString(coord);
    coordsTable[coordString] = true;
  }
  return coordsTable;
}
function getRectangleCount(coords, coordsTable) {
  let rectangleCount = 0;
  for (const [x1, y1] of coords) {
    for (const [x2, y2] of coords) {
      if (!isInUpperRight([x1, y1], [x2, y2])) continue;
      const upperCoordString = coordToString([x1, y2]);
      const rightCoordString = coordToString([x2, y1]);
      if (upperCoordString in coordsTable && rightCoordString in coordsTable)
        rectangleCount++;
    }
  }
  return rectangleCount;
}
function isInUpperRight(coord1, coord2) {
  const [x1, y1] = coord1;
  const [x2, y2] = coord2;
  return x2 > x1 && y2 > y1;
}
function coordToString(coord) {
  const [x, y] = coord;
  return `${x}-${y}`;
}
exports.rectangleMania = rectangleMania;
