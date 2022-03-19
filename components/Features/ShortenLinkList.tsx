import InputLinkBox from "./InputLinkBox";
import ShortenLinkBox from "./ShortenLinkBox";
import { useState } from "react";

const ShortenLinkList = () => {
  const [shortenLinks, setShortenLinks] = useState<
    {
      url: string;
      shortenLink: string;
    }[]
  >([]);

  return (
    <div className="space-y-6">
      <InputLinkBox
        shortenLinks={shortenLinks}
        setShortenLinks={setShortenLinks}
      />
      {shortenLinks.map((shortenLink) => {
        return (
          <ShortenLinkBox
            key={shortenLink.shortenLink}
            shortenLink={shortenLink}
          />
        );
      })}
    </div>
  );
};

export default ShortenLinkList;
