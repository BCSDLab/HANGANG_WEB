import { QueryClient, QueryClientProvider } from 'react-query';

import { AppProps } from 'next/app';
import { Hydrate } from 'react-query/hydration';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useRedux } from '@utils/hooks/useRedux';
import { useState } from 'react';

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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <GlobalStyle />
          <AppComponent {...pageProps} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
