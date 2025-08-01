let timeouts = []; // Array to hold timeout IDs
let img; // Declare variable to hold the image
let imgsrc = window.location.origin + '/src/images/dog/scratch_dog.png'; // Default image source
let x = 270; // Initial x position (centered)
let y = 130; // Initial y position (centered)
let imgWidth = 110; // Initial width of the image
let imgHeight = 110; // Initial height of the image
let bgColor = '#FFFFFF'; // Initial background color (white)
let angle = 0; // Initial angle for sine wave movement
const amplitude = 50; // Amplitude of the sine wave
const frequency = 0.05; // Frequency of the sine wave
let isFullscreen = false; // Full screen

function preload() {
  // Load the image from the URL then move
  img = loadImage(imgsrc);
  document.getElementById('costume').src = imgsrc;
}

function kill() {
  // Clear all scheduled timeouts
  timeouts.forEach(timeout => clearTimeout(timeout));
  timeouts = []; // Clear the timeouts array
}

function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function loadImg(text) {
  // Loads the image from the URL
  img = loadImage(text);
}

function setup() {
  // Create a canvas
  let cnv = createCanvas(640, 360);
  cnv.parent('stage'); // Attach the canvas to the stage container
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
  // Moves the sprite by the x position
  x += num;

  // Set a timeout and store its ID in the timeouts array
  const timeoutId = setTimeout(betterDelay, 10);
  timeouts.push(timeoutId);
}

// Function for basic movement
function basicMoveY(num) {
  // Moves the sprite by the y position
  y += num;

  // Set a timeout and store its ID in the timeouts array
  const timeoutId = setTimeout(betterDelay, 10);
  timeouts.push(timeoutId);
}

function basicMoveBack() {
  // Old block!!
  x -= 5;

  if (x <= 0) {
    x = 0;
  }

  // Set a timeout and store its ID in the timeouts array
  const timeoutId = setTimeout(betterDelay, 10);
  timeouts.push(timeoutId);
}

function sineMove() {
  // Update the y position using sine wave movement
  y = 175 + amplitude * Math.sin(angle);

  // Increment the angle to create the oscillating motion
  angle += frequency;

  // Set a timeout and store its ID in the timeouts array
  const timeoutId = setTimeout(sineMove, 10);
  timeouts.push(timeoutId);
}

function sineMove2() {
  // Update the y position using sine wave movement
  x = 175 + amplitude * Math.sin(angle);

  // Increment the angle to create the oscillating motion
  angle += frequency;

  // Set a timeout and store its ID in the timeouts array
  const timeoutId = setTimeout(sineMove2, 10);
  timeouts.push(timeoutId);
}

function gotomouse() {
  x = mouseX;
  y = mouseY;

  // Set a timeout and store its ID in the timeouts array
  const timeoutId = setTimeout(betterDelay, 10);
  timeouts.push(timeoutId);
}

function center() {
  x = 235;
  y = 175;

  // Set a timeout and store its ID in the timeouts array
  const timeoutId = setTimeout(betterDelay, 10);
  timeouts.push(timeoutId);
}
function resetsize() {
  imgWidth = 72.54920959472656
  imgHeight = 96.2669830322265
  const timeoutId = setTimeout(betterDelay, 10);
  timeouts.push(timeoutId);
}
function setsize(size) {
  imgWidth = size
  imgHeight = size
  const timeoutId = setTimeout(betterDelay, 10);
  timeouts.push(timeoutId);
}

function gotox(X) {
  x = X;
}

function gotoy(Y) {
  y = Y;
}

function moveto(xory, int) {
  if (xory == "x") {
    gotox(int)
  } else {
    gotoy(int)
  }
}

function sizeOscillation() {
  // Calculate the oscillation size based on sine wave movement
  let sizeFactor = 1 + 0.2 * Math.sin(angle); // Adjust the 0.2 factor for desired amplitude

  // Update the image size based on the calculated factor
  imgWidth = 72.54920959472656 * sizeFactor; // Adjust the initial width (100) as needed
  imgHeight = 96.26698303222656 * sizeFactor; // Adjust the initial height (100) as needed

  // Increment the angle to create the oscillating motion
  angle += frequency;

  // Set a timeout and store its ID in the timeouts array
  const timeoutId = setTimeout(sizeOscillation, 10);
  timeouts.push(timeoutId);
}
