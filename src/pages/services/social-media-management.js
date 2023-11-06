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
  const [Pname, setPname] = useState('Social media management');
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
          title="Social media management services : Hunt VAS"
          description="In today's digital era, social media is a powerful platform for engaging with your audience and promoting your brand. Our Social Media Management services are designed to boost your online presence and help you interact effectively with your customers."
        />
        <div className={Mstyles.OnlyDesktop}>
          <img src='/img/s8.jpg' width='100%' />
        </div>
        <div className={Mstyles.OnlyMobile}>
          <img src='/img/sm8.jpg' width='100%' />
        </div>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.MainTitleCenter}>
            <h1>Focus on your business, let us handle your Social media platform to 10X growth</h1>
            <div className={Mstyles.MainTitleCenterDesc}>
              <span>
                In today's digital era, social media is a powerful platform for engaging with your audience and promoting your brand. Our Social Media Management services are designed to boost your online presence and help you interact effectively with your customers.


              </span>
            </div>
          </div>
          <div>

            <div className={Mstyles.MainTitleCenter}>
              <h2>What does Social Media Management include?</h2>
              <div className={Mstyles.OnlyDesktop}>
                <div style={{ height: '20px' }}></div>
              </div>
            </div>

            <div className={Mstyles.vSCounterbox}>
              <div className={Mstyles.Apptypegrid}>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/brand.png`}
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
                    <span>Digital Brand Strategy</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/strategy.png`}
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
                    <span>Channel Strategy</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/contentd.png`}
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
                    <span>Planning Content</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/copywriting.png`}
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
                    <span>Copywriting</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/creativity.png`}
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
                    <span>Creative Design</span>
                  </div>
                </div>
                <div className={Mstyles.ApptypegridItem}>
                  <div className={Mstyles.ApptypegridItemImg}>
                    <Image
                      src={`/img/business-report.png`}
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
                    <span>Reporting & Analytics</span>
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
                  <source src={`/videos/video5.mp4`} type='video/mp4' />
                </video>
              </div>
            </div>
            <div className={Mstyles.vShowitworksflexboxB2}>
              <div >

                <span>Your customers use social media to be entertained, to pass the time, to talk about themselves. Advertisements and promotions are not what they are primarily here for. Shopping via social media or sales is a byproduct of the beautiful content you put out there or the personality that you create for your brand or the uses of the products that you generally talk about. Social media content is for all this. But, if you want to divert your leads to performing a particular action, you can use social media ads and boost posts as well for the various social media marketing objectives that you might have.</span>

              </div>
              <h3>Why Choose us ?</h3>


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
                    <span>Priority Support</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className={Mstyles.OnlyDesktop}>
          <div style={{ height: '50px' }}></div>
        </div>
        <Contactusbox Pname={Pname}/>
        <div style={{ height: '50px' }}></div>

      </Layout>
    </ThemeProvider>
  );
}
