import nc from 'next-connect';
import Faq from '../../models/Faq';
import Car from '../../models/Car';
import data from '../../utils/data';
import db from '../../utils/db';
const handler = nc({ onError });

handler.get(async (req, res) => {
  await db.connect();

  await Car.deleteMany();
  await Car.insertMany(data.cars);

  await Faq.deleteMany();
  await Faq.insertMany(data.faq);

  await db.disconnect();
  res.send({ message: 'Seeded successfully' });
});

function onError(err, req, res, next) {
  res.status(500).end(err.toString());
}

export default handler;
