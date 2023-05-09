// Dependencies
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

// Interfaces

// Reducers
import { reducers } from './reducers';
import { CountryInitialState } from './reducers/country/interfaces';

export interface ReduxStore {
  country: CountryInitialState;
}

const storeInitialState = {};

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  blacklist: [],
};

const persistReduce = persistReducer(persistConfig, reducers);

const reduxInmmutableStateInvariant =
  require('redux-immutable-state-invariant').default();

export const store = configureStore({
  reducer: persistReduce,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? [
          ...getDefaultMiddleware({ serializableCheck: false }),
          reduxInmmutableStateInvariant,
        ]
      : getDefaultMiddleware({
          serializableCheck: false,
        }),
  preloadedState: storeInitialState,
  devTools: __DEV__,
});

export const persistor = persistStore(store);
