$http({
    url: 'your/webservice',
    method: "POST",
    data: json, //this is your json data string
    headers: {
       'Content-type': 'application/json'
    },
    responseType: 'arraybuffer'
}).success(function (data, status, headers, config) {
    var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
    var objectUrl = URL.createObjectURL(blob);
    window.open(objectUrl);
}).error(function (data, status, headers, config) {
    //upload failed
});