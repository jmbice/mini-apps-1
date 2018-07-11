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
  var uniqueId = 0;

  var getTableHeader = function(obj) {
    var first = [];
    first.push('Unique Id');
    var allKeys = Object.keys(obj);
    for (var i = 0; i < allKeys.length; i++) {
      if (allKeys[i] !== 'children') {
        first.push(allKeys[i]);
      }
    }
    return first;
  }

  all.push(getTableHeader(json).join(','));

  var recursivelyParse = function (obj) {
    var innerArray = [];
    for (key in obj) {
      if (key !== 'children') {
        innerArray.push(obj[key]);
      } else if (key === 'children' && obj[key].length > 0) {
        for (var j = 0; j < obj[key].length; j++){
          recursivelyParse(obj[key][j]);
        }
      }
    }
    all.push(innerArray.join(','));
  }

  recursivelyParse(json);

  return all.join(' <br />');
}

module.exports = {
  addData,
  getLatest
}
