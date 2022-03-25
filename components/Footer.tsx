import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const data = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

const Footer = () => {
  return (
    <div className="bg-very-dark-blue">
      <div className="flex flex-col text-center py-16 lg:container lg:grid lg:grid-cols-[4fr_2fr_2fr_2fr_2fr] lg:text-left">
        <div className="flex justify-center mb-16 lg:justify-start lg:mb-0">
          <div>
            <img
              className="logo-footer w-[121px] lg:h-auto"
              src="images/logo.svg"
              alt="logo"
            />
          </div>
        </div>
        {data.map((item) => {
          return (
            <div key={item.title}>
              <p className="font-bold text-white mb-6">{item.title}</p>
              <div className="flex flex-col text-gray space-y-2 mb-10">
                {item.links.map((link) => {
                  return <a className="hover:text-cyan cursor-pointer" key={link}>{link}</a>;
                })}
              </div>
            </div>
          );
        })}
        <div className="flex justify-center text-white space-x-6 lg:justify-end">
          <FaFacebookSquare className="text-2xl hover:text-cyan cursor-pointer" />
          <FaTwitter className="text-2xl hover:text-cyan cursor-pointer" />
          <FaPinterest className="text-2xl hover:text-cyan cursor-pointer" />
          <FaInstagram className="text-2xl hover:text-cyan cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
