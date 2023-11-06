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
  const [Pname, setPname] = useState('Video Making');
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
          title="Video Solution : Hunt VAS"
          description="Animation Video Production, Corporate Video Production Agency"
        />

        <Parallax bgImage={`/img/gray-abstract-wireframe-technology-background.jpg`} strength={300}>

          <div className={Mstyles.ParalaxContainerFull}>

            <div className={Mstyles.OnlyDesktop}>
              <div style={{ height: '150px' }}></div>
            </div>
            <div className={Mstyles.OnlyMobile}>
              <div style={{ height: '90px' }}></div>
            </div>
            <div className={Mstyles.ParalaxContainer}>

              <div >
                <div className={Mstyles.VideoFlexBox}>

                  <div className={Mstyles.VideoFlexBoxA}>

                    <div className={Mstyles.VideoFlexBoxATitle}>
                      <h1>Tell your Brand Stories with awesome videos</h1>
                      <span>Video content is a compelling tool for brand engagement, and our Video Ads services are designed to help you create a strong visual impact. We produce captivating video ads with real human voiceovers to set your brand apart in a crowded digital landscape.</span>
                    </div>
                    <div style={{ height: '20px' }}></div>
                    <div className={Mstyles.EnqBtnboxSide}>
                      <EnqDialog Type={false} product={Pname} />
                    </div>
                    <div>
                      <div style={{ height: '10px' }}></div>
                      <div className={Mstyles.Lottiebztnbox2}>
                        <Lottie options={defaultOptions}

                          height={null}
                          width={100}

                          isStopped={false}
                          isPaused={false} />
                      </div>

                    </div>
                    <div style={{ height: '20px' }}></div>
                  </div>
                  <div className={Mstyles.VideoFlexBoxB}>
                    <div className={Mstyles.VideoFlexBoxBVideo}>
                      <video className='videoTag' autoPlay loop controls>
                        <source src={`/videos/Project_11-04_4K_MEDIUM_FR30.mp4`} type='video/mp4' />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={Mstyles.OnlyDesktop}>
              <div style={{ height: '50px' }}></div>
            </div>
          </div>
        </Parallax>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.vSCounterbox}>
            <div className={Mstyles.Apptypegrid}>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/lecture.png`}
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
                  <span>Explainer Video</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/video-advertising.png`}
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
                  <span>Ads Video</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/digital-marketing.png`}
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
                  <span>App Video</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/makeup.png`}
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
                  <span>Product Videos</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/video-views.png`}
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
                  <span>Social Media Videos</span>
                </div>
              </div>

              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/presentation.png`}
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
                  <span>Whiteboard Videos</span>
                </div>
              </div>


            </div>

          </div>




        </div>
        <div className={Mstyles.OnlyDesktop}>
          <div style={{ height: '70px' }}></div>
        </div>
        <div className={Mstyles.OnlyMobile}>
          <div style={{ height: '30px' }}></div>
        </div>
        <div className={Mstyles.MyContainer80} style={{ backgroundColor: 'white' }}>
          <div className={Mstyles.vShowitworksflexbox}>
            <div className={Mstyles.vShowitworksflexboxA}>
              <div className={Mstyles.GdVideo1}>
                <video className='videoTag' autoPlay loop muted>
                  <source src={`/videos/videoedit.mp4`} type='video/mp4' />
                </video>
              </div>
            </div>
            <div className={Mstyles.vShowitworksflexboxB}>
              <div >

                <span>How we breathe life into your stories!</span>
               
                <h2>Devoted to create stunning design,
                  jaw-dropping animation, & delightful characters. Script writing Story Boarding Designing

                </h2>
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
                    <span>Unique Storytelling</span>
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
                    <span>Real Human Voiceovers</span>
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
                    <span>Engaging Visuals</span>
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
                    <span>Online and Offline Integration</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className={Mstyles.OnlyDesktop}>
          <div style={{ height: '50px' }}></div>
        </div>
        <div className={Mstyles.OnlyMobile}>
          <div style={{ height: '30px' }}></div>
        </div>
        <Contactusbox Pname={Pname}/>
          
            <div style={{ height: '50px' }}></div>






      </Layout>
    </ThemeProvider>
  );
}
