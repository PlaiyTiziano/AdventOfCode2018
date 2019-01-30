const readFile = require("../fileReader.js").readFile;

const calculateFrequency = async (filename) => {
  try { 
    const data = await readFile(filename);

    let frequencies = data.toString().split("\n");
    console.log(frequencies)

    const resultingFrequency = frequencies.reduce((acc, curr) => {
      return acc + (curr * 1);
    }, 0);

    console.log(resultingFrequency);
    return resultingFrequency;
  } catch (err) {
    console.error(err);
  }
}

calculateFrequency("./day01.input");
