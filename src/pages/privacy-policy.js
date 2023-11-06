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
          description="Elevate Your Business with Hunt VAs - Virtual Assistant Experts"
        />

        <div className={Mstyles.MyContainer80full}>

          <div className={Mstyles.TitleC}>
            <div className={Mstyles.MyContainer80fullTopDevider}></div>
            <h1> Privacy Policy
            </h1>
            <div className={Mstyles.TitleCenterDesc}>
              <p>
                At Hunt VAs, we are committed to protecting your privacy and maintaining the confidentiality of your personal and business information. Our Privacy Policy outlines the measures and practices we have in place to ensure the security of your data and the principles by which we operate.

              </p>

              <p>
                Information Collection: We detail the types of information we collect, such as contact details and account information, and the purposes for which it is used.
              </p>


              <p>
                Data Security: Our Privacy Policy explains the security measures in place to safeguard your information from unauthorized access or disclosure.

              </p>


              <p>
                Data Usage: We specify how your data is used to improve our services and deliver a personalized experience to you.

              </p>


              <p>
                Third-Party Sharing: If applicable, we clarify any circumstances under which your information may be shared with third parties.

              </p>


              <p>
                Your Choices: We describe the options and controls you have over your data, such as updating your preferences or opting out of certain communications.

              </p>

              <p>
                Contact Information: For any inquiries or concerns regarding your privacy, we provide contact information for our privacy team.

              </p>



              <p>
                Our Privacy Policy reflects our commitment to transparency, ensuring that you have a clear understanding of how we handle your data.

              </p>




            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
