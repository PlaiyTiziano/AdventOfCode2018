const fs = require("fs");

const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  });
}

module.exports.readFile = readFile;

