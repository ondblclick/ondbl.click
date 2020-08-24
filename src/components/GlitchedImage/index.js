import { Component } from 'react';
import { random, range } from 'lodash-es';

const DEBUG = false;

class GlitchedImage extends Component {
  constructor(props) {
    super(props);
    this.glitches = null;

    this.frame = null;

    this.glitchesStartTimeout = null;
    this.glitchesEndTimeout = null;

    this.origins = this.props.canvases.map(c => c[0]);
    this.canvases = null;
    this.contexts = null;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.draw();
    this.startGlitching();
  }

  componentWillUnmount() {
    clearTimeout(this.glitchesStartTimeout);
    clearTimeout(this.glitchesEndTimeout);
    cancelAnimationFrame(this.frame);
  }

  startGlitching = () => {
    this.glitchesStartTimeout = setTimeout(() => {
      this.glitches = Math.random() > .25
        ? this.getGlitched()
        : null;

      if (!this.glitches) return this.startGlitching();

      this.glitchesEndTimeout = setTimeout(() => {
        this.glitches = null;
        this.startGlitching();
      }, random(50, 150));
    }, random(250, 750));
  }

  getGlitched = () => {
    return range(0, random(3, 7)).map(() => ({
      fromX: random(0, 500),
      fromY: random(0, 500),
      toX: random(0, 500),
      toY: random(0, 500),
      w: random(50, 500),
      h: random(1, 50),
    }));
  }

  draw = () => {
    if (DEBUG) console.time('draw');

    if (this.contexts === null) {
      const c = this.props.canvases
        .map((canvas) => canvas[1]?.()?.getContext?.('2d'));

      if (c[0] && c[1]) {
        this.contexts = c;
        this.canvases = this.contexts.map(c => c.canvas);
      }
    }

    if (this.contexts) {
      if (this.glitches) {
        this.contexts.forEach((c, i) => {
          c.clearRect(0, 0, 500, 500);
          c.drawImage(this.origins[i], 0, 0, 500, 500, random(-3, 3), 0, 500, 500);
        });

        this.glitches.forEach((glitch) => {
          const { fromX, fromY, w, h, toX, toY } = glitch;
          const offsetX = Math.random() > 0.5
            ? random(-(fromX * 0.05), fromX * 0.05)
            : 0;

          this.contexts.forEach((c) => {
            c.drawImage(c.canvas, fromX + offsetX, fromY, w, h, toX + offsetX, toY, w, h);
            c.clearRect(fromX + offsetX, fromY, w, h);
          });
        });
      } else {
        this.contexts.forEach((c, i) => {
          c.clearRect(0, 0, 500, 500);
          c.drawImage(this.origins[i], 0, 0);
        });
      }
    }

    this.frame = requestAnimationFrame(this.draw);
    if (DEBUG) console.timeEnd('draw');
  }

  render() {
    return null;
  }
}

export default GlitchedImage;
