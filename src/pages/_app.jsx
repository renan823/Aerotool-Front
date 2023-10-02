import MainContainer from '@/components/MainContainer';
import '../styles/globals.css';
import { store, persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import dotenv from 'dotenv';
dotenv.config()

function MyApp ({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainContainer>
                    <Component { ...pageProps }/>
                </MainContainer>
            </PersistGate>
        </Provider>
    )
}

export default MyApp;