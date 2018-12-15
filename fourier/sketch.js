let time = 0;
let wave = [];

let slider;

function setup() {
  createCanvas(1000, 400);
  slider = createSlider(1, 10, 1);
}

function draw() {
  background(255);

  translate(200, 200);

  let x = 0;
  let y = 0;
  
  for (let i = 0; i < slider.value(); i++) {
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    let radius = 150 * (4 / (n * TWO_PI));

    x  += radius * cos(n * time);
    y  += radius * sin(n * time);
    
    stroke(0, 50);
    noFill();
    ellipse(prevx, prevy, 2 * radius);

    stroke(0);
    line(prevx, prevy, x, y);
    ellipse(x, y, 2);
  }

  wave.unshift(y);
  translate(200, 0);
  line(x-200, y, 0, wave[0]);

  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex (i, wave[i]);
  }
  endShape();


  time += 0.02;

  if (wave.length > 600) {
    wave.pop();
  }
}
