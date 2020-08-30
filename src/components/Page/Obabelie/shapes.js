import img from './1.png';

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

const createPhoto = () => {
  const canvas = createCanvas();
  const context = canvas.getContext('2d');
  const i = document.createElement('img');

  i.onload = () => context.drawImage(i, 75, 75, 350, 350);
  i.src = img;

  return canvas;
}

export default {
  'white-circle': [createCircle('rgb(150,150,150)'), 'rgba(0,0,0,0.25)'],
  'black-trinagle': [createTrinagle('rgb(20,20,20)'), 'rgba(255,255,255,0.25)'],
  'black-circle': [createCircle('rgb(20,20,20)'), 'rgba(255,255,255,0.25)'],
  'white-trinagle': [createTrinagle('rgb(150,150,150)'), 'rgba(0,0,0,0.25)'],
  'photo-1': [createPhoto(), 'rgba(255,255,255,0.25)'],
  'photo-2': [createPhoto(), 'rgba(0,0,0,0.25)'],
};
