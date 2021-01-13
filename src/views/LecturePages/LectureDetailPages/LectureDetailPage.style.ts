import styled, { css } from 'styled-components';
import {
  defaultFontFamily,
  greyBackgroundColor,
  greyFontColor, mainColor,
  mainFontColor,
  mobileQuery, orangeColor, whiteColor,
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

export const TimetableInfoContainer = styled.div`
  ${mobileQuery} {
    height: 90px;
    padding: 16px 16px 13px;
    border-bottom: 1px solid ${greyBackgroundColor};
  }
`;

export const TimetableTitle = styled.h2`
  margin: 0;
  color: ${mainFontColor};
  
  ${mobileQuery} {
    margin-bottom: 16px;
    font: normal bold 16px/24px ${defaultFontFamily};
  }
`;

export const TimetableInfo = styled.div`
  
  ${mobileQuery} {
    display: flex;
  }
`;

export const TimetableInfoContent = styled.div`

  ${mobileQuery} {
    flex: 1 1 auto;
  }
`;

export const TimetableInfoContentRow = styled.div`
  font: normal 14px/21px ${defaultFontFamily};
  
  ${mobileQuery} {
    margin-bottom: 8px;
    
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const TimetableInfoContentTitle = styled.span`
  color: ${greyFontColor};

  ${mobileQuery} {
    display: inline-block;
    margin-right: 8px;
  }
`;

export const TimetableInfoToggleButton = styled.a`
  width: 18px;
  height: 18px;
  margin: auto 0 0;
  text-decoration: none;
  cursor: pointer;
`;

export const TimetableRemoveButton = styled.button`
  height: 28px;
  margin: auto 0 5px;
  padding: 5px 16px;
  border: 0;
  border-radius: 20px;
  background: ${orangeColor};
  font: normal 12px/18px ${defaultFontFamily};
  color: ${whiteColor};
`;

export const TimetableEmptyInfo = styled.div`
  ${mobileQuery} {
    font: normal 14px/50px ${defaultFontFamily};
    color: ${greyFontColor};
    text-align: center;
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
