import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { range, random } from 'lodash-es';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Static from '../../Static';
import Main from '../../Main';
import Header from '../../Header';
import Footer from '../../Footer';
import withVariables from '../../../hocs/withVariables';
import withTitle from '../../../hocs/withTitle';
import { ReactComponent as Boat1 } from './boat-1.svg';
import { ReactComponent as Boat2 } from './boat-2.svg';
import { ReactComponent as DearEsther1Svg } from './dear-esther-1.svg';
import { ReactComponent as DearEsther2Svg } from './dear-esther-2.svg';
import { ReactComponent as DearEsther3Svg } from './dear-esther-3.svg';
import _audio from './01.mp3';

class PageDearEsther extends PureComponent {
  _audio = _audio

  _strings = {
    'en-US': 'Dear Esther. I have lost track of how long I have been here, and how many visits I have made overall. Certainly, the landmarks are now so familiar to me that I have to remind myself to actually see the forms and shapes in front of me. I could stumble blind across these rocks, the edges of these precipices, without fear of missing my step and plummeting down to sea. Besides, I have always considered that if one is to fall, it is critical to keep one’s eyes firmly open.',

    'ru-RU': 'Дорогая Эстер. Я потерял счет времени и забыл, сколько здесь нахожусь и сколько раз бывал здесь. Виды теперь настолько знакомы, что приходится напоминать себе, смотреть, куда идти. Я мог бы вслепую бродить по этим скалам, краям этих обрывов, не боясь оступиться и сорваться в море. Кроме того, я всегда считал, что если человек падает, то очень важно, чтобы он держал глаза широко открытыми.',

    'ua-UA': 'Дорога Естер. Я втратив лік часу і забув, скільки тут перебуваю і скільки разів бував тут. Види тепер настільки знайомі, що доводиться нагадувати собі, дивитися, куди йти. Я міг би наосліп бродити по цим скелям, краях цих обривів, не боячись оступитися і зірватися в море. Крім того, я завжди вважав, що якщо людина падає, то дуже важливо, щоб вона тримала очі широко відкритими.',
  }

  render() {
    return (
      <>
        <Header audio={this._audio} />

        <Main>
          <Static style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
            <p className="abzac" style={{ margin: '1rem 0', fontFamily: 'Georgia', fontStyle: 'italic', fontSize: 22, color: '#CCCCCC' }}>
              {this._strings[this.props.locale]}
            </p>
          </Static>
          <Graphics style={{ flex: '2' }} type="perspective">
            <Layer l="1">
              <DearEsther1Svg width="100%" height="100%" fill="#000000" />
            </Layer>
            <Layer l="2">
              <DearEsther2Svg width="100%" height="100%" fill="#666666" />
            </Layer>
            <Layer l="3">
              <DearEsther3Svg width="100%" height="100%" fill="#FFFFFF" />
            </Layer>
          </Graphics>
          <div style={{ position: 'absolute', bottom: 0, left: 40, right: 0 }}>
            {range(0, 21).map((i) => {
              const Boat = Math.random() > .5 ? Boat1 : Boat2;
              const size = (4 - Math.floor(i / 7)) * 25 + Math.random() * 25;
              const left = `${random(0, 100)}%`;
              const bottom = Math.floor(i / 7) * 40 + random(0, 30 * Math.ceil(i / 7));
              console.log(bottom);
              const marginLeft = -(size / 2);
              const color = `rgba(255,255,255,${0.2 - Math.ceil(i / 7) * 0.05 + 0.05})`;

              return (
                <Boat
                  key={i}
                  width={size}
                  height={size}
                  stroke={color}
                  style={{ position: 'absolute', bottom, left, marginLeft }}
                />
              );
            })}
          </div>
        </Main>

        <Footer strings={this._strings} style={{ marginTop: -40 }} />
      </>
    );
  }
}

export default compose(
  connect((s) => ({ locale: s.locale })),
  withTitle('Dear Esther'),
  withVariables({ '--background-color': '#1d2b3b' }),
)(PageDearEsther);
