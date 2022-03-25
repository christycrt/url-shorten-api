import Button from "../common/Button";
import FeatureCard from "./FeatureCard";
import ShortenLinkList from "components/Features/ShortenLinkList";
import featureData from "../../data/FeatureData.json";

const Features = () => {
  return (
    <div className="bg-grayish">
      <div className="container pb-20">
        <ShortenLinkList />
        <p className="font-bold text-2xl text-center mb-6 text-very-dark-blue lg:text-3xl">
          Advanced Statistics
        </p>
        <p className="text-center text-grayish-violet mb-20 lg:px-80">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:relative">
          <div className="bg-cyan h-2 absolute w-full top-[45%] hidden lg:block"></div>
          {featureData.map((item, key) => {
            let paddingTop;
            switch (key) {
              case 1:
                paddingTop = "lg:pt-12";
                break;
              case 2:
                paddingTop = "lg:pt-24";
                break;
              default:
                paddingTop = "lg:pt-0";
                break;
            }
            return (
              <div className={`${paddingTop}`} key={key}>
                <div
                  className={`lg:hidden ${
                    key === 0 ? "hidden" : "flex mx-auto h-20 w-2 bg-cyan"
                  }`}
                ></div>
                <FeatureCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="boost-box">
        <p className="text-2xl font-bold text-white text-center mb-6 lg:text-3xl">
          {" "}
          Boost your links today
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            radius="full"
            onClick={() => console.log("Get Started")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
