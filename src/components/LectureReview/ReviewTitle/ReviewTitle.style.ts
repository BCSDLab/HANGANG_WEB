import styled from 'styled-components';
import * as style from '@utils/css-util';
import ExclamationSVG from '@assets/svg/exclamation.svg';

export const ReviewTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom : 16px;
`;

export const ReviewTitleText = styled.span`
  margin : 16px 0 16px 16px;
  font-family: ${style.defaultFontFamily};
  font-size: 20px;
  font-weight: 500;
`;

export const ReviewTitleMetaData = styled.span`
  margin-left: 16px;
  color: ${style.greyFontColor};
  font-family: ${style.defaultFontFamily};
  font-size: 16px;
`;

export const ReviewTitleTotalReviewMetaData = styled.span`
  margin-left: 8px;
  color: ${style.yellowColor};
  font-family: ${style.defaultFontFamily};
  font-size: 15px;
`;
export const CautionLectureSVG = styled(ExclamationSVG)`
  width: 20px;
  height: 20px;
  margin-left: 16px;
`;
