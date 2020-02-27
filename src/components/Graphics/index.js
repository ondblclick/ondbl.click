import React from 'react';

import './index.css';

class Graphics extends React.Component {
  static displayName = Graphics;

  render() {
    const { children, style } = this.props;

    const layers = (Array.isArray(children) ? children : [children])
      .map((i) => {
        return i.type.name === 'Layer'
          ? [i]
          : i.type === React.Fragment
            ? i.props.children
            : []
      }).flat().reduce((acc, i) => {
        acc[i.props.l] = [...(acc[i.props.l] || []), i];

        return acc;
      }, {});

    return (
      <div className="Graphics" style={style}>
        <div className="Graphics__layers-container">
          {Object.entries(layers).map(([k, v]) => (
            <div key={k} style={{ '--translate-z': `calc(var(--translate-z-delta) * ${k})` }} className="level">
              {v.map((j) => j.props.children)}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Graphics;
