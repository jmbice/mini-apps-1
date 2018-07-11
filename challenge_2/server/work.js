var data = [];

var addData = function(json, callback) {
  if (!json) {
    callback('No data provided!');
  } else {
    data.push(json);
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
  var all;

  var getTableHeader = function(obj) {
    var first = [];
    var allKeys = Object.keys(obj);
    for (var i = 0; i < allKeys.length; i++) {
      if (allKeys[i] !== 'children') {
        first.push(allKeys[i]);
      }
    }
    return first;
  }

  all = getTableHeader(json);

  var recursivelyParse(iterable) {
    if(Array.isArray(iterable)) {
      //it's an array
    } else {
      //it's an object
      for (keys in obj) {
        
      }
    }
  }


}

module.exports = {
  addData,
  getLatest
}
