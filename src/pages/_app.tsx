import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { useRedux } from '@utils/hooks/useRedux';

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 360px;
    margin: 0;
    padding: 0;
  }
  
  @font-face {
    font-family: NotoSansCJKKR;
    src: local("Noto Sans KR Medium"), local("Noto Sans CJK KR Medium");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: NotoSansCJKKR;
    src: local("Noto Sans KR"), local("Noto Sans CJK KR");
    font-weight: normal;
    font-style: normal;
  }
`;

const App = ({ Component: AppComponent, pageProps }: AppProps): JSX.Element => {
  const store = useRedux(pageProps.initialState);
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppComponent {...pageProps} />
    </Provider>
  );
};

export default App;
