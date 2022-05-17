// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42){
        return someValue - 42

    } else if (someValue < 42){
        return 42 - someValue
    }

}

function distanceFromHqInFeet(someValue){
    return Math.abs(someValue - 42) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination){
    if ((Math.abs(destination - start) * 264) < 400)
        return 0
    else if ((Math.abs(destination - start) * 264) < 2000)
        return 2.56
    else if ((Math.abs(destination - start) * 264) < 2500)
        return 25
    else ((Math.abs(destination - start) * 264) > 2500)
        return 'cannot travel that far'
}