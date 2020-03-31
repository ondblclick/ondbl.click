import React, { PureComponent } from 'react';
import { isArray } from 'lodash-es';

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    const current = props.chat.find((i) => i.id === 1);

    this.state = { current, messages: [current] };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  get current() {
    return this.state.current;
  }

  get next() {
    return this.props.chat.find((i) => i.id === (this.current.next || (this.current.id + 1)));
  }

  onKeyDown = (e) => {
    if (e.keyCode === 32) {
      if (isArray(this.next.message)) return;

      this.onChange(this.next);
    }
  }

  onChange = (item) => {
    this.setState((s) => ({
      current: item,
      messages: [item, ...s.messages] }));
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {[...this.state.messages].reverse().map((m) => (
          <div
            key={m.message}
            style={{
              alignSelf: m.author === 'D' ? 'flex-start' : 'flex-end',
              marginLeft: m.author === 'D' ? 0 : '4rem',
              marginRight: m.author === 'D' ? '4rem' : 0,
              display: 'inline-block',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              padding: '.5rem 1rem',
              borderRadius: '.5rem' }}
          >
            {m.message}
          </div>
        ))}
        {isArray(this.next.message) && (
          this.next.message.map((o) => (
            <button
              key={o}
              onClick={() => this.onChange(this.props.chat.find(i => i.id === parseInt(o.split(' -> ')[1], 10)))}
              style={{
                padding: '.5rem',
                border: '1px solid #ccc',
                color: '#fff'
              }}
            >
              {o.split(' -> ')[0]}
            </button>
          ))
        )}
      </div>
    );
  }
}

export default Chat;
