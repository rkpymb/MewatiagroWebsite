import React, { useState, useEffect, useContext } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Mstyles from '../../../Style/home.module.css';
import { jsx, Box, Container } from 'theme-ui';
import Image from 'next/image'
import Contact from '../contact'
import EnqDialog from '../../components/ModalsDialog/EnqDialog'
import Lottie from 'react-lottie'
import * as animationData from '../../../Data/Lottie/arrowani.json'
import { Parallax, Background } from "react-parallax";
import Contactusbox from 'sections/Contactusbox'
export default function IndexPage() {
  const [Pname, setPname] = useState('Graphic Design');
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
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Best graphic Designing services : Hunt VAS"
          description="graphic design that breathes life into your ideas."
        />
        <div className={Mstyles.OnlyDesktop}>
          <img src='/img/s7.jpg' width='100%' />
        </div>
        <div className={Mstyles.OnlyMobile}>
          <img src='/img/sm7.jpg' width='100%' />
        </div>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.MainTitleCenter}>
            <h1>Best graphic Designing team matters for Brands</h1>
            <div className={Mstyles.MainTitleCenterDesc}>
              <span>
                At Hunt VAS, we specialize in graphic design that breathes life into your ideas. Our team of creative experts is dedicated to crafting visually stunning solutions tailored to your brand's unique personality. Let's create something amazing together.

              </span>
            </div>
          </div>
          <div>
            <div className={Mstyles.OnlyDesktop}>
              <div style={{ height: '20px' }}></div>
            </div>


            <div className={Mstyles.vSCounterbox}>
              <div className={Mstyles.Apptypegrid}>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/logob.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.ApptypegridItemText}>
                    <span>Brand Logo design</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/catalog.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.ApptypegridItemText}>
                    <span>Catalogue designs</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/social-mediaded.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.ApptypegridItemText}>
                    <span>Social media designs</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/wireframe.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.ApptypegridItemText}>
                    <span>Graphics for websites</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/ads.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.ApptypegridItemText}>
                    <span>Ads designs</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/magazine.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.ApptypegridItemText}>
                    <span>Books or magazines</span>
                  </div>
                </div>


              </div>

            </div>
            <div style={{ height: '50px' }}></div>
            <div className={Mstyles.sec1itemBoxButonbox}>

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
            <div style={{ height: '20px' }}></div>
          </div>
          <div className={Mstyles.OnlyDesktop}>
            <div style={{ height: '30px' }}></div>
          </div>



        </div>
        

        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.vShowitworksflexbox}>
            <div className={Mstyles.vShowitworksflexboxA}>
              <div className={Mstyles.GdVideo1}>
                <video className='videoTag' autoPlay loop muted>
                  <source src={`/videos/video3.mp4`} type='video/mp4' />
                </video>
              </div>
            </div>
            <div className={Mstyles.vShowitworksflexboxB}>
              <div >

                <span>Enhance your brand's visual identity with our Graphic Design services. Our team of skilled graphic designers is committed to creating captivating visuals that truly represent your brand.</span>
                <div style={{ height: '20px' }}></div>
                <h2>We are committed to serve your batter, hire us for your Graphics Designing Projects</h2>
              </div>
              <div style={{ height: '20px' }}></div>

              <div className={Mstyles.webtypegrid}>
                <div className={Mstyles.webtypegridItem}>
                  <div className={Mstyles.webtypegridItemA}>
                    <Image
                      src={`/img/checkmark.png`}
                      alt="image"

                      placeholder='blur'
                      width={20}
                      height={20}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.webtypegridItemB}>
                    <span>Creative Excellence</span>
                  </div>
                </div>
                <div className={Mstyles.webtypegridItem}>
                  <div className={Mstyles.webtypegridItemA}>
                    <Image
                      src={`/img/checkmark.png`}
                      alt="image"

                      placeholder='blur'
                      width={20}
                      height={20}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.webtypegridItemB}>
                    <span>Proven Expertise</span>
                  </div>
                </div>
                <div className={Mstyles.webtypegridItem}>
                  <div className={Mstyles.webtypegridItemA}>
                    <Image
                      src={`/img/checkmark.png`}
                      alt="image"

                      placeholder='blur'
                      width={20}
                      height={20}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.webtypegridItemB}>
                    <span>Affordable Pricing</span>
                  </div>
                </div>
                <div className={Mstyles.webtypegridItem}>
                  <div className={Mstyles.webtypegridItemA}>
                    <Image
                      src={`/img/checkmark.png`}
                      alt="image"

                      placeholder='blur'
                      width={20}
                      height={20}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                  <div className={Mstyles.webtypegridItemB}>
                    <span>Design Revisions</span>
                  </div>
                </div>
               
              </div>

            </div>
          </div>
        </div>
        <div style={{ height: '50px' }}></div>
        <div className={Mstyles.ColorServicesVS}>
        <div style={{ height: '50px' }}></div>
          <div className={Mstyles.MyContainer80}>
            <div className={Mstyles.vShowitworksflexbox}>
              <div className={Mstyles.vShowitworksflexboxA}>
              <div className={Mstyles.GdVideo2}>
                <video className='videoTag' autoPlay loop muted>
                  <source src={`/videos/video1.mp4`} type='video/mp4' />
                </video>
              </div>
              </div>
              <div className={Mstyles.vShowitworksflexboxB}>
              <div style={{ height: '20px' }}></div>
                <div>
                  <h2>HOW IT WORKS ?</h2>
                  <span>Increase your productivity with our talented virtual assistants</span>
                </div>
                <div style={{ height: '50px' }}></div>
                <div className={Mstyles.StepVSItem}>
                  <div className={Mstyles.StepVSItemA}>
                    <div className={Mstyles.StepVSItemACounter}>
                      <span>1</span>

                    </div>

                  </div>

                  <div className={Mstyles.StepVSItemB}>
                    <span>Creative Consultation</span>
                    <small>We start by understanding your vision and goals, laying the foundation for a tailored design strategy.
                    </small>

                  </div>
                </div>
                <div style={{ height: '50px' }}></div>
                <div className={Mstyles.StepVSItem}>
                  <div className={Mstyles.StepVSItemA}>
                    <div className={Mstyles.StepVSItemACounter}>
                      <span>2</span>

                    </div>

                  </div>
                  <div className={Mstyles.StepVSItemB}>
                    <span>Design Concept</span>
                    <small>Our team of experts brainstorm and craft unique design concepts, aligning them with your brand's identity.

                    </small>

                  </div>
                </div>
                <div style={{ height: '50px' }}></div>
                <div className={Mstyles.StepVSItem}>
                  <div className={Mstyles.StepVSItemA}>
                    <div className={Mstyles.StepVSItemACounter}>
                      <span>3</span>

                    </div>

                  </div>
                  <div className={Mstyles.StepVSItemB}>
                    <span>Refinement and Feedback</span>
                    <small>We collaborate with you to refine the chosen concept, ensuring it perfectly captures your vision.

                    </small>

                  </div>
                </div>
                <div style={{ height: '50px' }}></div>
                <div className={Mstyles.StepVSItem}>
                  <div className={Mstyles.StepVSItemA}>
                    <div className={Mstyles.StepVSItemACounter}>
                      <span>3</span>

                    </div>

                  </div>
                  <div className={Mstyles.StepVSItemB}>
                    <span>Finalization and Delivery</span>
                    <small>Once approved, we transform your design into a polished masterpiece and deliver it for your brand's success.
                    </small>

                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div style={{ height: '50px' }}></div>

        </div>
        <div style={{ height: '50px' }}></div>
            <Contactusbox Pname={Pname}/>
            <div style={{ height: '50px' }}></div>





      </Layout>
    </ThemeProvider>
  );
}
