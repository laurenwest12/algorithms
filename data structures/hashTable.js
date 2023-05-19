class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); ++i) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hash = this._hash(key);
    const current = this.keyMap[hash];
    if (!current) this.keyMap[hash] = [];
    this.keyMap[hash].push([key, value]);
  }

  get(key) {
    const hash = this._hash(key);
    const hashArray = this.keyMap[hash];

    if (!hashArray) return undefined;

    for (let i = 0; i < hashArray.length; ++i) {
      let pair = hashArray[i];
      if (pair[0] === key) return pair[1];
    }

    return undefined;
  }
}

let table = new HashTable();
table.set('cyan', '#00FFFF');
table.set('red', '#FF0000');
table.set('pink', '#FFC0CB');
table.set('lavender', '#E6E6FA');
const k1 = table.get('lavender');
const k2 = table.get('salmon');
const k3 = table.get('periwinkle');
const k4 = table.get('red');

console.log(k1, k2, k3, k4);
