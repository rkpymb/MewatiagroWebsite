/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Flex, Button } from 'theme-ui';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink } from 'components/link';
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import DrawerNav from './drawer-nav';
import menuItems from './header.data';
import { FiPhoneCall } from "react-icons/fi";
import Link from 'next/link';
import Mstyles from '../../../Style/home.module.css'
import {Contactinfo} from '../../../Data/config'
export default function Header() {
  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
          <Box as="header" variant="layout.header">
            <Container>
              <Box sx={styles.headerInner}>
                <Logo sx={styles.logo} />
                <div className={Mstyles.navboxDesktop}>
                  <Link href='/' >
                    <div className={Mstyles.navlik}><span>Home</span></div>
                  </Link>
                  <Link href='/services' >
                    <div className={Mstyles.navlik}><span>Services</span></div>
                  </Link>
                  <Link href='/about' >
                    <div className={Mstyles.navlik}><span>About us</span></div>
                  </Link>
                  <Link href='/contact' >
                    <div className={Mstyles.navlik}><span>Contact us</span></div>
                  </Link>
                </div>
                <div className={Mstyles.CallMain}>
                  <div className={Mstyles.CallMainIcon}>
                    <FiPhoneCall size={20} />
                  </div>
                  <div className={Mstyles.CallMainText}>
                    <span>{Contactinfo.ContactMobile}</span>
                  </div>
                </div>
                <DrawerNav />
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    header: {
      position: 'fixed',
      left: 0,
      right: 0,
      py: 20,
      transition: 'all 0.3s ease-in-out 0s',
      '&.is-mobile-menu': {
        backgroundColor: 'white',
      },
    },
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        py: 13,
      },
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media only screen and (max-width: 768px)': {
      '.navbar': {
        position: 'absolute',
        top: '100%',
        backgroundColor: 'white',
        width: '100%',
        left: 0,
        p: '20px 30px',
        display: 'block',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        opacity: 0,
        visibility: 'hidden',
        minHeight: 'calc(100vh - 77px)',
        transition: 'all 0.3s ease-in-out 0s',
        '&.active': {
          opacity: 1,
          visibility: 'visible',
        },
        ul: {
          display: 'block',
          'li + li': {
            marginTop: 5,
          },
          a: {
            color: 'text',
          },
        },
      },
    },
  },
  logo: {
    mr: [null, null, null, null, 50],
  },


};
