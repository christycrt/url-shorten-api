interface Props {
  data: {
    icon: string;
    title: string;
    detail: string;
  };
}
const FeatureCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="text-center relative">
      <div className="bg-dark-violet p-5 rounded-full inline-block absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={data.icon} alt="icon-brand" />
      </div>
      <div className="bg-white px-8 pb-8 pt-16 rounded-md">
        <p className="font-bold text-xl mb-4">{data.title}</p>
        <p className="text-grayish-violet">{data.detail}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
