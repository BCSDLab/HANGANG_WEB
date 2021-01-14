import styled from 'styled-components';
import {
  defaultFontFamily,
  greyBackgroundColor,
  greyFontColor, mainColor,
  mainFontColor,
  mobileQuery,
  orangeColor,
  whiteColor,
} from '@utils/css-util';

export const Container = styled.div`
  ${mobileQuery} {
    padding: 16px 16px 13px;
    border-bottom: 1px solid ${greyBackgroundColor};
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: ${mainFontColor};
  
  ${mobileQuery} {
    margin-bottom: 16px;
    font: normal bold 16px/24px ${defaultFontFamily};
  }
`;

export const Content = styled.div`
  
  ${mobileQuery} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const BaseInfoContent = styled.div`

  ${mobileQuery} {
    flex: 1 1 auto;
  }
`;

export const ContentRow = styled.div`
  font: normal 14px/21px ${defaultFontFamily};
  
  ${mobileQuery} {
    margin-bottom: 8px;
    
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const ContentTitle = styled.span`
  color: ${greyFontColor};

  ${mobileQuery} {
    display: inline-block;
    margin-right: 8px;
  }
`;

export const TimeInfoToggleButton = styled.a`
  width: 18px;
  height: 18px;
  margin: auto 0 0;
  text-decoration: none;
  cursor: pointer;
`;

interface ICollapsedElement {
  collapse: boolean;
}

export const TimeInfoContainer = styled.ul<ICollapsedElement>`
  width: 100%;
  ${mobileQuery} {
    display: ${(props) => (props.collapse ? 'none' : 'block')};
    height: ${(props) => (props.collapse ? 0 : 'auto')};
    margin: 11px 0 0;
    padding-left: 34px;
  }
`;

export const TimeInfo = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font: normal normal 14px/28px ${defaultFontFamily};
  color: ${mainFontColor};
  list-style: none none;
`;

interface ITypeButton {
  buttonType: 'add' | 'remove'
}

export const TimetableButton = styled.button<ITypeButton>`
  height: 28px;
  padding: 5px 16px;
  border: 0;
  border-radius: 20px;
  background: ${(props) => (props.buttonType === 'add' ? mainColor : orangeColor)};
  font: normal 12px/18px ${defaultFontFamily};
  color: ${whiteColor};
  cursor: pointer;
`;

export const EmptyInfo = styled.div`
  ${mobileQuery} {
    font: normal 14px/50px ${defaultFontFamily};
    color: ${greyFontColor};
    text-align: center;
  }
`;