import styles from '../styles/Home.module.css';
import { GetServerSideProps } from 'next';
import { fetchCompanies, fetchModel } from '../lib/car';
import { Formik, Field, useField, useFormikContext } from 'formik';
import {
  Button,
  Grid,
  InputLabel,
  makeStyles,
  Paper,
  SelectProps,
} from '@material-ui/core';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import router, { useRouter } from 'next/router';
import { CarModel } from '../models/Car';
import { getAsString } from '../utils/common';
import useSWR from 'swr';
import Head from 'next/head';

export interface Company {
  _id: string;
  count: number;
}
export interface Model {
  _id: string;
  count: number;
}

export interface homeProps {
  companies: Company[];
  models: Model[];
  singleColumn: boolean;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    maxWidth: 500,
    padding: theme.spacing(3),
  },
}));

const prices = [500, 1000, 5000, 15000, 25000, 50000];

export default function Search({ companies, models, singleColumn }: homeProps) {
  const classes = useStyles();
  const { query } = useRouter();
  const smValue = singleColumn ? 12 : 6;

  const initialValues = {
    company: getAsString(query.company) || 'all',
    model: getAsString(query.model) || 'all',
    minPrice: getAsString(query.minPrice) || 'all',
    maxPrice: getAsString(query.maxPrice) || 'all',
  };

  return (
    <div>
      <Head>
        <title>Car Trader</title>
      </Head>
      {singleColumn ? <h1>Filter By</h1> : <h1>Filter Cars By</h1>}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          router.replace(
            {
              pathname: '/cars',
              query: { ...values, page: 1 },
            },
            undefined,
            { shallow: true }
          );
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Paper elevation={5} className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={smValue}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor='search-company'>Company</InputLabel>
                    <Field
                      name='company'
                      native
                      defaultValue=''
                      id='search-company'
                      as={Select}
                    >
                      <option value='all'>All Company</option>
                      {companies.map((company) => (
                        <option key={company._id} value={company._id}>
                          {company._id} ({company.count})
                        </option>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={smValue}>
                  <InputLabel id='test-select-label'>Models</InputLabel>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <ModelSelect
                      name='model'
                      models={models}
                      company={formik.values.company}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={smValue}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor='search-min-price'>
                      Min Price
                    </InputLabel>
                    <Field
                      name='minPrice'
                      native
                      defaultValue=''
                      id='search-min-price'
                      as={Select}
                    >
                      <option value='all'>No Min</option>
                      {prices.map((price) => (
                        <option key={price} value={price}>
                          {price}
                        </option>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={smValue}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor='search-max-price'>
                      Max Price
                    </InputLabel>
                    <Field
                      name='maxPrice'
                      native
                      defaultValue=''
                      id='search-max-price'
                      as={Select}
                    >
                      <option value='all'>No Max</option>
                      {prices.map((price) => (
                        <option key={price} value={price}>
                          {price}
                        </option>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant='contained' color='primary'>
                    Search For Car
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      </Formik>
    </div>
  );
}

export interface ModelSelectProps extends SelectProps {
  name: string;
  company: string;
  models: Model[];
}
export const ModelSelect = ({
  company,
  models,
  ...props
}: ModelSelectProps) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField({
    name: props.name,
  });

  const { data } = useSWR('/api/models?company=' + company, {
    dedupingInterval: 6000,
    onSuccess: (newValues) => {
      if (!newValues.map((a) => a.model).includes(field.value)) {
        setFieldValue('model', 'all');
      }
    },
  });

  const newModels = data || models;

  return (
    <Select
      native
      defaultValue=''
      id='grouped-native-select'
      {...field}
      {...props}
    >
      <option value='all'>All</option>
      {newModels.map((model) => (
        <option key={model._id} value={model._id}>
          {model._id} ({model.count})
        </option>
      ))}
    </Select>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const company = getAsString(ctx.query.company);
  const [companies, models] = await Promise.all([
    fetchCompanies(),
    fetchModel(company),
  ]);

  // const companies = await fetchCompanies();
  // const models = await fetchModel(company);
  return {
    props: { companies, models },
  };
};
