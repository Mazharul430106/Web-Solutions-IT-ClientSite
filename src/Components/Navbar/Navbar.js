import Link from "next/link";
import logoImg from '../../assets/logo.png';
import Image from "next/image";

const Navbar = () => {

    const menuItems = <>
        <li><Link className=" hover:text-primary font-semibold px-3" href='/'>Home</Link></li>
        <li><Link className=" hover:text-primary font-semibold px-3" href='/About'>About</Link></li>
        <li><Link className=" hover:text-primary font-semibold px-3" href='/Services'>Services</Link></li>
        <li><Link className=" hover:text-primary font-semibold px-3" href='/Contact'>Contact</Link></li>
        <li><Link className=" hover:text-primary font-semibold px-3" href='/Register'>Register</Link></li>
        <li><Link className=" hover:text-primary font-semibold px-3 lg:pr-0 md:pr-0" href='/Login'>Login</Link></li>
    </>


    return (
        <div className="navbar shadow-lg py-5 z-10 px-[5%]" >
            <div className="navbar-start w-full ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="w-[60px] flex items-center justify-start">
                        <Image src={logoImg}></Image>
                    </div>
                    <Link href='/' className="text-2xl flex justify-end text-primary font-semibold">Web-Solutions-IT</Link>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;