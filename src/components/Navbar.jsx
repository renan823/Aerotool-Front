import Link from 'next/link';
import { User, Gear, PaperPlaneTilt, Wrench, Bell, SquaresFour } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

const NavbarItem = (selected, route) => {
    const {to, icon} = route;
    
    if (selected) {
        return (
            <Link href={to} className='my-5 p-2 rounded-md bg-gradient-to-br from-accent to-primary'>
                {icon}
            </Link>
        )
    } else {
        return (
            <Link href={to} className='my-5 p-2 rounded-md'>
                {icon}
            </Link>
        )
    }
}

const Navbar = (props) => {

    const routes = { "/requests": "PaperPlaneTilt", "/tools": "Wrench", "/events": "Bell", "/profile": "User", "/settings": "Gear", "/": "SquaresFour" };
    const route = useRouter();
    const routeName = route.pathname;
    const routeNames = Object.keys(routes)

    return (
        <div className='bg-primaryLight flex flex-col p-1 justify-around w-fit h-screen items-center'>
            <div className='bg-primary bg-gradient-to-b from-primary to-accent rounded-full p-3'>
                <Link href='/profile'>
                    <User color='white' size={24} weight='fill' />
                </Link>
            </div>
            <div className='flex flex-col justify-around p-2 my-10'>
                <Link href='/dashboard' className='my-5 p-2 rounded-md'>
                    <SquaresFour color='#4E54DA' size={36} weight='fill' />
                </Link>
                <Link href='/requests' className='my-5 p-2 rounded-md'>
                    <PaperPlaneTilt color='#4E54DA' size={36} weight='fill' />
                </Link>
                <Link href='/tools' className='my-5 p-2 rounded-md'>
                    <Wrench color='#4E54DA' size={36} weight='fill' />
                </Link>
                <Link href='events' className='my-5 p-2 rounded-md'>
                    <Bell color='#4E54DA' size={36} weight='fill' />
                </Link>
            </div>
            <div>
                <Link href='/settings'>
                    <Gear color='#4E54DA' size={36} weight='fill' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar;