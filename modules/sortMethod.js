const sortBy = (resultArr, sort_by) => {

  let compare = (prop) => {
    return (a, b) => {
      let value1 = a[prop];
      let value2 = b[prop];
      return value1 - value2;
    }
  }

  return resultArr.sort(compare(sort_by));
}

export default sortBy;