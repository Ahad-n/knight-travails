// graph is details.

// pointers are not necessary because edges can be calculated
// the graph is  a collection of nodes pointing to 8 possible moves,
// it is possible to traverse through the graph and find through DFS or DF
// the search algoritm focuses on finding the target cooridnate by listing and traversing through the graph just like BST;

const calculateMoves = function (coordiante) {
  let x = coordiante[0];
  let y = coordiante[1];
  let moves = [];

  let newY;
  // forward
  if (y - 2 >= 0) {
    newY = y - 2;
    if (x - 1 >= 0) moves.push([x - 1, newY]);
    if (x + 1 <= 7) moves.push([x + 1, newY]);
  }
  if (y - 1 >= 0) {
    newY = y - 1;
    if (x - 2 >= 0) moves.push([x - 2, newY]);
    if (x + 2 <= 7) moves.push([x + 2, newY]);
  }

  // backward
  if (y + 2 <= 7) {
    newY = y + 2;
    if (x - 1 >= 0) moves.push([x - 1, newY]);
    if (x + 1 <= 7) moves.push([x + 1, newY]);
  }
  if (y + 1 <= 7) {
    newY = y + 1;
    if (x - 2 >= 0) moves.push([x - 2, newY]);
    if (x + 2 <= 7) moves.push([x + 2, newY]);
  }

  return moves;
};

function isSame(move, destination) {
  if (move[0] === destination[0] && move[1] === destination[1]) return true;
  return false;
}

function contains(moves, target) {
  for (let i = 0; i < moves.length; i++) {
    if (isSame(moves[i], target)) return true;
  }
  return false;
}

const knightMoves = function (origin, destination) {
  let path = [destination];

  const findPath = function (origin, destination) {
    // basecase
    if (isSame(origin, destination)) {
      return;
    }
    let queue = [];
    queue.push(origin);

    while (queue.length) {
      const position = queue.shift();
      const moves = calculateMoves(position);

      if (contains(moves, destination)) {
        path.push(position);
        findPath(origin, position);
        return;
      }
      queue = [...queue, ...moves];
    }
  };

  findPath(origin, destination);
  path = path.reverse();

  return path;
};

console.log(knightMoves([3, 3], [4, 3]));
