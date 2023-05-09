// Dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from 'react-native-error-boundary';

// Store
import { persistor, store } from '../../redux/store';

// Config
import { useInterceptor } from '../../config/interceptor';

export function ReduxStoreWrapper(
  Component: React.FC,
  props = {},
): JSX.Element {
  useInterceptor(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<></>}>
        <ErrorBoundary>
          <Component {...props} />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}
