import Navbar from '@/components/Navbar';

const MainContainer = ({ children }) => {
    return (
        <div className='flex lex-row'>
            <Navbar/>
            { children }
        </div>
    )
}

export default MainContainer;