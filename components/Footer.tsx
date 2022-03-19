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
    <div className="flex flex-col text-center bg-very-dark-blue py-16">
      <div className="flex justify-center mb-16">
        <img className="logo1 w-[121px]" src="images/logo.svg" alt="logo" />
      </div>
      {data.map((item) => {
        return (
          <div key={item.title}>
            <p className="font-bold text-white mb-6">{item.title}</p>
            <div className="flex flex-col text-gray space-y-2 mb-10">
              {item.links.map((link) => {
                return <a key={link}>{link}</a>;
              })}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center text-white space-x-6">
        <FaFacebookSquare className="text-2xl" />
        <FaTwitter className="text-2xl" />
        <FaPinterest className="text-2xl" />
        <FaInstagram className="text-2xl" />
      </div>
    </div>
  );
};

export default Footer;
