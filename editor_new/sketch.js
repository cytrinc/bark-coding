let img; // Declare variable to hold the image
let x = 235; // Initial x position (centered)
let y = 175; // Initial y position (centered)
let imgWidth = 72.54920959472656; // Initial width of the image
let imgHeight = 96.26698303222656; // Initial height of the image
let bgColor = '#FFFFFF'; // Initial background color (white)
let angle = 0; // Initial angle for sine wave movement
const amplitude = 50; // Amplitude of the sine wave
const frequency = 0.05; // Frequency of the sine wave
let isFullscreen = false;

function preload() {
  // Load the image from the URL then move
  img = loadImage('https://bark-coding.vercel.app/src/images/dog/idle.svg');
}

function toggleFullscreen() {
  console.log('uhhhhhhhhhh idk how to do this');
}

function loadImg(text) {
  // Loads the image from the URL
  img = loadImage(text);
}

function setup() {
  // Create a canvas
  let cnv = createCanvas(480, 360);
  cnv.parent('stage-container'); // Attach the canvas to the stage container
}

function goto(X, Y) {
  x = X;
  y = Y;
}

function draw() {
  // Set the background color
  background(bgColor);

  // Draw the image at the current position with specified width and height
  image(img, x, y, imgWidth, imgHeight);

  // Display text above the image
  textSize(20);
  textAlign(CENTER, BOTTOM);
  fill(0);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to change the background color
function changebg(color) {
  // Set the background color to the provided color
  bgColor = color;
  setTimeout(betterDelay, 10);
}

// This is not a block it is used to handle delays better
function betterDelay() {
  console.log('better delay used');
}

// Function for basic movement
function basicMoveX(num) {
  // Move stickman to the left by about +10 in the x-direction
  x += num;

  setTimeout(betterDelay, 10);
}

// Function for basic movement
function basicMoveY(num) {
  // Move stickman to the left by about +10 in the x-direction
  y += num;

  setTimeout(betterDelay, 10);
}

function basicMoveBack() {
  // Move stickman to the left by about -10 in the x-direction
  x -= 5;

  // Prevent stickman from going beyond canvas boundaries
  if (x <= 0) {
    x = 0;
  }
  setTimeout(betterDelay, 10);
}

function sineMove() {
  // Update the y position using sine wave movement
  y = 175 + amplitude * Math.sin(angle);

  // Increment the angle to create the oscillating motion
  angle += frequency;

  // Set a timeout to call the function again after the delay
  setTimeout(sineMove, 10);
}

function sineMove2() {
  // Update the y position using sine wave movement
  x = 175 + amplitude * Math.sin(angle);

  // Increment the angle to create the oscillating motion
  angle += frequency;

  // Set a timeout to call the function again after the delay
  setTimeout(sineMove2, 10);
}

function gotomouse() {
  x = mouseX;
  y = mouseY;
  setTimeout(betterDelay, 10);
}

function center() {
  x = 235;
  y = 175;
}

function sizeOscillation() {
  // Calculate the oscillation size based on sine wave movement
  let sizeFactor = 1 + 0.2 * Math.sin(angle); // Adjust the 0.2 factor for desired amplitude

  // Update the image size based on the calculated factor
  imgWidth = 72.54920959472656 * sizeFactor; // Adjust the initial width (100) as needed
  imgHeight = 96.26698303222656 * sizeFactor; // Adjust the initial height (100) as needed

  // Increment the angle to create the oscillating motion
  angle += frequency;

  // Set a timeout to call the function again after the delay
  setTimeout(sizeOscillation, 10);
}
