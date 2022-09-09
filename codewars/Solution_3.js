
function bmi(weight, height) {
    const bmiResult = weight / (height * height)
    if (bmiResult <= 18.5) {
        return "Underweight"
    } else if (bmiResult <= 25.0) {
        return "Normal"
    } else if (bmiResult <= 30.0){
        return "Overweight"
    } else {
        return "Obese"
    }
};

