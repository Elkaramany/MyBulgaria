import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import AuthReducer from './Reducers/AuthReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'], // Adjust to match your slice name
};

const rootReducer = combineReducers({
    auth: AuthReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: true,
});

const persistor = persistStore(store);

const Redux = { persistor, store };

export * from './Reducers'

export default Redux;
