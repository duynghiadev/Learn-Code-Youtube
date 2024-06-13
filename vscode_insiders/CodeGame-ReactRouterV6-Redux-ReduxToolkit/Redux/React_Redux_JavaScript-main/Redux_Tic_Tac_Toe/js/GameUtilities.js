export function findRandomSquare(board) {
  // Create a new array that contains all
  // unoccupied board indexes
  const remainingPlaces = board.reduce(
    (openPlaces, nextPlace, index) => {
      return !nextPlace
        ? [...openPlaces, index]
        : openPlaces;
    },
    []
  );
  if (remainingPlaces.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(
    Math.random() * remainingPlaces.length
  );
  return remainingPlaces[randomIndex];
}
