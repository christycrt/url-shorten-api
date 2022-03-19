import { useEffect, useState } from "react";

import Button from "components/common/Button";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  shortenLink: {
    url: string;
    shortenLink: string;
  };
}

const ShortenLinkBox: React.FC<Props> = ({ shortenLink }) => {
  const [copy, setCopy] = useState<boolean>(false);

  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 5000);
    }
  }, [copy]);

  return (
    <div className="shorten-link-box">
      <div>
        <p className="text-very-dark-blue border-b border-gray p-3">
          {shortenLink.url}
        </p>
      </div>
      <div className="flex flex-col p-4">
        <p className="text-cyan mb-3">https://{shortenLink.shortenLink}</p>
        <CopyToClipboard
          text={shortenLink.shortenLink}
          onCopy={() => setCopy(true)}
        >
          <Button size="sm" radius="base" disable={copy}>
            {copy ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShortenLinkBox;
