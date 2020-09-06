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

const createHand = (color, image, { w, h, scale }) => {
  const canvas = createCanvas();
  const context = canvas.getContext('2d');
  const i = new Image();

  i.onload = () => {
    context.fillStyle = color;
    context.fillRect(0, 0, 500, 500);

    context.globalCompositeOperation = 'destination-in';
    context.drawImage(i, (500 - (w / scale)) / 2, (500 - (h / scale)) / 2, w / scale, h / scale);
  }

  i.src = image;

  return canvas;
};

const LIGHT_FG = 'rgb(150,150,150)';
const DARK_FG = 'rgb(20,20,20)';
const LIGHT_BG = 'rgba(255,255,255,0.25)';
const DARG_BG = 'rgba(0,0,0,0.25)';

export default {
  'white-circle':   [createCircle(LIGHT_FG), DARG_BG],
  'black-trinagle': [createTrinagle(DARK_FG), LIGHT_BG],
  'black-circle':   [createCircle(DARK_FG), LIGHT_BG],
  'white-trinagle': [createTrinagle(LIGHT_FG), DARG_BG],
  'hand-1':         [createHand(DARK_FG, hand1, { w: 333, h: 668, scale: 1.5 }), LIGHT_BG],
  'hand-2':         [createHand(LIGHT_FG, hand1, { w: 333, h: 668, scale: 1.5 }), DARG_BG],
  'hand-3':         [createHand(DARK_FG, hand2, { w: 320, h: 687, scale: 1.5 }), LIGHT_BG],
  'hand-4':         [createHand(LIGHT_FG, hand2, { w: 320, h: 687, scale: 1.5 }), DARG_BG],
};
