import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './index.css';

class Button extends React.PureComponent {
  render() {
    const { to, onClick, size, className, style, color, children, isActive, disabled, isMuted } = this.props;

    let result = null;

    if (to) {
      result = <Link to={to} />;
    } else  if (onClick) {
      result = <button onClick={onClick} disabled={disabled} />;
    } else {
      result = <button disabled={disabled} />
    }

    return React.cloneElement(result, {
      className: classnames('Button Button--text', { 'Button--is-active': isActive, 'Button--is-muted': isMuted }, className),
      style: { ...style, color, fontSize: size },
    }, children);
  }
}

export default Button;
