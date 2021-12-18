let includeMethod = (dataArray, includeKeyProp) => {
  let firstObj = includeKeyProp[0];
  let firstObjKey = Object.keys(firstObj);

  let filtered = dataArray.filter(
    value => value[firstObjKey] === firstObj[firstObjKey]
  );

  return filtered;
}
export default includeMethod;