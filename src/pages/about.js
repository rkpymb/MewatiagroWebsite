import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Mstyles from '../../Style/home.module.css';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="About us : Hunt VAS"
          description="Elevate Your Business with Hunt VAS - Virtual Assistant Experts"
        />

        <div className={Mstyles.MyContainer80full}>
          
          <div className={Mstyles.TitleC}>
            <div className={Mstyles.MyContainer80fullTopDevider}></div>
            <h1>About us</h1>
            <div className={Mstyles.TitleCenterDesc}>
              <p>
              Welcome to Hunt VAS, where our story is about innovation, dedication, and a passion for excellence in the world of virtual assistant services. Founded on the principles of delivering unparalleled support and a commitment to our customers, we've evolved into a dynamic team of professionals who are here to enhance your business operations.

              </p>
              <p>
              Our journey began with a vision to simplify workloads and empower businesses. Today, we stand as a reliable partner in business success, with a focus on personalized support, experienced assistants, and cost-effective solutions. We're more than just virtual assistants; we're your dedicated partners in achieving your goals.

              </p>
              <p>
              At Hunt VAS, we're driven by the success of our customers. We're constantly striving to provide top-notch virtual assistant services that streamline operations and promote growth. Discover more about our story and how we can be part of yours as you explore our About Us page.

              </p>
            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
