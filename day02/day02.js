const boxIds = [ "abcdef", "bababc", "abbcde", "abcccd", "aabcdd", "abcdee", "ababab", ];

const calculateChecksum = (ids) => {
  const combinations = { two: 0, three: 0, };

  ids.forEach((id) => {
    console.log(id);

    const count = {};

    for (let i = 0; i < id.length; i++) {
      if (!count[id[i]]) count[id[i]] = 1;
      else count[id[i]]++;
    };

    console.log(count);

    if (Object.values(count).includes(2)) combinations.two++;
    if (Object.values(count).includes(3)) combinations.three++;
  });

  return combinations.two * combinations.three;
}

console.log(calculateChecksum(boxIds));

