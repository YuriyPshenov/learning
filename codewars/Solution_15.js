function squareSum(numbers){
    return numbers.reduce(function (sum, current) {
        return sum + Math.pow(current, 2);
    }, 0);
}