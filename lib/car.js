import Car from '../models/Car';
import mongoose from 'mongoose';
import db from '../utils/db';
import { getNumberValue, getStringValue } from '../utils/common';

export const fetchCar = async (id) => {
  db.connect();
  if (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) return {};

    let result = await Car.findOne({ _id: id }).lean();
    db.disconnect();

    return result;
  } else {
    return {};
  }
};

export const fetchCompanies = async () => {
  db.connect();
  let results = await Car.aggregate([
    {
      $group: {
        _id: '$company',
        count: { $count: {} },
      },
    },
  ]);
  db.disconnect();

  return results;
};

export const fetchModel = async (company) => {
  db.connect();

  let results = await Car.aggregate([
    {
      $match: { company },
    },
    {
      $group: { _id: '$model', count: { $count: {} } },
    },
  ]);
  db.disconnect();

  return results;
};

const getQuery = (operator, key, value) => {
  let x = { [key]: { [operator]: value } };

  return x;
};

const createCarFetchquery = (company, model, minPrice, maxPrice) => {
  let query = [];

  if (company) query.push(getQuery('$eq', 'company', company));

  if (model) query.push(getQuery('$eq', 'model', model));

  if (minPrice && maxPrice)
    query.push({ price: { $gte: minPrice, $lte: maxPrice } });

  if (!minPrice && maxPrice) query.push(getQuery('$lte', 'price', maxPrice));

  if (minPrice && !maxPrice) query.push(getQuery('$gte', 'price', minPrice));

  if (query.length) return { $and: query };
  return {};
};

export const fetchPaginatedCars = async (query) => {
  const page = getNumberValue(query.page) || 1;
  const rowsPerPage = getNumberValue(query.rowsPerPage) || 4;
  const offSet = (page - 1) * rowsPerPage;
  const company = getStringValue(query.company);
  const model = getStringValue(query.model);
  const minPrice = getNumberValue(query.minPrice);
  const maxPrice = getNumberValue(query.maxPrice);

  db.connect();

  let carsFetchQuery = createCarFetchquery(company, model, minPrice, maxPrice);

  let carsPromise = Car.find({
    $and: [carsFetchQuery],
  })
    .skip(offSet)
    .limit(rowsPerPage)
    .lean();

  let totalDocPromise = Car.aggregate([
    {
      $match: {
        $and: [carsFetchQuery],
      },
    },
    {
      $group: { _id: null, count: { $sum: 1 } },
    },
  ]);

  let [cars, totalDoc] = await Promise.all([carsPromise, totalDocPromise]);

  let docCount = totalDoc.length > 0 ? totalDoc[0].count : 0;

  let totalPages = Math.ceil(docCount / rowsPerPage);
  db.disconnect();
  return { cars, totalPages };
};
