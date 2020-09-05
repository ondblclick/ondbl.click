import hand1 from './1.svg';
import hand2 from './2.svg';

const createCanvas = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 500;

  return canvas;
}

const createCircle = (fillStyle) => {
  const canvas = createCanvas();
  const context = canvas.getContext('2d');

  context.fillStyle = fillStyle;
  context.beginPath();
  context.arc(250, 250, 200, 0, 2 * Math.PI);
  context.fill();

  return canvas;
}

const createTrinagle = (fillStyle) => {
  const canvas = createCanvas();
  const context = canvas.getContext('2d');

  context.fillStyle = fillStyle;
  context.beginPath();
  context.moveTo(250, 75);
  context.lineTo(445, 415);
  context.lineTo(55, 415);
  context.fill();

  return canvas;
}

const createHand = (color, image) => {
  const canvas = createCanvas();
  const context = canvas.getContext('2d');
  const i = new Image();

  i.onload = () => {
    context.fillStyle = color;
    context.fillRect(0, 0, 500, 500);

    context.globalCompositeOperation = 'destination-in';
    context.drawImage(i, 75, 75, 350, 350);
  }

  i.src = image;

  return canvas;
};

export default {
  'white-circle': [createCircle('rgb(150,150,150)'), 'rgba(0,0,0,0.25)'],
  'black-trinagle': [createTrinagle('rgb(20,20,20)'), 'rgba(255,255,255,0.25)'],
  'black-circle': [createCircle('rgb(20,20,20)'), 'rgba(255,255,255,0.25)'],
  'white-trinagle': [createTrinagle('rgb(150,150,150)'), 'rgba(0,0,0,0.25)'],
  'hand-1': [createHand('rgb(20,20,20)', hand1), 'rgba(255,255,255,0.25)'],
  'hand-2': [createHand('rgb(150,150,150)', hand1), 'rgba(0,0,0,0.25)'],
  'hand-3': [createHand('rgb(20,20,20)', hand2), 'rgba(255,255,255,0.25)'],
  'hand-4': [createHand('rgb(150,150,150)', hand2), 'rgba(0,0,0,0.25)'],
};
