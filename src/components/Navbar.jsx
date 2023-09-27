import Link from 'next/link';
import { User, Gear, PaperPlaneTilt, Wrench, Bell, SquaresFour } from '@phosphor-icons/react';

const NavbarItem = (props) => {
    
}

const Navbar = (props) => {

    return (
        <div className='bg-primaryLight flex flex-col p-1 justify-around w-fit h-screen items-center'>
            <div className='bg-primary bg-gradient-to-b from-primary to-accent rounded-full p-3'>
                <Link href='/profile'>
                    <User color='white' size={24} weight='fill'/>
                </Link>
            </div>
            <div className='flex flex-col justify-around p-2 my-10'>
                <Link href='/dashboard' className='my-5 p-2 rounded-md'>
                    <SquaresFour color='#4E54DA' size={36} weight='fill'/>
                </Link>
                <Link href='/requests' className='my-5 p-2 rounded-md'>
                    <PaperPlaneTilt color='#4E54DA' size={36} weight='fill' />
                </Link>
                <Link href='/tools' className='my-5 p-2 rounded-md'>
                    <Wrench color='#4E54DA' size={36} weight='fill'/>
                </Link>
                <Link href='events' className='my-5 p-2 rounded-md'>
                    <Bell color='#4E54DA' size={36} weight='fill'/>
                </Link>
            </div>
            <div>
                <Link href='/settings'>
                    <Gear color='#4E54DA' size={36} weight='fill'/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;