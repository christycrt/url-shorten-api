import { Dispatch, SetStateAction } from "react";

import Button from "components/common/Button";
import axios from "axios";
import { useForm } from "react-hook-form";

interface Props {
  shortenLinks: {
    url: string;
    shortenLink: string;
  }[];
  setShortenLinks: Dispatch<
    SetStateAction<
      {
        url: string;
        shortenLink: string;
      }[]
    >
  >;
}

type FormData = {
  url: string;
};

const InputLinkBox: React.FC<Props> = ({ shortenLinks, setShortenLinks }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${data.url}`)
      .then(function (response) {
        setShortenLinks((shortenLinks) => [
          ...shortenLinks,
          {
            url: data.url,
            shortenLink: response.data.result.short_link as string,
          },
        ]);
        setValue("url", "");
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="shorten-box">
        <div>
          <input
            className={`bg-white px-3 py-3 rounded-md h-[56px] mb-1 w-[100%] outline-none ${
              errors.url ? "error" : ""
            }`}
            type="text"
            placeholder="Shorten a link here..."
            {...register("url", { required: true })}
          />
          <p className="text-red italic text-sm">
            {errors.url && "Please add a link"}
          </p>
        </div>
        <Button type="submit" size="base" radius="base">
          Shorten It!
        </Button>
      </div>
    </form>
  );
};

export default InputLinkBox;
