export function order(object, array) {
  const sortedObject1 = array.reduce((acc, item) => {
    if (object[item]) acc[item] = object[item];
    return acc;
  }, {})
  return sortedObject1;
}

function sort(object, array) {
  let objectKeys = Object.keys(object);
  let tempKeys = [];
  objectKeys.forEach((key) => {
    if (!Array.from(array).includes(key)) {
      tempKeys.push(key);
    }});
  let tempKeysSorted = tempKeys.sort();

  const sortedObject2 = tempKeysSorted.reduce((acc, key) => {
      acc[key] = object[key];
      return acc;
    },{});

  return sortedObject2
}

export default function orderByProps(object, array) {
  let orderedByArray = order(object, array);
  let sortedByAlphabet = sort(object, array);
  let merged = {...orderedByArray, ...sortedByAlphabet};
  return merged
}
