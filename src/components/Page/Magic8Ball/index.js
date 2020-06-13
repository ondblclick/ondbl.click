import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { sample } from 'lodash-es';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Main from '../../Main';
import Header from '../../Header';
import Footer from '../../Footer';
import withVariables from '../../../hocs/withVariables';
import cn from 'classnames';

import './index.css';

const BACKGROUND_COLOR = '#222222';

const ANSWERS = [
  'It is<br/>certain',
  'It is<br/>decidedly<br/>so',
  'Without<br/>a doubt',
  'Yes –<br>definitely',
  'You may rely<br/>on it',
  'As I see it,<br/>yes',
  'Most<br/>likely',
  'Outlook<br/>good',
  'Yes',
  'Signs point<br/>to yes',
  'Reply hazy,<br/>try again',
  'Ask again<br/>later',
  'Better not<br/>tell you<br/>now',
  'Cannot<br/>predict<br/>now',
  'Concentrate<br/>and ask<br/>again',
  'Don\'t count<br/>on it',
  'My reply<br/>is no',
  'My sources<br/>say no',
  'Outlook not<br/>so good',
  'Very<br/>doubtful',
];

const preprocess = (previous) => {
  return sample(ANSWERS);
}

class PageMagic8Ball extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      previous: [],
      answer: null,
      answerReady: false,
    };
  }

  onClick = () => {
    const { answer: old, previous } = this.state;

    this.setState({ answerReady: false });

    setTimeout(() => {
      this.setState({
        answerReady: true,
        answer: preprocess(previous),
        previous: [old, ...previous]
      });
    }, 1100);
  }

  render() {
    return (
      <>
        <Header />

        <Main>
          <Graphics type="perspective">
            <Layer l="1">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div
                  style={{
                    width: '50vmin',
                    height: '50vmin',
                    border: '1px solid #555',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,.05)'
                  }}
                />
              </div>
            </Layer>
            <Layer l="2">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div
                  onClick={this.onClick}
                  style={{
                    width: '25vmin',
                    height: '25vmin',
                    border: '7px double #888',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,.5)',
                    cursor: 'pointer',
                    pointerEvents: 'all',
                    display: 'flex',
                  }}
                >
                  {/* <canvas ref={r => this.canvas = r} /> */}
                  <div
                    className={cn('PageMagic8Ball__answer', { 'PageMagic8Ball__answer--ready': this.state.answerReady })}
                    style={{
                      margin: 'auto',
                      width: '63%',
                      height: '52%',
                      position: 'relative',
                      top: 20,
                      textAlign: 'center',
                      display: 'flex',
                      paddingBottom: '2.5rem'
                    }}
                  >
                    <div className="PageMagic8Ball__answer-text" dangerouslySetInnerHTML={{ __html: this.state.answer }} />
                  </div>
                </div>
              </div>
            </Layer>
          </Graphics>
        </Main>

        <Footer strings={this._strings} />
      </>
    );
  }
}

export default compose(
  withVariables({ '--background-color': BACKGROUND_COLOR }),
)(PageMagic8Ball);
