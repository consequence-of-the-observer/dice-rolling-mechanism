var d20 = {
    1:[7,19,13],
    2:[12,18,20],
    3:[17,16,19],
    4:[18,11,14],
    5:[18,15,13],
    6:[9,16,14],
    7:[15,17,1],
    8:[16,10,20],
    9:[6,11,19],
    10:[17,12,8],
    11:[9,4,13],
    12:[10,15,2],
    13:[11,5,1],
    14:[4,6,20],
    15:[5,12,7],
    16:[6,3,8],
    17:[10,3,7],
    18:[5,4,2],
    19:[3,9,1],
    20:[2,14,8],
}
  
var dice_path;
var dice;
var dice_state = 0;
  
function setup() {
  createCanvas(400,400);
  
  allSprites.collider ='n';
  
  let area = new Sprite(200,200,300);
  area.color = 'indigo';
  
  dice_path = map_path();
  
  console.log(dice_path);
  
  dice = new Sprite(200,200,50,50);
}  

function draw() {
  background("purple");
  
  dice.text = dice_path[dice_state];
  
  if(frameCount % 4 === 0) {
    dice_state += 1;
    if(dice_state === dice_path.length) {
      dice_state = dice_path.length-1;
    }else {
      dice.x += Math.floor(random(-5, 5));
      dice.y += Math.floor(random(-5, 5));
      dice.rotation += Math.floor(random(-10, 10));
    }
  }
}


function map_path() {
  let mapped = false;
  let start = Math.floor(random(1,21));
  let result = Math.floor(random(1,21));
  let path = [];
  let final_path = [start];

  console.log(start, result);

  do {
      let direction = Math.floor(random(0,3));
      path.push(direction);
      let test_val = start;
      let test_path = [];
      for(let i = 0; i < path.length; i++) {
          test_val = d20[test_val][path[i]];
          test_path.push(test_val);
          //console.log(test_val);
      }
      console.log(test_path);
      if(test_val === result) {
          console.log("path determined");
        
          for(let i = 0; i < test_path.length; i++) {
            final_path.push(test_path[i]);
          }
        
          mapped = true;
          break;
      }else {
          continue;
      }
  } while(mapped === false)

  console.log(path);
  return final_path;
}