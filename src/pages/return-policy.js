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
            <h1>Return Policy</h1>
            <div className={Mstyles.TitleCenterDesc}>
              <p>
                Our Return Policy is designed to ensure your satisfaction and provide clarity on the process for returns and refunds. At Hunt VAS, we value the trust you place in our services and are committed to providing the best possible experience. If, for any reason, you are not completely satisfied with our services, this policy outlines the steps to follow for returns and the conditions for eligible refunds.
              </p>


              <p>
                Eligibility: Our Return Policy specifies the criteria for eligible returns, which typically include service-related issues or discrepancies.
              </p>


              <p>
                Request Process: We detail the steps for initiating a return request, including providing the necessary information to expedite the process.
              </p>


              <p>
                Refund Procedures: The policy explains the procedures for refund processing, including the expected timeframe for reimbursement.

              </p>

              <p>
                Exclusions: We outline any specific situations or services that may be excluded from our Return Policy.
              </p>


              <p>
                Contact Information: In case you have any questions or need assistance with a return, we provide contact information to reach our dedicated support team.
              </p>


              <p>
                Our Return Policy is designed to provide you with a hassle-free process, ensuring that you are fully satisfied with our virtual assistant services.
              </p>

            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
