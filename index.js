var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValues(object, key, value) {
 var newObj = object.assign({}, obj,{[key]:value});
 return newObj;
}

function deleteFromObjectByKey(object, key) {
  var newObj = object.assign({}, object);
  delete newObj.key;
  return newObj;
}