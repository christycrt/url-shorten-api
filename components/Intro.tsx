import Button from "./common/Button";

const Intro = () => {
  return (
    <div className="pb-44">
      <div className="pl-6 overflow-x-hidden">
        <img
          className="w-[150%] mb-10"
          src="images/illustration-working.svg"
          alt="illustration-working"
        />
      </div>
      <div className="container mx-auto px-6">
        <p className="font-bold text-3xl text-center text-very-dark-blue mb-4">
          More than just shorter links
        </p>
        <p className="text-center text-grayish-violet mb-6 text-lg">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              console.log("Get Started");
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
