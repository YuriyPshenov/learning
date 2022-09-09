// Number

// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
// console.log(pow)
// console.log(num)
// console.log(float)
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53',Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIX_VALUE', Number.MIX_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('1 / 0', 1 / 0)
// console.log(Number.NaN) // Not a Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(isNaN(weird))
// console.log(isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))
//
// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
//
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)


// console.log(0.4 + 0.2) // 0.6
//
// // console.log((2 / 5 + 1 / 5))
//
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))


// 2 BigInt

// console.log(900719925474099199999999999999999n - 90071992547409919999999n)
// console.log(-900719925474099199999999999999999.2222n - 90071992547409919999999n) // err


// console.log(10n - 4)
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
//
//
// console.log(5n / 2n)

// 3 Math

// console.log(Math.E)
// console.log(Math.PI)
//
//
// console.log(Math.sqrt(25))
// console.log(Math.pow(3, 4))
// console.log(Math.abs(-42))
//
// console.log(Math.max(42, 12, 23, 11, 422))
//
// console.log(Math.floor(4.9))
//
// console.log(Math.ceil(4.9))




function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {

        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}


