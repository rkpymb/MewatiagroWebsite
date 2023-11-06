/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';

import Mstyles from '../../Style/home.module.css';
import { Contactinfo } from '../../Data/config'
import * as animationData from '../../Data/Lottie/arrowani.json'
import EnqDialog from '../components/ModalsDialog/EnqDialog'
import Lottie from 'react-lottie'


const Services = ({Pname}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className={Mstyles.MyContainer80}>

      <div className={Mstyles.TitleCenter}>
        <h1>Get in Touch with Us</h1>
        <div>
          <span>
            Contact us today to explore how Hunt VAS can enhance your business operations. We're here to provide the personalized support you need.
          </span>
        </div>
      </div>
      <div className={Mstyles.constactbox}>
        <div className={Mstyles.FlexboxContactItem}>
          <div>
            <Image src='/img/call.png' width='50' height='50' />

          </div>
          <div>
            <div><small>Call us</small></div>
            <span>{Contactinfo.ContactMobile}</span>
          </div>
        </div>
        <div className={Mstyles.FlexboxContactItem}>
          <div>
            <Image src='/img/envelope.png' width='50' height='50' />

          </div>
          <div>
            <div><small>Email us</small></div>
            <span>{Contactinfo.ContactEmail}</span>
          </div>
        </div>

      </div>
      <div className={Mstyles.CenterItem}>
      <div className={Mstyles.OnlyMobsssile}>
        <div style={{ height: '20px' }}></div>
        <div className={Mstyles.sec1itemBoxButonbox2}>
          <EnqDialog Type={false} product={Pname} />
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
       
      </div>
      </div>
     

    </div>
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
