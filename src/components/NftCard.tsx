import React from "react";
import Image from "next/image";
import { useIntl } from "react-intl";

function NftCard({ nft }) {
  const mimeType = `${nft.meta.content[0].mimeType}`;
  const intl = useIntl();
  const openseaUrlParametters = nft.id.toString().split(":");
  const openseaUrl = `https://opensea.io/assets/matic/${openseaUrlParametters[1]}/${openseaUrlParametters[2]}`;
  return (
    <div className="mb-3 max-w-sm  rounded-lg border  shadow-md bg-gray-600 border-gray-500">
      {mimeType === "video/mp4" && (
        <video
          className="rounded-lg"
          autoPlay
          muted
          src={nft.meta.content[0].url}
        ></video>
      )}
      {mimeType !== "video/mp4" && (
        <div>
          <Image
            className="object-fill rounded-lg"
            width={382}
            height={211}
            src={nft.meta.content[0].url}
            alt={nft.meta.description}
          />
        </div>
      )}
      <div className="p-6 text-white text-bold text-center">
        {nft.meta.name}
      </div>
      <div className="text-center items-center">
          <a
            href={openseaUrl}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white font-bold py-2 px-4 rounded-full">
              {intl.formatMessage({ id: "page.blockchainSection.opensea" })}
            </button>
          </a>
      </div>
      {/*<div className="p-4 text-white text-center">{nft.meta.description}</div>*/}
    </div>
  );
}

export default NftCard;
