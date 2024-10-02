import Image from "next/image";
import logo from "./logo.png";

const Logo = () => {
    return (
        <Image src={logo} alt="Logo" width={500} height={500} />
    )
};

export default Logo;