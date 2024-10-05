var run = 0;

var dice_path;
var dice;
var dice_state;
var dice_type;
  
function setup() {
  createCanvas(400,400);
  
  let area = new Sprite(200,200,300);
  area.color = 'indigo';

  area.collider = 'n';

}  

function draw() {
  background("purple");

  if(start === true) {
    if(run === 0) {
        run = 1;

        for(let j = 0; j < run; j++) {
            dice_path = [];
            dice = [];
            dice_state = [];
            dice_type = [];

            console.log(dice_path.length);

            dice_path.length = final_vals.length;
            dice.length = final_vals.length;
            dice_state.length = final_vals.length;
            dice_type.length = final_vals.length;
            dice_type = determineDice();

            for(let i = 0; i < final_vals.length; i++) {
                dice_path[i] = mapPath(dice_type[i], final_vals[i]);
                dice_state[i] = 0;
                dice[i] = new Sprite(200,200,40,40);
                dice[i].text = dice_path[i][dice_state[i]];
            }
        }
    }
    dice.text = dice_path[dice_state];
  
    if(frameCount % 4 === 0) {
        for(let i = 0; i < final_vals.length; i++) {
            dice_state[i] += 1;
            if(dice_state[i] === dice_path[i].length) {
                dice_state[i] = dice_path[i].length-1;
            }else {
                dice[i].x += Math.floor(random(-5, 5));
                dice[i].y += Math.floor(random(-5, 5));
                dice[i].rotation += Math.floor(random(-10, 10));
            }

            dice[i].text = dice_path[i][dice_state[i]];
        }
    }
  }else {
    for(let i = 0; i < final_vals.length; i++) {
        dice[i].remove();
    }
  }
}