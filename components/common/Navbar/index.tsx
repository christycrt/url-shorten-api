import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  return (
    <>
      <div className="lg:hidden fixed w-full bg-white z-50">
        <NavbarMobile />
      </div>
      <div className="hidden lg:block fixed w-full bg-white z-50">
        <NavbarDesktop />
      </div>
    </>
  );
};

export default Navbar;
