const readFile = require("../fileReader.js").readFile;

const calculateChecksum = async (filename) => {
  const combinations = { two: 0, three: 0 };

  try {
    let ids = await readFile(filename);
    ids = ids.toString().split("\n");

    // console.log(data);

    ids.forEach((id) => {
      // console.log(id);
      const count = {};

      for (let i = 0; i < id.length; i++) {
        if (!count[id[i]]) count[id[i]] = 1;
        else count[id[i]]++;
      }

      objValues = Object.values(count);

      if (objValues.includes(2)) combinations.two++;
      if (objValues.includes(3)) combinations.three++;
    });

    console.log(combinations.two * combinations.three);

    return combinations.two * combinations.three;

  } catch (err) {
    console.error(err);
  }
}

calculateChecksum("./day02.input");

