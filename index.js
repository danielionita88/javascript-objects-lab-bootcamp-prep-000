var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function updateObjectWithKeyAndValue(object, key, value) {
  object.assign({}, obj{[key]:value})
}