import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { useRedux } from '@utils/hooks/useRedux';

const App = ({ Component: AppComponent, pageProps }: AppProps): JSX.Element => {
  const store = useRedux(pageProps.initialState);
  if (store) {
    return (
      <Provider store={store}>
        <AppComponent {...pageProps} />
      </Provider>
    );
  }
  return <AppComponent {...pageProps} />;
};

export default App;
