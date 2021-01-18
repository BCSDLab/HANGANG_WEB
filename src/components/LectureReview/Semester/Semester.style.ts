import styled from 'styled-components';
import * as style from '@utils/css-util';
import DownArrowSVG from '@assets/svg/chevron-down.svg';

export const SemesterContainer = styled.div`
  position: relative;
  width: 160px;
  height: 40px; 
  margin: 16px 0 16px 16px;
  border: solid 1px ${style.greyBackgroundColor};
  border-radius: 4px;
  cursor: pointer;
`;

export const SemesterSelector = styled.select`
  position: absolute;
  width:100%;
  height:100%;
  padding : 0 12px;
  border: none;
  background: transparent;
  color: ${style.mainFontColor};
  font-family: ${style.defaultFontFamily};
  font-size: 14px;
  font-weight : 500;  
  outline: none;
  appearance: none;
  cursor: pointer;
`;
export const SelectOption = styled.option``;

export const SemesterDownArrowSVG = styled(DownArrowSVG)`
  position: absolute;
  top: 12px;
  right: 10px;
  width: 16px;
  height: 16px;
`;
