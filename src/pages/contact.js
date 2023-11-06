import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Mstyles from '../../Style/home.module.css';
import { jsx, Box, Container, Image } from 'theme-ui';
import {Contactinfo} from '../../Data/config'
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="About us : Hunt VAS"
          description="Elevate Your Business with Hunt VAs - Virtual Assistant Experts"
        />

        <div className={Mstyles.MyContainer80full}>
          <div className={Mstyles.MyContainer80fullTopDevider}></div>
          <div className={Mstyles.TitleCenter}>
            <h1>Get in Touch with Us</h1>
            <div>
              <span>
                Contact us today to explore how Hunt VAs can enhance your business operations. We're here to provide the personalized support you need.
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
        </div>
      </Layout>
    </ThemeProvider>
  );
}
