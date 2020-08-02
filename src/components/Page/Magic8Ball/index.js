import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { sample } from 'lodash-es';
import qs from 'query-string';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Main from '../../Main';
import Header from '../../Header';

import withTitle from '../../../hocs/withTitle';
import withVariables from '../../../hocs/withVariables';
import { ReactComponent as Triangle } from './triangle.svg';
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
    const answer = props.location?.state?.answer;
    this.state = {
      previous: [],
      answer: answer || null,
      answerReady: true,
    };
    this.idleTimeout = setTimeout(() => this.setState({ answer: 'You<br/>there?' }), 5000);
  }

  onClick = () => {
    const { answer: old, previous } = this.state;
    if (this.idleTimeout) clearTimeout(this.idleTimeout);
    if (!this.state.answerReady) return;

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
          <Graphics type="parallax" className={cn({ 'PageMagic8Ball--shake': !this.state.answerReady })}>
            <Layer l="1">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <div
                  style={{
                    width: '50vmin',
                    height: '50vmin',
                    border: '1px solid #555',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,.05)',
                    boxShadow: 'inset 0 0 0 10px rgba(255,255,255,0.025)'
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
                    boxShadow: 'inset 0 0 0 10px rgba(0,0,0,0.3)',
                  }}
                >
                  <div
                    className={cn('PageMagic8Ball__answer', { 'PageMagic8Ball__answer--ready': this.state.answerReady && this.state.answer })}
                    style={{
                      margin: 'auto',
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      top: 18,
                      textAlign: 'center',
                      display: 'flex',
                      paddingBottom: '2.5rem',
                      paddingTop: '.5rem',
                    }}
                  >
                    <Triangle
                      width={'100%'}
                      height={'100%'}
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        transform: 'scale(.7)',
                      }}
                    />
                    <div className="PageMagic8Ball__answer-text" dangerouslySetInnerHTML={{ __html: this.state.answer }} />
                  </div>
                </div>
              </div>
            </Layer>
          </Graphics>
        </Main>
      </>
    );
  }
}

export default compose(
  withVariables({ '--background-color': BACKGROUND_COLOR }),
  withTitle('Magic 8 Ball'),
)(PageMagic8Ball);
