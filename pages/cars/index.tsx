import Search from '../index';
import { Grid } from '@material-ui/core';
import { fetchCompanies, fetchModel, fetchPaginatedCars } from '../../lib/car';
import { stringify } from 'querystring';
import { getAsString } from '../../utils/common';
import CarPagination from '../../components/ui/CarPagination';
import { GetServerSideProps } from 'next';
import db from '../../utils/db';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useState } from 'react';
import deepEqual from 'fast-deep-equal';
import CarCard from '../../components/ui/CarCard';
import { CarModel, Company, Model } from '../../models/Car';

export interface CarListProps {
  companies: Company[];
  models: Model[];
  cars: CarModel[];
  totalPages: number;
}

const CarList = ({ companies, models, cars, totalPages }: CarListProps) => {
  const { query } = useRouter();
  const [serverQuery] = useState(query);
  const { data } = useSWR('/api/cars?' + stringify(query), {
    dedupingInterval: 15000,
    initialData: deepEqual(query, serverQuery)
      ? { cars, totalPages }
      : undefined,
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5} md={3} lg={2}>
        <Search companies={companies} models={models} singleColumn />
      </Grid>
      <Grid container item xs={12} sm={7} md={9} lg={10}>
        <Grid xs={12}>
          <CarPagination totalPages={data?.totalPages} />
        </Grid>
        {(data?.cars || []).map((car) => (
          <Grid key={car._id} xs={12} sm={6}>
            <CarCard car={car} />
          </Grid>
        ))}

        <Grid xs={12}>
          <CarPagination totalPages={data?.totalPages} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const company = getAsString(ctx.query.company);
  const [companies, models, pagination] = await Promise.all([
    fetchCompanies(),
    fetchModel(company),
    fetchPaginatedCars(ctx.query),
  ]);
  let { cars, totalPages } = pagination;
  cars = cars.map(db.convertDocToObject);

  // const companies = await fetchCompanies();
  // const models = await fetchModel(company);
  return {
    props: {
      companies,
      models,
      cars,
      totalPages,
    },
  };
};

export default CarList;
