import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import Layer from '../../Layer';
import Graphics from '../../Graphics';
import Static from '../../Static';
import { ReactComponent as DearEsther1Svg } from '../../../svgs/dear-esther-1.svg';
import { ReactComponent as DearEsther2Svg } from '../../../svgs/dear-esther-2.svg';
import { ReactComponent as DearEsther3Svg } from '../../../svgs/dear-esther-3.svg';

class PageDearEsther extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <style>{`:root { --background-color: #1d2b3b; }`}</style>
        </Helmet>
        <Static style={{ display: 'flex', alignItems: 'center', flex: '1' }}>
          <p className="abzac" style={{ margin: '1rem 0', fontFamily: 'Georgia', fontStyle: 'italic', fontSize: 22, color: '#CCCCCC', userSelect: 'none' }}>{'Дорогая Эстер. Я потерял счет времени и забыл, сколько здесь нахожусь и сколько раз бывал здесь. Виды теперь настолько знакомы, что приходится напоминать себе, смотреть, куда идти. Я мог бы вслепую бродить по этим скалам, краям этих обрывов, не боясь оступиться и сорваться в море. Кроме того, я всегда считал, что если человек падает, то очень важно, чтобы он держал глаза широко открытыми.'}</p>
        </Static>
        <Graphics style={{ flex: '2' }}>
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
      </>
    );
  }
}

export default PageDearEsther;
