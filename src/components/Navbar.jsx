import { Link } from 'next/link';
import { User } from '@phosphor-icons/react';

const Navbar = (props) => {
    return (
        <div className='bg-teal-200 flex flex-col p-1 justify-around w-fit h-screen items-center'>
            <div className='bg-primary rounded-full p-3'>
                <User color='white' size={28} weight="fill"/>
            </div>
            <div className='bg-teal-500 flex flex-col p-2 justify-between'>
                <div className='bg-slate-500 rounded-sm w-24 h-24 m-2'></div>
                <div className='bg-slate-500 rounded-sm w-24 h-24 m-2'></div>
                <div className='bg-slate-500 rounded-sm w-24 h-24 m-2'></div>
                <div className='bg-slate-500 rounded-sm w-24 h-24 m-2'></div>
            </div>
            <div>
                <div className='bg-fuchsia-500 rounded-full w-24 h-24'></div>
            </div>
        </div>
    )
}

export default Navbar;