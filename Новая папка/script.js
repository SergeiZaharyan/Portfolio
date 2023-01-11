'use strict'

function betterThanAverage(classPoints, yourPoints) {
    const reb = classPoints.map(points =>{
      return points
    });
  const res = classPoints.reduce((acc, rec) => acc + rec) / classPoints.length;
    
    console.log(yourPoints);

    return res > yourPoints ? false : true;
  }
   betterThanAverage([10, 13, 70, 3], 46);