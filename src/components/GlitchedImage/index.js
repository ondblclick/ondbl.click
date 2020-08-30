import { Component } from 'react';
import { random, range, sample, compact } from 'lodash-es';

const DEBUG = false;
const SMPTE = [
  'rgba(0,255,255,.5)',
  'rgba(255,0,255,.5)',
  'rgba(255,255,0,.5)',
  // 'rgba(180,180,16,.5)',
  // 'rgba(16,180,180,.5)',
  // 'rgba(16,180,16,.5)',
  // 'rgba(180,16,180,.5)',
  // 'rgba(104,104,104,.5)',
  // 'rgba(180,180,180,.5)',
  // 'rgba(180,16,16,.5)',
  // 'rgba(16,16,180,.5)',
  // 'rgba(16,16,16,.5)',
];

const withFilter = (filter, context, draw, keepOld) => {
  const old = context.filter;

  context.filter = `${keepOld ? old : ''} ${filter}`;
  draw();
  context.filter = old;
}

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
    for (let i = 0; i < this.props.canvases.length; i++) {
      if (
        oldProps.canvases[i][0] !== this.props.canvases[i][0]
        || oldProps.canvases[i][1] !== this.props.canvases[i][1]
      ) {
        this.contexts = null;
        this.canvases = null;
        this.origins = null;
      }
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
      }, random(100, 250));
    }, random(150, 500));
  }

  getGlitched = () => {
    return {
      shadowX: random(-10, 10),
      shadowY: random(-10, 10),
      color: sample(SMPTE),
      offset: random(-25, 25),
      glitches: range(0, random(2, 5)).map(() => {
        const fromX = random(-50, 350);
        const fromY = random(-50, 350);

        return {
          fromX: fromX,
          fromY: fromY,
          toX: fromX + random(-100, 100),
          toY: fromY + random(-100, 100),
          w: random(350, 500),
          h: random(5, 100),
          invert: random(1, 100),
          opacity: random(25, 50),
        }
      }),
    }
  }

  draw = () => {
    if (DEBUG) console.time('draw');

    if (this.contexts === null) {
      const c = this.props.canvases
        .map((canvas) => canvas[1]?.()?.getContext?.('2d'));

      if (compact(c).length) {
        this.contexts = c;
        this.canvases = this.contexts.map(c => c.canvas);
        this.origins = this.props.canvases.map(c => this.props.shapes[c[0]][0]);
      }
    }

    if (this.contexts) {
      this.contexts.forEach((c, i) => {
        c.clearRect(0, 0, 500, 500);
      });

      if (this.glitches) {
        this.contexts.forEach((c, i) => {
          c.filter = `drop-shadow(${this.glitches.shadowX}px ${this.glitches.shadowY}px 0 ${this.glitches.color})`;
        });

        const r = random(-10, 10) + this.glitches.offset;

        this.contexts.forEach((c, i) => {
          c.drawImage(this.origins[i], 0, 0, 500, 500, r, 0, 500, 500);
        });

        this.glitches.glitches.forEach((glitch) => {
          const { fromX, fromY, w, h, toX, toY } = glitch;

          this.contexts.forEach((c, i) => {
            withFilter(`opacity(${glitch.opacity}%)`, c, () => {
              c.drawImage(this.origins[i], fromX, fromY, w, h, toX + r, toY, w, h);
            });

            withFilter(`invert(${glitch.invert}%)`, c, () => {
              c.drawImage(this.origins[i], fromX, fromY, w, h, fromX + r, fromY, w, h);
            });
          });
        });

        this.contexts.forEach((c, i) => {
          c.filter = 'none';
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
