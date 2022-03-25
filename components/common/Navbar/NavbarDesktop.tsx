import Button from "../Button";

const NavbarDesktop = () => {
  return (
    <nav className="text-gray font-bold flex justify-between container py-12">
      <ul className="flex items-center">
        <li className="mr-10 hover:text-very-dark-violet">
          <img className="logo-navbar" src="images/logo.svg" alt="logo" />
        </li>
        <li className="text-sm mr-8 hover:text-very-dark-violet">Features</li>
        <li className="text-sm mr-8 hover:text-very-dark-violet">Pricing</li>
        <li className="text-sm hover:text-very-dark-violet">Resouces</li>
      </ul>
      <ul>
        <ul className="flex items-center">
          <li className="text-sm mr-8 hover:text-very-dark-violet">Login</li>
          <li className="flex flex-col">
            <Button size="s-sm" radius="full">
              Sign up
            </Button>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
