//create a function to add two position arrays
const addMoves = function (moveOne, moveTwo) {
  const position = [];
  for (let i = 0; i < Math.max(moveOne.length, moveTwo.length); i++) {
    position.push((moveOne[i] || 0) + (moveTwo[i] || 0));
  }
  return position;
}

//create the finalposition function
const finalPosition = function (moves) {
  const startingPoint = [0, 0];
  let location = "";
  let finalPoint = "";

  //loop through the given movement array
  for (const move of moves) {
    //console.log(move);
    
    //assign location coordinates
    if (move === "north") {
      location = [0, 1];
    }
    else if (move === "south") {
      location = [0, -1];
    }
    else if (move === "west") {
      location = [-1, 0];
    }
    else if (move === "east") {
      location = [1, 0];
    }

    //add the locations
    finalPoint = addMoves(finalPoint, location);
  }
  return finalPoint;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'] 
console.log(finalPosition(moves));