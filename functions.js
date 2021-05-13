const identity = function (value) {
  return value;
};

const indexOf = function (array, target) {
  //array = [1], target = 1
  var result = -1;

  each(array, function (item, index) {
    //item = 1
    if (item === target && result === -1) {
      result = index;
      //result = 1
    }
  });

  return result;
};

const each = function (collection, iterator) {
  if (collection instanceof Array) {
    for (let i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else if (collection instanceof Object) {
    for (let prop in collection) {
      iterator(collection[prop], prop, collection);
    }
  }
};

const map = function (collection, iterator) {
  var result = [];

  each(collection, function (element, index, array) {
    result.push(iterator(element));
  });

  return result;
};

const filter = function (collection, callback) {
  let solution = [];
  each(collection, function(item){
    if(callback(item)){
      solution.push(item)
    }
  })
  return solution;
};
//reject([1, 2, 3, 4, 5, 6], isEven);
const reject = (collection, callbackTest) =>{
  return filter(collection, item => !callbackTest(item));
};

const uniq = function (array) {
  let solution = [];
  each(array, (item) =>{
    if(indexOf(solution, item) === -1){
      solution.push(item)
    }
  })
  return solution;
};

const reduce = function (collection, iterator, accumulator) {
  if(accumulator === undefined){
    accumulator = collection.splice(0, 1)[0];
  }
  each(collection, (item) =>{
    accumulator = iterator(accumulator, item);
  })
  return accumulator;
};

module.exports = {
  filter,
  reject,
  uniq,
  reduce,
  map,
};
