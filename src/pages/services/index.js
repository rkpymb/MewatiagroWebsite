import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Mstyles from '../../../Style/home.module.css';
import { jsx, Box, Container, Image } from 'theme-ui';
import ServicesGridlist from '../../components/List/ServicesGridlist'
import Contactusbox from 'sections/Contactusbox'

export default function IndexPage() {


  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="About us : Hunt VAS"
          description="Elevate Your Business with Hunt VAs - Virtual Assistant Experts"
        />
        <div className={Mstyles.OnlyDesktop}>
          <img src='/img/servisesTopimg.jpg' width='100%' />
        </div>
        <div className={Mstyles.OnlyMobile}>
          <img src='/img/sm3.jpg' width='100%' />
        </div>
        <div className={Mstyles.ColorServices2}>
          <div className={Mstyles.OnlyDesktop}>
            <div style={{ height: '50px' }}></div>
          </div>

          <div className={Mstyles.TitleCenter}>
            <h1>What We Offer ?</h1>
            <div>
              <span>
                Our services cover a wide range of areas, from administrative support to lead generation, calendar management, personal assistance, graphic design, and social media management. Let us handle the details while you focus on the big picture
              </span>
            </div>
          </div>
          <div className={Mstyles.MyContainer80}>
            <div className={Mstyles.OnlyDesktop}>
              <div style={{ height: '30px' }}></div>
            </div>
            <div className={Mstyles.Servisesgridbox}>
              <ServicesGridlist />
            </div>
            <div style={{ height: '50px' }}></div>
          </div>
         
        </div>
        <div style={{ height: '50px' }}></div>
            <Contactusbox />
            <div style={{ height: '50px' }}></div>
      </Layout>
    </ThemeProvider>
  );
}
