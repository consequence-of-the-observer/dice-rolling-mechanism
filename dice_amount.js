var dice_amount = {
    "d4": 0,
    "d6": 0,
    "d8": 0,
    "d10": 0,
    "d100": 0,
    "d12": 0,
    "d20": 0
};

function increaseAmount(type) {
    dice_amount[type] += 1;
    updateDice(type);
}

function decreaseAmount(type) {
    if(dice_amount[type] <= 0) {
        dice_amount[type] = 0;
        console.log("can't go lower than zero");
    }else {
        dice_amount[type] -= 1;
        updateDice(type);
    }
}

function updateDice(type) {
    document.getElementById(type+"_amount").innerText = dice_amount[type];
    console.log(dice_amount[type]);
}

function determineDice() {
    let array = [];
    for(let i in dice_amount) {
        for(let j = 0; j < dice_amount[i]; j++) {
            array.push(i);
        }
    }

    console.log(array);
    return array;
}