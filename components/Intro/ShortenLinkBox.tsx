import Button from "components/common/Button";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  url: string;
};

const ShortenLinkBox = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [shortenLinks, setShortenLinks] = useState<
    {
      url: string;
      shortenLink: string;
    }[]
  >([]);

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
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit}>
        <div className="shorten-box">
          <div>
            <input
              className="bg-white px-3 py-3 rounded-md h-[56px] mb-1 w-[100%]"
              type="text"
              placeholder="Shorten a link here..."
              {...register("url", { required: true })}
            />
            <p className="text-red italic text-sm">
              {errors.url && "Please add a link"}
            </p>
          </div>
          <Button type="submit">Shorten It!</Button>
        </div>
      </form>
      {shortenLinks.map((shortenLink) => {
        return (
          <div key={shortenLink.shortenLink} className="shorten-link-box">
            <p>{shortenLink.url}</p>
            <p>{shortenLink.shortenLink}</p>
            <Button>Copy</Button>
          </div>
        );
      })}
    </div>
  );
};

export default ShortenLinkBox;
