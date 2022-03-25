import Button from "../Button";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const NavbarMobile = () => {
  const [click, setClick] = useState<boolean>(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="relative">
      <ul className="flex justify-between items-center container pt-8 pb-6">
        <li>
          <img className="logo-navbar" src="images/logo.svg" alt="logo" />
        </li>
        <li onClick={handleClick}>
          <FaBars className="text-2xl text-grayish-violet" />
        </li>
      </ul>
      <div className={`absolute z-50 px-6 w-full ${click ? "" : "hidden"}`}>
        <div className="bg-dark-violet p-6 rounded-lg divide-y divide-white/20 text-white font-bold text-center">
          <ul className="pb-4">
            <li className="p-4 text-lg">Features</li>
            <li className="p-4  text-lg">Pricing</li>
            <li className="p-4  text-lg">Resouces</li>
          </ul>
          <ul className="py-4">
            <li className="p-4 text-lg">Login</li>
            <li className="pt-2 flex flex-col">
              <Button size="lg" radius="full">
                Sign up
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
