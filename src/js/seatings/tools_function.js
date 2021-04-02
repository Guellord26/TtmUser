
function isObject(object) {
    return object != null && typeof object === 'object';
}


export function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2) )||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

export function isUserPlace (array = [], element){
    let value = false
    for (const items of array) {
        if((element.user !== items.user) && (element.id === items.id) && (element.block === items.block)){
            return  true
        }
    }
    return value
}


export function isInArray(array = [], element){
    let value = false
    for (const items of array) {
        if (deepEqual(items, element)) {
            return true
        }
        
    }
    return value
}