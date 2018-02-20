class Sorter {
  constructor() {
    this.arr=[];
    this.len=0;
    this.comp=function(a,b) {
      return a-b;}
  }

  add(element) {
    this.arr.push(element);
    this.len++;
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.len;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var arrForSort=[];
    indices.sort((a,b)=>a-b);
    for (var i=0; i<indices.length; i++) {
      arrForSort.push(this.arr[indices[i]]);
    }
   arrForSort=arrForSort.sort(this.comp);
    for (var j=0; j<indices.length; j++) {
      this.arr[indices[j]]=arrForSort[j];
    }
  return this;
  }
  
  setComparator(compareFunction) {
    this.comp=compareFunction;
  }
}

module.exports = Sorter;