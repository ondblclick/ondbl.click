import React from 'react';
import classnames from 'classnames';

import './index.css';

class Graphics extends React.Component {
  static displayName = 'Graphics';

  render() {
    const { children, style, type } = this.props;

    const layers = (Array.isArray(children) ? children : [children])
      .map((i) => {
        return i.type.displayName === 'Layer'
          ? [i]
          : i.type === React.Fragment
            ? i.props.children
            : []
      }).flat().reduce((acc, i) => {
        acc[i.props.l] = [...(acc[i.props.l] || []), i];

        return acc;
      }, {});

    return (
      <div className={classnames('Graphics', `Graphics--${type}`)} style={style}>
        <div className={classnames('Graphics__layer-container', `Graphics__layer-container--${type}`)}>
          {Object.entries(layers).map(([k, v]) => (
            <div key={k} style={{
              'perspective': {
                '--translate-z': `calc(var(--translate-z-delta) * ${k})` },
              'parallax': {
                '--translate-x': `calc(var(--translate-x-delta) * ${k})`,
                '--translate-y': `calc(var(--translate-y-delta) * ${k})` },
              'parallax-horizontal': {
                '--translate-x': `calc(var(--translate-x-delta) * ${k})` },
              'parallax-vertical': {
                '--translate-y': `calc(var(--translate-y-delta) * ${k})` },
            }[type]} className="Graphics__layer">
              {v.map((j) => j.props.children)}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Graphics;
