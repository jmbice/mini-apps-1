var data = [];

var addData = function(json, callback) {
  if (!json) {
    callback('No data provided!');
  } else {
    data.push(parseToCSV(json));
    callback(null, 'Data successfully added');
  }
};

var getLatest = function(callback) {
  if (data.length === 0) {
    callback('No data available');
  } else {
    var latest = JSON.stringify(data[data.length - 1]);
    console.log(latest);
    callback(null, latest);
  }
}

var parseToCSV = function(json) {
  var all = [];
  var uniqueId = 1;

  var getTableHeader = function(obj) {
    var first = [];
    first.push('Unique_ID');
    var allKeys = Object.keys(obj);
    for (var i = 0; i < allKeys.length; i++) {
      if (allKeys[i] !== 'children') {
        first.push(allKeys[i]);
      }
    }
    first.push('Parent_ID');
    return first.join(', &nbsp;');
  }

  var recursivelyParse = function (obj, parentID) {
    var innerArray = [];
    innerArray.push(uniqueId)
    uniqueId++;
    for (key in obj) {
      if (key !== 'children') {
        innerArray.push(obj[key]);
      } else if (key === 'children' && obj[key].length > 0) {
        for (var j = 0; j < obj[key].length; j++){
          recursivelyParse(obj[key][j], innerArray[0]);
        }
      }
    }
    innerArray.push(parentID);
    all.push(innerArray);
  }

  var sortById = function(totalArray) {
    var tableHeader = totalArray[0];
    var tableRows = totalArray.slice(1);
    tableRows.sort((a, b) => {
      return a[0] - b[0];
    });

    console.log(tableRows);
    var sortedArray = [];
    sortedArray.push(tableHeader);
    tableRows.forEach((e) => {
      sortedArray.push(e.join(', &nbsp;'));
    });

    return sortedArray;
  };

  all.push(getTableHeader(json));
  recursivelyParse(json);
  var sorty = sortById(all);
  return sorty.join('<br/>');
}

module.exports = {
  addData,
  getLatest
}
