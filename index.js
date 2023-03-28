// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);
}

const returnLastTwoDrivers = function (array) {
    return array.slice(array.length-2, array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    if(multiplier==2) {
        return fareDoubler;
    }
    else if (multiplier==3){
        return fareTripler;
    }
    else if (multiplier == 5){
        return fareQuintupler;
    }
}

const fareDoubler = function (fare) {
    return fare*2;
}

const fareTripler = function (fare) {
    return fare*3;
}

const fareQuintupler = function (fare) {
    return fare*5;
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    if(fn == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else if(fn == returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}

