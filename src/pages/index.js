import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import SliderHero from 'components/Homepage/SliderHero';
import Section1 from 'sections/Section1';
import Section2 from 'sections/Section2';
import Section3 from 'sections/Section3';
import Section4 from 'sections/Section4';
import Process from 'sections/Process';
import WorkHard from 'sections/work-hard';
import UltimateFeatures from 'sections/ultimate-features';
import Contactusbox from 'sections/Contactusbox';
import Blog from 'sections/blog';
import SubscribeUs from 'sections/subscribe-us';
import EnqDialog from '../components/ModalsDialog/EnqDialog'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Hunt VAS"
          description="Elevate Your Business with Hunt VAs - Virtual Assistant Experts"
        />
        <SliderHero/>

       
        <Section1 />
        <Section2 />

        <div style={{ height: '50px' }}></div>
        <Section3 />

        <Section4 />
        <Contactusbox />
        <div style={{ height: '80px' }}></div>
        
        <EnqDialog Type={true} product={null} />
      </Layout>
    </ThemeProvider>
  );
}
