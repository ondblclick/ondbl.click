/*
https://steamuserimages-a.akamaihd.net/ugc/314493598656486541/231801914C8BC78ACB63A274CB2D493796DACA77/
https://imgur.com/OqtTZft
http://i.imgur.com/OyLdVUL.png
http://i.imgur.com/3sWcCVT.jpg
http://i.imgur.com/DsDQMjx.jpg
https://imgur.com/RMiKp8M
http://i.imgur.com/3sWcCVT.jpg
http://i.imgur.com/CNRK0Og.jpg
http://i.imgur.com/PNpB8M7.jpg

https://firewatch.fandom.com/ru/wiki/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA_%D0%94%D0%B5%D0%BB%D0%B0%D0%B9%D0%BB%D1%8B
есть всегда:
  # вся правая часть
  # медведь слева вверху
  # узор в левом верхнем углу
злой генри
- we are not so different you and i http://i.imgur.com/DsDQMjx.jpg
- burt + turt https://imgur.com/RMiKp8M
черепашка:
  - hi I'm bucket jr https://steamcommunity.com/sharedfiles/filedetails/?id=961610964
  - hi i'm turt https://steamuserimages-a.akamaihd.net/ugc/314493598656486541/231801914C8BC78ACB63A274CB2D493796DACA77/
варианты:
  одежда:
    # шорты и пиджак
    # шорты и курточка
    # шорты и рубашка
  голова:
    волосы:
      - причесанные
      - более длинные волосы
      - длинные с кепкой
    борода:
      - есть
      - нету
    - скулы + улыбка + специфический нос
    - скулы + усики + пухлые губы + другой нос + шрам?

    - узкие веселые глаза
    - уставшие открытые глаза
    - зажмуренные без бровей
    - зажмуренные с бровями

    - закрученные усы с острым носом
    - кустистые усы с носом
*/

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Static from '../../Static';
import Main from '../../Main';
import Header from '../../Header';
import Footer from '../../Footer';
import withVariables from '../../../hocs/withVariables';
import { ReactComponent as DearEsther1Svg } from './dear-esther-1.svg';
import { ReactComponent as DearEsther2Svg } from './dear-esther-2.svg';
import { ReactComponent as DearEsther3Svg } from './dear-esther-3.svg';
import _audio from './01.mp3';

class PageFirewatch extends PureComponent {
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
            <p className="abzac" style={{ margin: '1rem 0', fontFamily: 'Georgia', fontStyle: 'italic', fontSize: 22, color: '#CCCCCC', userSelect: 'none' }}>
              {this._strings[this.props.locale]}
            </p>
          </Static>
          <Graphics style={{ flex: '2' }} type="parallax">
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
        </Main>

        <Footer strings={this._strings} />
      </>
    );
  }
}

export default compose(
  connect((s) => ({ locale: s.locale })),
  withVariables({ '--background-color': '#470D2D' }),
)(PageFirewatch);
