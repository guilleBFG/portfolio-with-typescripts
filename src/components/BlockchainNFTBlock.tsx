import { useIntl } from "react-intl";
import NftCard from "./NftCard";
import SkeletonCard from "./SkeletonCard";
import useSWR from "swr";
import { User } from "../lib/typings";

const fetcher = (url) => fetch(url).then((res) => res.json());

function BlockchainNFTBlock( user : User) {
  const { data, nftLoaded } = useSWR(
    `../api/fetch-NFT?nftWallet=${user?.nftWallet}`,
    fetcher
  );

  const intl = useIntl();

  return (
    <div className="text-xl text-white font-bold tracking-wide z-2 bg-gray-800 border-gray-700">
      <div className="ml-3 text-xl text-white font-bold tracking-wide z-2 bg-gray-800 border-gray-700">
        {intl.formatMessage({ id: "page.blockchainSection.title" })}
      </div>
      {!data ? (
        <div className="ml-2 mt-2 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-gray-800 border-gray-700">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div className="ml-2 mt-2 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-gray-800 border-gray-700">
          {data.items.map((nft, index) => {
            return <NftCard nft={nft} key={nft.id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default BlockchainNFTBlock;
