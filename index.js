var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj.key;
  return newObj;
}