// mobile media query utils

export const mobileQuery = '@media only screen and (max-width: 576px)';

export const mobileMaxHeight = '500px';

// font-family utils
export const defaultFontFamily = '"NotoSansCJKKR", -apple-system, -moz-fixed, sans-serif';

// font-color utils
export const yellowColor = '#FFAB2E';

export const mainColor = '#238BFE';

export const mainFontColor = '#222222';

export const greyFontColor = '#999999';

export const greyBackgroundColor = '#EEEEEE';

export const blackColor100 = '#FAFAFA';

export const whiteColor = '#FFFFFF';

export const orangeColor = '#FFAB2E';

export const disabledBackgroundColor = '#bddcff';

// color name (for export BCSD_WEB_LIBRARY)

interface IColorName {
  [key: string]: {
    backgroundColor: string;
    disabledColor: string;
  }
}

export const ColorName: IColorName = {
  primary: {
    backgroundColor: mainColor,
    disabledColor: disabledBackgroundColor,
  },
  secondary: {
    backgroundColor: yellowColor,
    disabledColor: '',
  },
};

export const isColorName = (str: string) => str === 'primary' || str === 'secondary';

interface IFormInputSize {
  sm: {
    [key: string]: string;
  };
  md: {
    [key: string]: string;
  };
  lg: {
    [key: string]: string;
  };
}

export const FormInputSize: IFormInputSize = {
  sm: {
    button: '28px',
  },
  md: {
    button: '40px',
  },
  lg: {
  },
};
