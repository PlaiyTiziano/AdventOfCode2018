const readFile = require("../fileReader.js").readFile;

const grid = [];

const calculateDuplicateClaims = async (filename) => {
  let squareInches = 0;
  for (let i = 0; i < 1000; i++) {
    grid[i] = new Array(1000).fill(undefined);
  }

  try {
    let zones = await readFile(filename);
    zones = zones.toString().split("\n");
    zones.pop();

    zones.forEach((zone) => {
      zone = zone.split(" ");
      const margins = zone[2].split(",");
      const dimensions = zone[3].split("x");

      const zoneObj = {
        id: parseInt(zone[0].substr(1), 10),
        left: parseInt(margins[0], 10),
        top: parseInt(margins[1].substr(0, margins[1].length - 1), 10),
        width: parseInt(dimensions[0], 10),
        height: parseInt(dimensions[1], 10),
      };

      for (let i = zoneObj.top; i < zoneObj.top + zoneObj.height; i++) {
        for (let j = zoneObj.left; j < zoneObj.left + zoneObj.width; j++) {
          if (!grid[i][j]) {
            grid[i][j] = zoneObj.id;
          } else if (typeof grid[i][j] === "number") {
            squareInches++;
            grid[i][j] = true;
          }
        };
      };
    });

    console.log(squareInches)

    // console.log(grid)
  } catch (err) {
    console.error(err);
  }

}

calculateDuplicateClaims("./day03.input");

