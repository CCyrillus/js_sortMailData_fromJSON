import dataJSON from "./modules/data.json";
import excludeMethod from "./modules/excludeMethod.js";
import includeMethod from "./modules/includeMethod.js";
import toJson from "./modules/toJson.js";
import sortBy from "./modules/sortMethod.js";



const dataHandler = (data) => {
  let resultJson;
  let dataArray = data['data'];
  const condition = data['condition'];

  
  for (let key in condition) {
    if (key === 'exclude') {
      resultJson = excludeMethod(dataArray, condition['exclude']);
    }
    if (key === 'include') {
      resultJson = includeMethod(dataArray, condition['include']);
    }
    if (key === 'sort_by') {
      resultJson = sortBy(resultJson, data['condition']['sort_by']);
    }
  }


  console.log(resultJson);
  
  return toJson(resultJson);
}

console.log(dataHandler(dataJSON)); // npm start
