import React from 'react';

import ICONS from './_imports';

class Icon extends React.PureComponent {
  render() {
    const { glyph, size, color } = this.props;
    const C = ICONS[glyph];

    return <C width={size} height={size} color={color} />;
  }
}

export default Icon;
