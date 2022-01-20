import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { fetchModel } from '../../../lib/car';
import { getAsString } from '../../../utils/common';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const company = getAsString(req.query.company);
  if (company) {
    const models = await fetchModel(company);

    return res.send(models);
  }
  return res.json({ ok: 'ok' });
});

export default handler;
