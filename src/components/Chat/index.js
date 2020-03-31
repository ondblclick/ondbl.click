import React, { PureComponent } from 'react';
import { isArray } from 'lodash-es';

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    const current = this.find(1);

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
    const id = this.current.next || (this.current.id + 1);

    return this.find(id);
  }

  find = (id) => {
    return this.props.chat.find(i => i.id === id);
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
              onClick={() => this.onChange(this.find(this.find(o).next))}
              style={{
                padding: '.5rem',
                border: '1px solid #ccc',
                color: '#fff'
              }}
            >
              {this.find(o).message}
            </button>
          ))
        )}
      </div>
    );
  }
}

export default Chat;
