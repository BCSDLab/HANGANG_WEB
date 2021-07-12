import styled from 'styled-components';
import LogoWithTextSVG from '@assets/svg/LogoWithText.svg';
import { defaultFontFamily, mobileMaxHeight, yellowColor } from '@utils/css-util';

export const Logo = styled(LogoWithTextSVG)`
  display: block;
  margin: 92px auto 0;
`;

export const Form = styled.form`
  display: block;
  margin: 84px auto 0;
  max-width: ${mobileMaxHeight};
`;

export const FieldSet = styled.fieldset`
  margin: 0;
  padding: 0 16px;
  border: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const LoginField = styled.div`
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`;

export const PasswordField = styled.div`
  margin: 24px auto 0;
  width: 100%;
  box-sizing: border-box;
`;

export const InlineAlert = styled.div`
  margin: 16px auto 0;
  padding: 0 16px;
  font: 11px/20px ${defaultFontFamily};
  color: ${yellowColor};
`;

export const SubmitField = styled.div`
  margin: 16px auto 0;
`;
