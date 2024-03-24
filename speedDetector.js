function speedDetector(speed) {
//declare variables for speed limit and km per point
    const speedLimit = 70;
    const kmPerPoint = 5;
// check if the speed is less than or equal to the speed limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint); //calculate points
        if (points >= 12) {
            console.log("License suspended"); //if points is greater than or equal to 12 print license suspended
        } else {
            console.log("Points:", points); //else print points
        }
    }

}

speedDetector(200)