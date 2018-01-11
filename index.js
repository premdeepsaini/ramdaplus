exports.sum = function(array, values) {
  if(values) {
    return values.map((value) => {
      return array.reduce((acc, currentObject) => {
        return acc + currentObject[value];
      }, 0)
    })
  }
  return array.reduce((acc, value) => {
    return acc + value;
  }, 0)
}

// TODO: correct names
exports.filter = function(array, func) {
  if(!Array.isArray(array)) {
    const values = Object.values(array)
    const keys = Object.keys(array)
    return values.reduce(( acc, value, index ) => {
      if(func(value)) {
        acc.push({ [keys[index]]: value })
      }
      return acc;
    }, [])
  }
  return array.filter(func);
}

// TODO: correct names
exports.find = function(array, value, key) {
  return array.find(( object ) => {
    if(typeof( object ) === "object") {
      return object[key] === value;
    }
    return object === value;
  })
}
