import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Icon from '../Icon';

import './index.css';

class Button extends React.PureComponent {
  render() {
    const { to, onClick, glyph, size, className, style, color, children, active, disabled } = this.props;

    let result = null;

    if (to) {
      result = <Link to={to} />;
    } else  if (onClick) {
      result = <button onClick={onClick} disabled={disabled} />;
    } else {
      result = <button disabled={disabled} />
    }

    if (glyph) {
      return React.cloneElement(result, {
        className: classnames('Button Button--icon', { 'Button--active': active }, className),
        style,
      }, <Icon glyph={glyph} size={size} color={color} />);
    }

    return React.cloneElement(result, {
      className: classnames('Button Button--text', { 'Button--active': active }, className),
      style: { ...style, color, fontSize: size },
    }, children);
  }
}

export default Button;
