import Navbar from '@/components/Navbar';

const MainContainer = ({ children }) => {
    return (
        <div className='flex flex-row w-screen'>
            <Navbar/>
            { children }
        </div>
    )
}

export default MainContainer;