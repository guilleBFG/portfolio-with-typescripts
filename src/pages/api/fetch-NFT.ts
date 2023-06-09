// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { AnkrProvider } from "@ankr.com/ankr.js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { nftWallet } = req.query;

    const provider = new AnkrProvider(process.env.NEXT_ANKR as string);

    const { assets } = await provider.getNFTsByOwner({
      walletAddress: nftWallet as string,
    });
    res.status(200).json({ items: assets });
  } catch (error) {
    res.status(500).json({ items: [] });
  }
}
