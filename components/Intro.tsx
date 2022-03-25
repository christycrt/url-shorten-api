import Button from "./common/Button";

const Intro = () => {
  return (
    <div className="pb-44 lg:h-[90vh] lg:pb-0 overflow-x-hidden pt-[89px] lg:pt-0 lg:flex lg:items-center">
      <div className="lg:container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-14 lg:items-center">
          <div className="pl-6 overflow-x-hidden lg:col-span-5 lg:order-last lg:overflow-x-visible lg:pl-0">
            <img
              className="w-[150%] mb-10 lg:w-[160%] lg:mb-0"
              src="images/illustration-working.svg"
              alt="illustration-working"
            />
          </div>
          <div className="container text-center lg:col-span-7 lg:px-0 lg:text-left">
            <p className="font-bold text-3xl text-very-dark-blue mb-4 lg:text-4xl lg:tracking-tight">
              More than just shorter links
            </p>
            <p className=" text-grayish-violet mb-6 text-lg lg:pr-32">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                radius="full"
                onClick={() => {
                  console.log("Get Started");
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
