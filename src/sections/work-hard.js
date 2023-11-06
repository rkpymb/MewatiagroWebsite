/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import workHard from 'assets/images/work-hard.png';
import emoji from 'assets/images/icons/emoji.png';
import check from 'assets/images/icons/check-circle.png';

const data = [
  {
    id: 1,
    label: 'Medical and vision',
  },
  {
    id: 2,
    label: 'Life insurance',
  },
  {
    id: 3,
    label: '400(k) savings',
  },
  {
    id: 4,
    label: 'HSAs and FSAs',
  },
  {
    id: 5,
    label: 'Commuter benefits',
  },
  {
    id: 6,
    label: '529 college savings',
  },
];

const WorkHard = () => {
  return (
    <Box as="section" variant="section.workHard">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              // emoji={emoji}
              sx={styles.heading}
              title="Experience the Difference with Our Active Assistants"
              description="With over 70 skilled virtual assistants and a track record of over 4.6k successful projects, Hunt VAs is your dependable partner for outsourcing tasks that keep your business moving forward."
              Services
            />

          </Box>
          <Box sx={styles.illustration}>
            <Image src={`https://api.toladukan.com/images/1697556551740-875561981.png`} alt="workHard" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkHard;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['none', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', '24px', null, '36px', '31px', '35px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', null, null, '30px', null, null, '100%'],
      top: ['4px', '8px'],
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  learnMore: {
    mt: [4],
    ml: [20, null, null, 0],
    textAlign: [null, null, null, 'center', 'left'],
  },
  illustration: {
    mb: ['50px', '50px', 0],
    mt: [0, 0, 0, '50px', 0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['100%', null, null, '80%', '100%'],
    },
  },
};
