
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest,
  res: NextApiResponse<any>) {
    const {nftWallet} = req.query;
    const fetchRes = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${nftWallet}`);
    const {items} = await fetchRes.json();
    res.status(200).json( {items} );
  }
  