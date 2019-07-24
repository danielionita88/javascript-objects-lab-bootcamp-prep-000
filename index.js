var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function updateObjectWithKeyAndValues(obj, key, value) {
 return Object.assign({}, obj, { [key]: value});

}

function deleteFromObjectByKey(obj, key) {
  delete obj.key;
  return obj;
}