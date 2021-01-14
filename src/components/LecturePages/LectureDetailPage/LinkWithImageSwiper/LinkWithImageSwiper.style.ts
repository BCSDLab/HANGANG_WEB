import styled from 'styled-components';
import {
  defaultFontFamily, greyFontColor, mainFontColor, mobileQuery,
} from '@utils/css-util';

export const SwiperContainer = styled.div`
  overflow: auto;
  width: 100%;
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
  width: 90px;
  height: 112px;
  margin: 0 8px 0 0;
  padding: 0;
  list-style: none none;
  
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
  overflow: hidden;
  width: 100%;
  color: ${mainFontColor};
  white-space: nowrap;
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
