function mapPath(type, final) {
    let type_max = {
        'd4': 5,
        'd6': 7,
        'd8': 9,
        'd10': 11,
        'd100': 10,
        'd12': 13,
        'd20': 21
    };

    let type_direction_max = {
        'd4': 3,
        'd6': 4,
        'd8': 3,
        'd10': 4,
        'd100': 4,
        'd12': 5,
        'd20': 3
    };

    let start;

    if(type === 'd100') {
        start = Math.floor(random(0,type_max[type]))*10;
    }else {
        start = Math.floor(random(1, type_max[type]));
    }

    let finish = final;
    let mapped = false;
    let path = [];
    let final_path = [start];

    console.log(start, finish);

    do {
        let direction = Math.floor(random(0, type_direction_max[type]));
        path.push(direction);
        let test_val = start;
        let test_path = [];
        for(let i = 0; i < path.length; i++) {
            console.log(type, test_val, path[i])
            test_val = dice_mappings[type][test_val][path[i]];
            test_path.push(test_val);
            //console.log(test_val);
        }
        console.log(test_path);

        if(test_val === finish) {
            console.log("path determined");
          
            for(let i = 0; i < test_path.length; i++) {
              final_path.push(test_path[i]);
            }
          
            mapped = true;
            break;
        }else {
            continue;
        }
    } while(mapped === false);

    console.log(path);
    return final_path;
}