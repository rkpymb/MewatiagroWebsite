/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';
import icon3 from 'assets/images/icons/3.png';
import icon4 from 'assets/images/icons/4.png';
import icon5 from 'assets/images/icons/5.png';
import icon6 from 'assets/images/icons/6.png';

const data = [
  {
    id: 1,
    icon: 'https://api.toladukan.com/images/1697556974041-19379764.png',
    path: '#!',
    title: 'Virtual Assistant',
    description: `Simplify Your Workload with Skilled Virtual Assistants `,
  },
  {
    id: 2,
    icon: 'https://api.toladukan.com/images/1697555900470-851758365.png',
    path: '#!',
    title: 'Webiste Development',
    description: `Switch to online and grow worldwide with your own website `,
  },
  {
    id: 3,
    icon: 'https://api.toladukan.com/images/1697557114692-949721824.png',
    path: '#!',
    title: 'App Delevopment',
    description: `Turn Your Idea into a Mobile App, IOS and Android App development`
  },
  {
    id: 4,
    icon: 'https://api.toladukan.com/images/1697557222465-745840941.png',
    path: '#!',
    title: 'Graphic Design',
    description: `Complete Graphic Design services with Best Graphics Designer's Team`,
  },
  {
    id: 5,
    icon: 'https://api.toladukan.com/images/1697557431001-542998526.png',
    path: '#!',
    title: 'Social media management',
    description: `Get your info tests delivered at home collect a sample from the your task.`,
  },
  {
    id: 6,
    icon: 'https://api.toladukan.com/images/1697557584879-822219360.png',
    path: '#!',
    title: 'Video Ads',
    description: `We create Video Ads with realhuman voiceover for your Brand`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" variant="section.ultimateFeatures">
      <Container>
        <SectionHeading
          
          title="What We Offer ?"
          description="Our services cover a wide range of areas, from administrative support to lead generation, calendar management, personal assistance, graphic design, and social media management. Let us handle the details while you focus on the big picture"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [60, 60, 60, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, 260, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
