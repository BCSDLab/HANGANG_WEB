import styled, { css } from 'styled-components';
import {
  defaultFontFamily,
  greyBackgroundColor,
  greyFontColor,
  mainColor,
  mainFontColor,
  mobileQuery,
} from '@utils/css-util';
import BookmarkSVG from '@assets/svg/bookmark.svg';

export const DetailInfoContainer = styled.div`

  ${mobileQuery} {
    padding: 16px 16px 0;
    border-bottom: 1px solid ${greyBackgroundColor};
  }
`;

export const DetailInfoFirstRow = styled.div`
  display: flex;
  align-items: end;
  
  ${mobileQuery} {
  }
`;

export const LectureTitle = styled.h1`
  display: inline-block;
  margin: 0;
  
  ${mobileQuery} {
    margin: 0 8px 0 0;
    font: normal bold 18px/27px ${defaultFontFamily};
    color: ${mainFontColor};
  }
`;

export const LectureCode = styled.h3`
  display: inline-block;
  margin: 0 auto 0 0;
  
  ${mobileQuery} {
    display: inline;
    vertical-align: bottom;
    font: normal 12px/27px ${defaultFontFamily};
    color: ${greyFontColor};
  }
`;

export const LectureType = styled.div`
  display: inline-block;
  
  ${mobileQuery} {
    font: normal 12px ${defaultFontFamily};
    color: ${mainColor};
  }
`;

export const LectureProfessor = styled.div`
  display: block;
  
  ${mobileQuery} {
    width: 100%;
    margin-bottom: 8px;
    font: normal 14px ${defaultFontFamily};
    color: ${mainFontColor};
  }
`;

export const DetailInfoLastRow = styled.div`
  display: block;
  
  ${mobileQuery} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`;

export const OpeningSemesterDesc = styled.div`
  display: block;

  ${mobileQuery} {
    font: normal 14px ${defaultFontFamily};
    color: ${greyFontColor};
  }
`;

export const OpeningSemester = styled.div`
  ${mobileQuery} {
    width: 100%;
    font: normal 14px ${defaultFontFamily};
    color: ${mainFontColor};
  }
`;

export const BookmarkIcon = styled(BookmarkSVG)`
  width: 24px;
  height: 24px;
`;

interface IBookmarkButton {
  pressed?: boolean;
}

export const BookmarkButton = styled.button<IBookmarkButton>`
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  
  ${(props) => (props.pressed ? css`
    > ${BookmarkIcon} > path {
      stroke: ${mainColor};
      fill: ${mainColor};
    }
  ` : null)};
  
  ${mobileQuery} {
    margin-top: auto;
  }
`;

export const EvaluationInfoContainer = styled.div`
  
  ${mobileQuery} {
    padding: 16px 0 0;
    border-bottom: 1px solid ${greyBackgroundColor};
  }
`;

export const EvaluationInfoTitle = styled.h2`
  margin: 0;
  color: ${mainFontColor};

  ${mobileQuery} {
    padding: 0 16px;
    margin-bottom: 16px;
    font: normal bold 16px/24px ${defaultFontFamily};
  }
`;

export const EvaluationGraphContainer = styled.div`

  ${mobileQuery} {
    width: 100%;
    height: 162px;
    margin: 0 0 16px;
  }
`;

export const EvaluationText = styled.div`

  ${mobileQuery} {
    padding: 0 16px 24px;
  }
`;

export const EvaluationContainer = styled.div`

  ${mobileQuery} {
    display: inline-block;
    width: 50%;
    margin: 0 0 16px;
    font: normal 14px/21px ${defaultFontFamily};
    color: ${mainFontColor};
  }
`;

export const EvaluationDesc = styled.span`

  ${mobileQuery} {
    display: inline-block;
    width: 70px;
    margin: 0 15px 0 0;
    color: ${greyFontColor};
  }
`;

export const HashTagContainer = styled.div`

  ${mobileQuery} {
    padding: 8px 0 0;
    font: normal 14px/21px ${defaultFontFamily};
    color: ${greyFontColor};
  }
`;

export const HashTag = styled.span`
  ${mobileQuery} {
    margin: 0 5px 0 0;
  }
`;

export const MaterialListContainer = styled.div`
  ${mobileQuery} {
    border-bottom: 1px solid ${greyBackgroundColor};
    padding: 8px 0 0;
  }
`;

export const MaterialListTitle = styled.h2`

  ${mobileQuery} {
    padding: 0 16px 0;
    margin-bottom: 16px;
    font: normal bold 16px/24px ${defaultFontFamily};
    color: ${mainFontColor};
  }
`;
