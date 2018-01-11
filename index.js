// TODO: add a feature a add specific values in array of objects
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
