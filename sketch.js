//Samriddho will change the world...
//this is just the beginning.

var song;
var amp;
var button;

var volhistory = [];

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('KOL TRAFFIC.mp3');
}

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(255);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(0);
  noFill();
  t = 10;

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 8000; i++) {
    var r = map(volhistory[i], 0, 1, 20, 250);
    //var r = map(volhistory[i], 0, 1, t, 400);
    
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
    //t = t + 0.01;
  }
  endShape();

  //if (volhistory.length > 360) {
  //  volhistory.splice(0, 1);
  }
  //ellipse(100, 100, 200, vol * 200);
//}