import Link from "next/link";

const Navbar = () => {

    const menuItems = <>
        <li><Link className="px-3" href='/'>Home</Link></li>
        <li><Link className="px-3" href='/About'>About</Link></li>
        <li><Link className="px-3" href='/Services'>Services</Link></li>
        <li><Link className="px-3" href='/Contact'>Contact</Link></li>
        <li><Link className="px-3" href='/Register'>Register</Link></li>
        <li><Link className="px-3" href='/Login'>Login</Link></li>
    </>


    return (
        <div className="navbar bg-base-300 " >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link href='/' className="text-xl flex justify-end">Web-Solutions-IT</Link>
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