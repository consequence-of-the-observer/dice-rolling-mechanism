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
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': []
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
        '1': [],
        '2': [],
        '3': [],
        '4': [],
        '5': [],
        '6': [],
        '7': [],
        '8': [],
        '9': [],
        '10': [],
        '11': [],
        '12': []
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

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function rollDice() {
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
}