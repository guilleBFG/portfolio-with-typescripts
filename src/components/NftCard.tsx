import React from "react";
import Image from "next/image";
import { useIntl } from "react-intl";

function NftCard({ nft }: any) {


  const nftTitle = nft.name.split("|")[0]

  const intl = useIntl();
  const openseaUrl = `https://opensea.io/assets/matic/${nft.contractAddress}/${nft.tokenId}`;


  const isVideo = (url: string) => {
    return url.includes("mp4");
  }

  console.log(openseaUrl)

  return (
    <div className="mb-3 max-w-sm  rounded-lg border  shadow-md bg-gray-600 border-gray-500">
      {isVideo(nft.imageUrl) && (
        <video
          className="rounded-lg"
          autoPlay
          muted
          src={nft.imageUrl}
        ></video>
      )}
      {!isVideo(nft.imageUrl) && (
        <div>
          <Image
            className="object-fill rounded-lg"
            width={382}
            height={211}
            src={nft.imageUrl}
            alt={nft.imageUrl}
            unoptimized={true}
          />
        </div>
      )}
      <div className="p-6 text-white text-bold text-center">
        {nftTitle}
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
    </div>
  );

}

export default NftCard;
