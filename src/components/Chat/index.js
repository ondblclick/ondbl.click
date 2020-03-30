import React, { PureComponent } from 'react';

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { current: 1, messages: [props.chat[1]] };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.keyCode === 32) {
      const next = this.props.chat[this.state.current].n;
      const nextItem = this.props.chat[next];

      this.setState((s) => ({ current: next, messages: [nextItem, ...s.messages] }));
    }
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
            key={m.m}
            style={{
              alignSelf: m.author === 'D' ? 'flex-start' : 'flex-end',
              display: 'inline-block',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              padding: '.5rem 1rem',
              borderRadius: '.5rem' }}
          >
            {m.m}
          </div>
        ))}
      </div>
    );
  }
}

export default Chat;
