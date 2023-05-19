class HashTable {
  constructor(size = 53) {
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

  get() {}
}

let table = new HashTable();
table.set('hello world', 'goodbye!!');
table.set('dogs', 'are fine');
table.set('cats', 'are cool');
table.set('i love', 'pizza');
console.log(table);
