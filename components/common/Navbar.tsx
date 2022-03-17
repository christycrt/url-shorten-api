import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center container mx-auto px-6 pt-8 pb-6">
        <li>
          <img className="logo" src="images/logo.svg" alt="logo" />
        </li>
        <li>
          <FaBars className="text-2xl text-grayish-violet" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
