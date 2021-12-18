let excludeMethod = (dataArray, excludeKeyProp) => {
  let firstObj = excludeKeyProp[0];
  let firstObjKey = Object.keys(firstObj);
  
  let filtered = dataArray.filter(
    value => value[firstObjKey] !== firstObj[firstObjKey]
  );

  return filtered;
}

export default excludeMethod;