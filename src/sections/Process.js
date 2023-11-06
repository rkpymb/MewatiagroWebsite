/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import Mystyles from '../../Style/home.module.css'

const data = [
  {
    id: 1,
    icon: 'https://api.toladukan.com/images/1697555900470-851758365.png',
    title: '1000+',
    description: `Specialized assistance`,
  },
  {
    id: 2,
    icon: 'https://api.toladukan.com/images/1697555900470-851758365.png',
    title: '25000+',
    description: `Hours saved`,
  },
  {
    id: 3,
    icon: 'https://api.toladukan.com/images/1697555900470-851758365.png',
    title: '4000+',
    description: `Worldwide Clients`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
         
          title="The Simple Path to Efficiency with Hunt VAs"
          description="Our straightforward process includes a discovery call, meeting your dedicated assistant, a free trial period, onboarding, and seamless delegation. Simplify your work process with Hunt VAs."
        
        />
       
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
    h2: {
      color: 'heading',
      fontSize: ['28px', '32px', '32px', '32px', '32px', '32px', '40px'],
    },
    P: {
      fontSize: ['16px', '16px', '16px', '16px', '14px', '16px'],
      maxWidth: [510],
      m: ['5px auto 0'],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'left', 'left', 'center', 'left'],
      maxWidth: [290, 260, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
