import Logo from "../icons/logo";
import { Button } from "../ui/button";
import UserMenu from "./user-menu";

interface NavbarProps{
    isLoggedIn : boolean
};

const Navbar = ({isLoggedIn} : NavbarProps) => {
    return (
    <div className="bg-white">
        <div className="flex max-w-7xl mx-auto p-8 items-center">
            <div className="flex-1"><div className="w-32 md:w-52"><Logo /></div></div>
            <div>
                {isLoggedIn ? <UserMenu />: 
                    <Button>Login</Button>
                }
                
            </div>
        </div>
    </div>
    
    )
};

export default Navbar;