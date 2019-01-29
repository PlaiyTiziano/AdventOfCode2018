const test = "+1, +1, +1";
const test1 = "+1, +1, -2";
const test2 = "-1, -2, -3";

const calculateFrequency = (testCase) => {
  let resultingFrequency = 0;

  const frequencies = testCase.split(", ");

  frequencies.forEach(frequency => {
    //  Could also use ParseInt(frequency, 10); This however is worse
    //  performance wise then the method used below.
    frequency = frequency * 1;
    resultingFrequency += frequency;
  });

  return resultingFrequency;
}

console.log(calculateFrequency(test2))
