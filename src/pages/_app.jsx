import MainContainer from '@/components/MainContainer';
import '../styles/globals.css';

import dotenv from 'dotenv';
dotenv.config()

function MyApp ({ Component, pageProps }) {
    return (
        <MainContainer>
            <Component { ...pageProps }/>
        </MainContainer>
    )
}

export default MyApp;