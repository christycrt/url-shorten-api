import Button from "./common/Button";
import FeatureCard from "./common/FeatureCard";
import ShortenLinkBox from "components/Intro/ShortenLinkBox";
import featureData from "../data/FeatureData.json";

const Features = () => {
  return (
    <>
      <div className="bg-grayish container mx-auto px-6 pb-20">
        <ShortenLinkBox />
        <p className="font-bold text-2xl text-center mb-6 text-very-dark-blue">
          Advanced Statistics
        </p>
        <p className="text-center text-grayish-violet mb-20">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        {featureData.map((item, key) => {
          return (
            <div key={key}>
              <div
                className={`${
                  key === 0 ? "hidden" : "flex mx-auto h-20 w-2 bg-cyan"
                }`}
              ></div>
              <FeatureCard data={item} />
            </div>
          );
        })}
      </div>
      <div className="boost-box">
        <p className="text-2xl font-bold text-white text-center mb-6">
          {" "}
          Boost your links today
        </p>
        <div className="flex justify-center">
          <Button onClick={() => console.log("Get Started")}>
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default Features;
