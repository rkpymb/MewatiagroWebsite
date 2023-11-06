/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Mstyles from '../../Style/home.module.css';
import { FiPhoneCall, FiArrowRight } from "react-icons/fi";
import Lottie from 'react-lottie'
import * as animationData from '../../Data/Lottie/arrowani.json'
import EnqDialog from '../components/ModalsDialog/EnqDialog'
const data = [
  {
    id: 1,
    label: 'Experienced assistants',
  },
  {
    id: 2,
    label: 'Cost-effective solutions',
  },
  {
    id: 3,
    label: 'On-Time Delivery',
  },
  {
    id: 4,
    label: 'Personalized Support',
  },

];

const WorkHard = () => {
  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Box as="section" variant="section.workHard">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <div>
              <div>
                <h1 style={{ margin: 0 }}>Why Choose Hunt VAS?</h1>
                <div>
                  <span>
                    Welcome to Hunt VAS, where we're more than just virtual assistants. We're your trusted partners in achieving business success. Our commitment to your growth is unwavering, and we achieve this through a unique blend of personalized support, experienced assistants, cost-effective solutions, and on-time delivery.

                  </span>
                </div>
              </div>
            </div>
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Image src={`/img/check.png`} width="16" height="16" alt="" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
            <div >
              <small>At Hunt VAS, we don't believe in one-size-fits-all solutions. We offer personalized support that aligns with your unique needs and objectives. Our virtual assistants work closely with you to understand your business inside and out.
              </small>

            </div>
            <div >
              <small>
                With Hunt VAS as your partner, you're not just outsourcing tasks; you're gaining a dedicated team committed to your success. Experience the difference today and take the next step towards achieving your business goals.
              </small>

            </div>
          
            <div className={Mstyles.OnlyMobsssile}>
              <div style={{ height: '20px' }}></div>
              <div className={Mstyles.sec1itemBoxButonbox2}>
              <EnqDialog Type={false} product={null}/>
              </div>
              <div>
                <div style={{ height: '10px' }}></div>
                <div className={Mstyles.Lottiebztnbox}>
                  <Lottie options={defaultOptions}

                    height={null}
                    width={100}

                    isStopped={false}
                    isPaused={false} />
                </div>

              </div>
              <div style={{ height: '20px' }}></div>
            </div>

          </Box>
          <Box sx={styles.illustration}>
            <Image src={`/img/why1.png`} alt="img" />
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
      maxWidth: ['20px', null, null, '30px', null, null, '100%'],
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
