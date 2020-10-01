exports.min = function min(array) {
    if (array === undefined || array[0] === undefined) return 0;
    return Math.min.apply(Math, array);
}

exports.max = function max(array) {
    if (array === undefined || array[0] === undefined) return 0;
    return Math.max.apply(Math, array);
}

exports.avg = function avg(array) {
    if (array === undefined || array[0] === undefined) return 0;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
