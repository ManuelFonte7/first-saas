import Logo from "../icons/logo";

const Navbar = () => {
    return (
    <div className="bg-white">
        <div className="flex max-w-7xl mx-auto p-8 items-center">
            <div className="flex-1"><div className="w-60"><Logo /></div></div>
            <div>Login</div>
        </div>
    </div>
    
    )
};

export default Navbar;