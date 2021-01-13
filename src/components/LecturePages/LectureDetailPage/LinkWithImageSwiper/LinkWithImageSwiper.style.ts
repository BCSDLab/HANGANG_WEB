import styled from 'styled-components';
import {
  defaultFontFamily, greyFontColor, mainFontColor, mobileQuery,
} from '@utils/css-util';

export const SwiperContainer = styled.div`
  width: 100%;
  overflow: auto;
`;

export const SwiperItemContainer = styled.ul`
  display: flex;
  width: max-content;
  height: 112px;
  margin: 0;
  padding: 0 16px;
`;

export const SwiperItem = styled.li`
  flex: 0 0 auto;
  list-style: none none;
  width: 90px;
  height: 112px;
  margin: 0 8px 0 0;
  padding: 0;
  
  :last-child {
    margin: 0;
  }
`;

export const ItemLink = styled.a`
  text-decoration: none;
`;

export const ItemImageContainer = styled.div`
  width: 90px;
  height: 90px;
`;

// TODO: Change to next/image
export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemDesc = styled.div`
  width: 100%;
  color: ${mainFontColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  ${mobileQuery} {
    font: normal 12px/18px ${defaultFontFamily};
  }
`;

export const NoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 112px;
  font: normal 12px/12px ${defaultFontFamily};
  color: ${greyFontColor};
`;
