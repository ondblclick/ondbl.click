import React, { PureComponent } from 'react';
import { isArray } from 'lodash-es';

import './index.css';

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    const current = this.find(1);

    this.state = { current, messages: [current] };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
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
      if (this.next.message === '/CLEAR') return this.onChange(this.find(this.next.next), []);

      return this.onChange(this.next);
    }
  }

  onChange = (item, messages = undefined) => {
    this.setState((s) => ({
      current: item,
      messages: [item, ...(messages || s.messages)] }));
  }

  render() {
    return (
      <div className="Chat">
        {[...this.state.messages].reverse().map((m, i, a) => (
          <div
            key={m.message}
            style={{
              alignSelf: m.author === 'D' ? 'flex-start' : 'flex-end',
              marginLeft: m.author === 'D' ? 0 : '4rem',
              marginRight: m.author === 'D' ? '4rem' : 0,
              backgroundColor: m.author === 'D' ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.15)',
              display: 'inline-block',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              padding: '.5rem 1rem',
              borderRadius:  m.author === 'D' ? '.75rem .75rem .75rem 0' : '.75rem .75rem 0 .75rem',
              opacity: 1 - (a.length - i) / 15 }}
          >
            {m.message}
          </div>
        ))}
        <div style={{ minHeight: 150, marginBottom: 100 }}>
          {isArray(this.next.message) && (
            <>
              <div style={{ height: 1, backgroundColor: 'var(--foreground-color)', opacity: .5, margin: '1rem 0 2rem 0' }} />
              {this.next.message.map((o) => (
                <>
                  <button
                    key={o}
                    onClick={() => this.onChange(this.find(this.find(o).next))}
                    className="Chat__option"
                  >
                    {this.find(o).message}
                  </button>
                  <br />
                </>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Chat;
