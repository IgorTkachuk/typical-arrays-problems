exports.min = function min(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((min, el) => {
        if (el < min) return el;
        return min;
    });
};

exports.max = function max(array) {
    if (!array || array.length === 0) return 0;
    return array.reduce((max, el) => {
        if (el > max) return el;
        return max;
    });
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) return 0;
    return (
        array.reduce((sum, el) => {
            return sum + el;
        }) / array.length
    );
};
