import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Icon from '../Icon';

import './index.css';

class Button extends React.PureComponent {
  render() {
    const { to, onClick, glyph, size, className, style, color } = this.props;

    let result = null;

    if (to) result = <Link to={to} />;
    if (onClick) result = <button onClick={onClick} />;

    if (glyph) {
      return React.cloneElement(result, {
        className: classnames('Button Button--icon', className),
        style,
      }, <Icon glyph={glyph} size={size} color={color} />);
    }
  }
}

export default Button;
