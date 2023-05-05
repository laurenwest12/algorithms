// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const collectStrings = (obj) => {
  let arr = [];
  for (let key in obj) {
    console.log(obj[key]);
    if (typeof obj[key] === 'string') arr.push(obj[key]);
    if (typeof obj[key] === 'object')
      arr = arr.concat(collectStrings(obj[key]));
  }
  return arr;
};

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj));
