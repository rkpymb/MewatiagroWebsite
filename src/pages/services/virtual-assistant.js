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
export default function IndexPage() {
  const [Pname, setPname] = useState('Virtual Assistant');
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
          title="virtual Assistant : Hunt VAS"
          description="A Whole Remote Team, Now At Your Fingertips!"
        />
        <div className={Mstyles.OnlyDesktop}>
          <img src='/img/s4.jpg' width='100%' />
        </div>
        <div className={Mstyles.OnlyMobile}>
          <img src='/img/sm4.jpg' width='100%' />
        </div>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.MainTitleCenter}>
            <h1>Quality Talent @ Affordable Cost</h1>
            <div className={Mstyles.MainTitleCenterDesc}>
              <span>
                Welcome to our Virtual Assistant services, where we offer comprehensive support to simplify your workload and enhance productivity. Our team of skilled virtual assistants is adept at managing administrative tasks, facilitating lead generation, handling calendar management, and providing personal assistance tailored to your specific needs.
              </span>
            </div>
          </div>
          <div>
            <div className={Mstyles.OnlyDesktop}>
              <div style={{ height: '20px' }}></div>
            </div>

            <div className={Mstyles.sec1itemBoxButonbox}>

              <EnqDialog Type={false} product={Pname}  />
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
          <div className={Mstyles.vSCounterbox}>
            <div className={Mstyles.VasGrid1}>
              <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#fef0cc' }}>
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/cc.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Administrative Support</span>
                  <small>Our virtual assistants can efficiently manage your emails, schedule appointments, handle data entry, and more, allowing you to focus on your core business activities.</small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#e9dfff' }}>
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/lead.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Lead Generation</span>
                  <small>We specialize in identifying potential leads and nurturing them, ensuring a steady stream of prospective clients for your business.</small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#fef0cc' }}>
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/schedule.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Calendar Management</span>
                  <small> Let us take care of your calendar, ensuring that appointments, meetings, and important dates are organized and updated.</small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#b7ffe5' }}>
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/call-center.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Personal Assistance</span>
                  <small> We provide personal assistance services, allowing you to delegate tasks that would otherwise consume your valuable time.</small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#fef0cc' }}>
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/target.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Encourages Focus On High-priority Goals</span>
                  <small> We provide personal assistance services, allowing you to delegate tasks that would otherwise consume your valuable time.</small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#ffd9d8' }}>
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/list.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Assign Repetitive Tasks</span>
                  <small> Hire our skilled virtual assistants for spreadsheet creation to perform repetitive tasks without affecting productivity and leaving minimal room for errors. So, you can get your hands on them now!</small>

                </div>
              </div>
            </div>
            <div style={{ height: '50px' }}></div>
          </div>


        </div>
        <div className={Mstyles.ColorServicesVS}>
          <div className={Mstyles.MyContainer80}>
            <div className={Mstyles.vShowitworksflexbox}>
              <div className={Mstyles.vShowitworksflexboxA}>
                <div className={Mstyles.vShowitworksflexboxAImg}>
                  <Image
                    src={`/img/vsee.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={100}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />
                </div>
              </div>
              <div className={Mstyles.vShowitworksflexboxB}>

                <div className={Mstyles.vShowitworksflexboxBTitle}>
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
                    <span>  HIRE A REMOTE WORKER</span>
                    <small>Send us a message to get started. We will setup a video call to discuss your business and remote worker needs. We'll then send you a list of a few great candidates from our amazing team of workers.

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
                    <span>  COACH YOUR WORKER</span>
                    <small>Give the worker details and train them on exactly what you want them to do. Our workers have expert level english skills and are very fast learners.

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
                    <span>  GROW YOUR BUSINESS</span>
                    <small>Effectively outsourcing work to remote professionals gives you more time to focus on your business. We've had clients see 10x revenue growth in as little as one month.

                    </small>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        
        <div className={Mstyles.Dotbg}> 
        <div className={Mstyles.MyContainer80}>
        <div style={{ height: '20px' }}></div>
          <div className={Mstyles.MainTitleCenter}>
            <h1>AREAS OF EXPERTISE</h1>
            <div className={Mstyles.MainTitleCenterDesc}>
              <span>
                We specialize in handling a wide variety of tasks
              </span>
            </div>
          </div>

          <div className={Mstyles.OnlyDesktop}>
            <div style={{ height: '30px' }}></div>
          </div>
          <div className={Mstyles.vSCounterbox}>
            <div className={Mstyles.VasGrid1}>
              <div className={Mstyles.VasGrid1Item2} >
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/social-media.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Social Media</span>
                  <small>Social Media management, scheduling, and advertising. </small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item2} >
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/analysis.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Research</span>
                  <small>Researching competition, business opportunities, or custom tasks. </small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item2} >
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/typing.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Data Entry</span>
                  <small>Updating spreadsheets, reviewing data, creating reports, CRM entry.  </small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item2} >
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/shopping.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>eCommerce</span>
                  <small>Oberlo and Dropified order processing, Shopify management website order management. </small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item2} >
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/ccs.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Customer Support</span>
                  <small>Email support, phone support, exchanges, returns, etc. </small>

                </div>
              </div>
              <div className={Mstyles.VasGrid1Item2} >
                <div className={Mstyles.VasGrid1ItemA}>
                  <div className={Mstyles.VasGrid1ItemAImg}>
                    <Image
                      src={`/img/sales.png`}
                      alt="image"
                      layout="responsive"
                      placeholder='blur'
                      width={100}
                      height={100}
                      quality={100}
                      blurDataURL={blurredImageData}

                    />
                  </div>
                </div>
                <div className={Mstyles.VasGrid1ItemB}>
                  <span>Sales</span>
                  <small>Email outreach, inbound and outbound phone sales, lead generation </small>

                </div>
              </div>

            </div>
            <div style={{ height: '50px' }}></div>
          </div>


        </div>
        </div>
       
        <div className={Mstyles.OnlyDesktop}>
          <div style={{ height: '50px' }}></div>
        </div>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.vShowitworksflexbox2}>
            <div className={Mstyles.vShowitworksflexboxA}>
              <div className={Mstyles.Mobilepadding10}>
                <div className={Mstyles.vShowitworksflexboxAImg}>
                  <Image
                    src={`/img/img-03.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={100}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />
                </div>
              </div>
            </div>
            <div className={Mstyles.vShowitworksflexboxB}>
              <div>

                <div className={Mstyles.TitleCenter}>
                  <h1>Get Started Today </h1>
                  <div>
                    <span>
                      Contact us today to explore how Hunt VAs can enhance your business operations. We're here to provide the personalized support you need.
                    </span>
                  </div>
                </div>

                <div className={Mstyles.constactbox}>
                  <div className={Mstyles.FlexboxContactItem2}>
                    <div>
                      <Image src='/img/call.png' width='50' height='50' />

                    </div>
                    <div>
                      <div><small>Call us</small></div>
                      <span>+14124455745</span>
                    </div>
                  </div>
                  <div className={Mstyles.FlexboxContactItem2}>
                    <div>
                      <Image src='/img/envelope.png' width='50' height='50' />

                    </div>
                    <div>
                      <div><small>Email us</small></div>
                      <span>hi@huntvas.com</span>
                    </div>
                  </div>

                </div>
                <div>
                  <div style={{ height: '20px' }}></div>
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
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '150px' }}></div>

      </Layout>
    </ThemeProvider>
  );
}
