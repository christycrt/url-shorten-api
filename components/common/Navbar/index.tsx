import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      <div className="lg:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
    </>
  );
};

export default Navbar;
