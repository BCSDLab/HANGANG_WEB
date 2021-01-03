// https://github.com/vercel/next.js/blob/canary/examples/with-redux/store.js

import * as React from 'react';
import * as Redux from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

let previousStore: Redux.Store | undefined;

type StateValue = {
  [key: string]: Array<number> | Array<string> | string | number | boolean | null;
};

function initStore(
  preloadedState: Redux.PreloadedState<StateValue>,
): Redux.Store {
  let middleware: Array<Redux.Middleware> = [];
  if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger];
    return Redux.createStore(
      Redux.combineReducers({
        default: () => ({}), // TODO: Delete This.
      }),
      preloadedState,
      composeWithDevTools(Redux.applyMiddleware(...middleware)),
    );
  }
  return Redux.createStore(
    Redux.combineReducers({

    }),
    preloadedState,
    Redux.compose(Redux.applyMiddleware(...middleware)),
  );
}

export const initializeStore = (
  preloadedState: Redux.PreloadedState<StateValue>,
): Redux.Store => {
  let store = previousStore ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && previousStore) {
    store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    previousStore = undefined;
  }

  // SSG나 SSR일시 무조건 store 새로 생성
  if (typeof window === 'undefined') return store;
  // 클라이언트에서는 한번만 생성
  if (!previousStore) previousStore = store;

  return store;
};

export function useRedux(
  initialState: Redux.PreloadedState<StateValue>,
): Redux.Store {
  const store = React.useMemo(
    () => initializeStore(initialState),
    [initialState],
  );
  return store;
}
