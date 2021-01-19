import styled from 'styled-components';
import {
  defaultFontFamily, greyFontColor, mainFontColor, mobileQuery,
} from '@utils/css-util';

export const Container = styled.div`
  ${mobileQuery} {
    margin-top: 16px;
  }
`;

export const Row = styled.div`
  display: flex;
  ${mobileQuery} {
    height: 18px;
    margin-bottom: 4px;
    font: normal 12px/18px ${defaultFontFamily};
    color: ${mainFontColor};
  }
`;

export const FirstRow = styled(Row)`
  justify-content: space-between;
`;

export const Title = styled.div`
  ${mobileQuery} {
    display: inline-block;
    font: normal 12px/18px ${defaultFontFamily};
  }
`;

export const RowDesc = styled.span`
  color: ${greyFontColor};
  ${mobileQuery} {
    margin-right: 4px;
  }
`;

export const Content = styled.p`
  ${mobileQuery} {
    margin: 8px 0;
    font: normal 12px/18px ${defaultFontFamily};
  }
`;
