const naiveStringSearch = (str, tgt) => {
  let count = 0;

  for (let i = 0; i < str.length - (tgt.length - 1); ++i) {
    for (let j = 0; j < tgt.length; ++j) {
      if (tgt[j] !== str[i + j]) break;
      if (j === tgt.length - 1) count++;
    }
  }
  return count;
};

console.log(naiveStringSearch('catfdscatfdscatjcat', 'cat'));
