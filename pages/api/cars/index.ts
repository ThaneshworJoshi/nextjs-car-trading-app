import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { fetchModel, fetchPaginatedCars } from '../../../lib/car';
import { getAsString } from '../../../utils/common';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const cars = await fetchPaginatedCars(req.query);

  return res.send(cars);
});

export default handler;
