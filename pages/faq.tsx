import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GetStaticProps } from 'next';
import { fetchFAQs } from '../lib/fqa';
import { FaqModel } from '../models/Faq';
import db from '../utils/db';

interface FaqProps {
  faqs: FaqModel[];
}

const Faq = ({ faqs }: FaqProps) => {
  return (
    <div>
      {faqs.map((faq) => (
        <Accordion key={faq._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const faqs = await fetchFAQs();

  return { props: { faqs: faqs.map(db.convertDocToObject) } };
};

export default Faq;
