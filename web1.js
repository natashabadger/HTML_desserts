

var values = [1, 4, 2, 8, 9, 3, 5];

var mean = function(){
	var sum = 0;
	for(var i = 0; i < values.length; i++){
		sum += values[i];
	}
	var avrg = sum / values.length;
	return avrg;
}


var nOut = function(){
	console.log("hi, sydney");
	//window.alert(values);
}

var median = function(){
	var sorted = values.sort();
	var mid = sorted.length/2;
	return mid;
}

var mode = function (){
    var numMapping = {};
    var greatestFreq = 0;

    values.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) + 1;

        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number;
        }
    }
    return numMapping;
}
