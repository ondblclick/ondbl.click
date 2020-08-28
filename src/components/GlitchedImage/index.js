import { Component } from 'react';
import { random, range, sample } from 'lodash-es';

const DEBUG = false;
const SMPTE = [
  'rgba(180,180,16,.5)',
  'rgba(16,180,180,.5)',
  'rgba(16,180,16,.5)',
  'rgba(180,16,180,.5)',
  'rgba(104,104,104,.5)',
  'rgba(180,180,180,.5)',
  'rgba(180,16,16,.5)',
  'rgba(16,16,180,.5)',
  'rgba(16,16,16,.5)',
];

class GlitchedImage extends Component {
  constructor(props) {
    super(props);
    this.glitches = null;

    this.frame = null;

    this.glitchesStartTimeout = null;
    this.glitchesEndTimeout = null;

    this.canvases = null;
    this.contexts = null;
  }

  componentDidMount() {
    this.draw();
    this.startGlitching();
  }

  componentDidUpdate(oldProps) {
    if (
      oldProps.canvases[0][0] !== this.props.canvases[0][0]
      || oldProps.canvases[1][0] !== this.props.canvases[1][0]
    ) {
      this.contexts = null;
      this.canvases = null;
      this.origins = null;
    }
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
    }, random(150, 500));
  }

  getGlitched = () => {
    return range(0, random(3, 7)).map(() => {
      const h = random(1, 50);

      return ({
        fromX: random(-50, 450),
        fromY: random(-50, 450),
        toX: random(-50, 450),
        toY: random(-50, 450),
        w: random(50, 500),
        h,
        color: Math.random() > .5 && h < 15
          ? sample(SMPTE)
          : null,
      });
    });
  }

  draw = () => {
    if (DEBUG) console.time('draw');

    if (this.contexts === null) {
      const c = this.props.canvases
        .map((canvas) => canvas[1]?.()?.getContext?.('2d'));

      if (c[0] && c[1]) {
        this.contexts = c;
        this.canvases = this.contexts.map(c => c.canvas);
        this.origins = this.props.canvases.map(c => this.props.shapes[c[0]][0]);
        console.log(this.contexts, this.canvases, this.origins);
      }
    }

    if (this.contexts) {
      this.contexts.forEach((c, i) => {
        c.clearRect(0, 0, 500, 500);
      });

      if (this.glitches) {
        this.contexts.forEach((c, i) => {
          c.drawImage(this.origins[i], 0, 0, 500, 500, random(-3, 3), 0, 500, 500);
        });

        this.glitches.forEach((glitch) => {
          const { fromX, fromY, w, h, toX, toY } = glitch;
          const offsetX = Math.random() > 0.5
            ? random(-(fromX * 0.05), fromX * 0.05)
            : 0;

          this.contexts.forEach((c) => {
            if (glitch.color) {
              c.fillStyle = glitch.color;
              c.fillRect(fromX + offsetX + 10, fromY + 10, w, h);
            }

            c.drawImage(c.canvas, fromX + offsetX, fromY, w, h, toX + offsetX, toY, w, h);
            c.clearRect(fromX + offsetX, fromY, w, h);
          });
        });
      } else {
        this.contexts.forEach((c, i) => {
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
