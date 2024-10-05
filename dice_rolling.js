var start = false;

var dice_mappings = {
    "d4": {
        '1': [2,3,4],
        '2': [3,4,1],
        '3': [4,1,2],
        '4': [1,2,3]
    },
    "d6": {
        '1': [2,3,4,5],
        '2': [3,4,6,1],
        '3': [5,6,1,2],
        '4': [5,6,1,2],
        '5': [6,1,3,4],
        '6': [2,3,4,5]
    },
    "d8": {
        '1': [3,7,4],
        '2': [4,8,3],
        '3': [5,1,2],
        '4': [6,2,1],
        '5': [7,3,8],
        '6': [8,4,7],
        '7': [1,5,6],
        '8': [2,6,5]
    },
    "d10": {
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': [],
        '9': [],
        '10': []
    },
    "d100": {
        '10': [],
        '20': [],
        '30': [],
        '40': [],
        '50': [],
        '60': [],
        '70': [],
        '80': [],
        '90': [],
        '0': []
    },
    "d12": {
        '1': [5,10,2,4,6],
        '2': [7,8,4,1,10],
        '3': [6,4,8,12,11],
        '4': [8,3,6,1,2],
        '5': [11,9,10,1,6],
        '6': [5,11,4,5,1],
        '7': [2,10,9,12,3],
        '8': [4,2,7,12,3],
        '9': [10,5,11,12,7],
        '10': [9,7,2,1,5],
        '11': [5,6,3,12,9],
        '12': [3,8,7,9,11]
    },
    "d20": {
        '1':[7,19,13],
        '2':[12,18,20],
        '3':[17,16,19],
        '4':[18,11,14],
        '5':[18,15,13],
        '6':[9,16,14],
        '7':[15,17,1],
        '8':[16,10,20],
        '9':[6,11,19],
        '10':[17,12,8],
        '11':[9,4,13],
        '12':[10,15,2],
        '13':[11,5,1],
        '14':[4,6,20],
        '15':[5,12,7],
        '16':[6,3,8],
        '17':[10,3,7],
        '18':[5,4,2],
        '19':[3,9,1],
        '20':[2,14,8],
    } 
};

var final_vals = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function rollDice() {
    for(let i = 0; i < final_vals.length; i++) {
        dice[i].remove();
    }

    run = 0;
    start = false;
    let types = determineDice();
    let types_val = [];
    let val = 0;

    for(let i = 0; i < types.length; i++) {
        if(types[i] === 'd4') {
            types_val.push(Math.floor(random(1,5)));
        }else if(types[i] === 'd6') {
            types_val.push(Math.floor(random(1,7)));
        }else if(types[i] === 'd8') {
            types_val.push(Math.floor(random(1,9)));
        }else if(types[i] === 'd10') {
            types_val.push(Math.floor(random(1,11)));
        }else if(types[i] === 'd100') {
            types_val.push(Math.floor(random(1,11))*10);
        }else if(types[i] === 'd12') {
            types_val.push(Math.floor(random(1,13)));
        }else if(types[i] === 'd20') {
            types_val.push(Math.floor(random(1,21)));
        }
    }

    console.log(types_val);

    for(let i = 0; i < types_val.length; i++) {
        val += types_val[i];
    }

    console.log(val);
    final_vals = types_val;

    start=true;
}