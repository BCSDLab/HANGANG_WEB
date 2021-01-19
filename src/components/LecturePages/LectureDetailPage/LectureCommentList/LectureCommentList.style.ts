import styled from 'styled-components';
import {
  defaultFontFamily, greyFontColor, mainColor, mainFontColor, mobileQuery,
} from '@utils/css-util';
import ThumbUpSVG from '@assets/svg/thumb-up.svg';

export const SectionContainer = styled.div`
  
  ${mobileQuery} {
    padding: 16px;
  }
`;

export const TitleRow = styled.div`
  
  ${mobileQuery} {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4px;
  }
`;

export const Title = styled.h2`
  
  ${mobileQuery} {
    display: inline-block;
    margin: 0;
    font: normal bold 16px/24px ${defaultFontFamily};
    color: ${mainFontColor};
  }
`;

export const CommentActionRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface ILikeButton {
  pressed: boolean;
}

export const ThumbUpIcon = styled(ThumbUpSVG)`

  ${mobileQuery} {
    width: 16px;
    height: 16px;
  }
`;

export const LikeButton = styled.button.attrs<ILikeButton>((props) => ({
  'aria-pressed': props.pressed,
}))<ILikeButton>`
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${(props) => (props.pressed ? mainColor : greyFontColor)};
  cursor: pointer;
  
  ${mobileQuery} {
    height: 100%;
    font: normal 12px/18px ${defaultFontFamily};
  }
  
  > ${ThumbUpIcon} > path {
    stroke: ${(props) => (props.pressed ? mainColor : greyFontColor)};
  }
`;

export const ReportButton = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: ${greyFontColor};
  cursor: pointer;

  ${mobileQuery} {
    height: 100%;
    font: normal 12px/18px ${defaultFontFamily};
  }
`;
