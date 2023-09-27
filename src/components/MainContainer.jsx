import Navbar from '@/components/Navbar';

const MainContainer = ({ children }) => {
    return (
        <>
            <Navbar/>
            { children }
        </>
    )
}

export default MainContainer;