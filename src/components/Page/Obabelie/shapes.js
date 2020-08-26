// white circle
const shape1 = document.createElement('canvas');
shape1.width = 500;
shape1.height = 500;

const context1 = shape1.getContext('2d');
context1.fillStyle = "rgba(255,255,255,.5)";
context1.beginPath();
context1.arc(250, 250, 200, 0, 2 * Math.PI);
context1.fill();

// black trinagle
const shape2 = document.createElement('canvas');
shape2.width = 500;
shape2.height = 500;

const context2 = shape2.getContext('2d');
context2.fillStyle = "rgba(0,0,0,0.75)";
context2.beginPath();
context2.moveTo(250, 75);
context2.lineTo(445, 415);
context2.lineTo(55, 415);
context2.fill();

// black circle
const shape3 = document.createElement('canvas');
shape3.width = 500;
shape3.height = 500;

const context3 = shape3.getContext('2d');
context3.fillStyle = "rgba(255,255,255,.5)";
context3.beginPath();
context3.arc(250, 250, 200, 0, 2 * Math.PI);
context3.fill();

// white trinagle
const shape4 = document.createElement('canvas');
shape4.width = 500;
shape4.height = 500;

const context4 = shape4.getContext('2d');
context4.fillStyle = "rgba(0,0,0,0.75)";
context4.beginPath();
context4.moveTo(250, 75);
context4.lineTo(445, 415);
context4.lineTo(55, 415);
context4.fill();

export default [
  [shape1, 'rgba(0,0,0,0.25)'],
  [shape2, 'rgba(255,255,255,0.25)'],
  [shape3, 'rgba(0,0,0,0.25)'],
  [shape4, 'rgba(255,255,255,0.25)'],
];
