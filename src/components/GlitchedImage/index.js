import React, { PureComponent } from 'react';
import { random, range } from 'lodash-es';

class GlitchedImage extends PureComponent {
  constructor(props) {
    super(props);
    const { color, shape } = this.props;
    this.frame = null;
    this.canvas = React.createRef();

    this.original = document.createElement('canvas');
    this.original.width = 500;
    this.original.height = 500;

    const context = this.original.getContext('2d');
    context.fillStyle = color;

    if (shape === 'circle') {
      context.beginPath();
      context.arc(250, 250, 200, 0, 2 * Math.PI);
      context.fill();
    } else if (shape === 'trinagle') {
      context.beginPath();
      context.moveTo(250, 75);
      context.lineTo(445, 415);
      context.lineTo(55, 415);
      context.fill();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.draw();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frame);
  }

  draw = () => {
    const context = this.canvas.current.getContext('2d');

    if (this.glitched) {
      if (this.glitched.ticks < 0) {
        this.glitched = null;

        this.frame = requestAnimationFrame(this.draw);
        return;
      }

      this.glitched.ticks -= 1;

      context.clearRect(0, 0, 500, 500);
      context.drawImage(this.original, 0, 0, 500, 500, random(-3, 3), 0, 500, 500);

      this.glitched.glitches.forEach((gitch) => {
        const { fromX, fromY, w, h, toX, toY } = gitch;
        const offsetX = Math.random() > 5
          ? random(-(fromX * 0.05), fromX * 0.05)
          : 0;

        context.drawImage(this.canvas.current, fromX + offsetX, fromY, w, h, toX + offsetX, toY, w, h);
        context.clearRect(fromX + offsetX, fromY, w, h);
      });

      this.frame = requestAnimationFrame(this.draw);
      return;
    }

    this.glitched = Math.random() > 0.97
      ? {
        ticks: random(2, 15),
        glitches: range(0, random(3, 7)).map(() => ({
          fromX: random(0, 500),
          fromY: random(0, 500),
          toX: random(0, 500),
          toY: random(0, 500),
          w: random(50, 500),
          h: random(1, 50),
        })),
      } : false;

    if (!this.glitched) {
      context.clearRect(0, 0, 500, 500);
      context.drawImage(this.original, 0, 0);

      this.frame = requestAnimationFrame(this.draw);
      return;
    }

    this.frame = requestAnimationFrame(this.draw);
  }

  render() {
    return <canvas
      ref={this.canvas}
      width="500"
      height="500"
      style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
    />;
  }
}

export default GlitchedImage;
