function distanceFromHqInBlocks(blocks) {
    return Math.abs(42 - blocks);
};

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
};

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, blocks) {
    let distance = Math.abs(start - blocks) * 264;   
    if(distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}