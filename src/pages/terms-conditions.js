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
            <h1> Terms & Conditions

            </h1>
            <div className={Mstyles.TitleCenterDesc}>
              <p>
                Our Terms & Conditions outline the contractual agreement between you and Hunt VAS when using our virtual assistant services. These terms govern the rights, obligations, and responsibilities of both parties and are designed to provide clarity and ensure a fair and secure business relationship.


              </p>

              <p>
                Service Usage: We specify the permitted use of our services and any prohibited activities that may result in account termination.
              </p>


              <p>
                Account Registration: The Terms & Conditions explain the requirements and responsibilities related to account registration and maintenance.
              </p>


              <p>
                Service Changes: We clarify our right to make changes to our services and any associated implications for users.
              </p>


              <p>
                Payment and Billing: Details regarding payment methods, billing cycles, and charges are outlined in this section.

              </p>

              <p>

                Dispute Resolution: Our Terms & Conditions describe the process for dispute resolution, including steps for addressing issues or conflicts.
              </p>


              <p>
                Termination: We specify the circumstances under which we may terminate accounts and the associated consequences.
              </p>

              <p>
                By using our virtual assistant services, you agree to abide by the Terms & Conditions outlined in this policy.

              </p>










            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
