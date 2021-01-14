import styled from 'styled-components';
import { blackColor100, defaultFontFamily, greyFontColor, mobileQuery } from '@utils/css-util';

export const Container = styled.div`
  display: flex;
  position: relative;
  
  ${mobileQuery} {
    width: 100%;
    height: 162px;
    
    :after {
      position: absolute;
      top: 0;
      width: 100%;
      height: 146px;
      background: ${blackColor100};
      z-index: -1;
      content: '';
    }
  }
`;

export const Rate = styled.div`
  
  ${mobileQuery} {
    position: absolute;
    top: 8px;
    left: 16px;
    display: flex;
    align-items: end;
    height: 30px;
    font: normal 500 20px/24px ${defaultFontFamily};
  }
`;

export const RateDesc = styled.span`
  margin-right: 8px;
  font: normal 14px/21px ${defaultFontFamily};
  color: ${greyFontColor};
`;

export const ChartContainer = styled.svg.attrs({
  width: '209px',
  height: '162px',
})`
  margin: 0 auto;
`;

export const Participant = styled.div`

  ${mobileQuery} {
    position: absolute;
    top: 16px;
    right: 16px;
    font: normal 11px/16px ${defaultFontFamily};
    color: ${greyFontColor};
    text-align: right;
  }
`;
