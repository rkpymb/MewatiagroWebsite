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

export default function IndexPage() {
  const [Pname, setPname] = useState('App Delevopment');
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
          title="App development & design services : Hunt VAS"
          description="Create Your App and Be 10X Accessible To New Customers"
        />
        <div className={Mstyles.OnlyDesktop}>
          <img src='/img/s6.jpg' width='100%' />
        </div>
        <div className={Mstyles.OnlyMobile}>
          <img src='/img/sm6.jpg' width='100%' />
        </div>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.MainTitleCenter}>
            <h1>We Build Apps That People Love</h1>
            <div className={Mstyles.MainTitleCenterDesc}>
              <span>
                Our creative and experienced team of mobile app developers, designers and digital specialists help brands and startups at all stages of their business. Get in touch — we have the know-how to create big moments on the small screen.

              </span>
            </div>
          </div>
          <div>
            <div className={Mstyles.OnlyDesktop}>
              <div style={{ height: '20px' }}></div>
            </div>

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
            
          </div>
          



        </div>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.vSCounterbox}>
            <div className={Mstyles.Apptypegrid}>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/shop.png`}
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
                  <span>eCommerce App</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/online-education.png`}
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
                  <span>Online Education</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/food-delivery.png`}
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
                  <span>Grocery App</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/building.png`}
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
                  <span>Real Estate</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/flight.png`}
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
                  <span>Tour & Travels</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/taxi.png`}
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
                  <span>Taxi Booking</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/medical-team.png`}
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
                  <span>Health Care</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/joystick.png`}
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
                  <span>Gaming App</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/restaurant.png`}
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
                  <span>Restaurant App</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/asset-management.png`}
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
                  <span>Finance App</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/event.png`}
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
                  <span>Event App</span>
                </div>
              </div>
              <div className={Mstyles.ApptypegridItem}>
                <div className={Mstyles.ApptypegridItemImg}>
                  <Image
                    src={`/img/on-demand.png`}
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
                  <span>On-Demand App</span>
                </div>
              </div>

            </div>
          
          </div>


        </div>


        <div className={Mstyles.dd}>
          <div className={Mstyles.OnlyDesktop}>
            <div style={{ height: '30px' }}></div>
          </div>

          <div className={Mstyles.HowWorksWebdevBox}>
            <div className={Mstyles.MainTitleCenter}>
              <h1>How it Works</h1>
              <div className={Mstyles.MainTitleCenterDesc}>
                <span>
                  Web development is a complex process that involves creating and maintaining websites and web applications. Here are the steps involved in web development:
                </span>
              </div>
            </div>
            <div style={{ height: '30px' }}></div>
            <Parallax
              strength={200}
              renderLayer={(percentage) => (
                <div>
                  <div
                    style={{
                      position: "absolute",
                      background: `rgba(255, 125, 0, ${percentage * 1})`,
                      left: "50%",
                      top: "50%",
                      borderRadius: "50%",
                      transform: "translate(-50%,-50%)",
                      width: percentage * 2000,
                      height: percentage * 2000
                    }}
                  />

                </div>
              )}
            >
              <div style={{ minHeight: 100 }}>
                <div className={Mstyles.insideStyles}>
                  <div className={Mstyles.WebhWItem}>

                    <div className={Mstyles.WebhWItemB}>
                      <div><h1>Planning & Designing</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>User Stories / Sprint Planning</li>
                        <li>UI Design</li>
                        <li>Wireframes</li>
                        <li>Prototype</li>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </Parallax>
            <Parallax
              strength={200}
              renderLayer={(percentage) => (
                <div>
                  <div
                    style={{
                      position: "absolute",
                      background: `rgba(108, 106, 255, ${percentage * 1})`,
                      left: "50%",
                      top: "50%",
                      borderRadius: "50%",
                      transform: "translate(-50%,-50%)",
                      width: percentage * 2000,
                      height: percentage * 2000
                    }}
                  />

                </div>
              )}
            >
              <div style={{ minHeight: 100 }}>
                <div className={Mstyles.insideStyles}>
                  <div className={Mstyles.WebhWItem}>

                    <div className={Mstyles.WebhWItemB}>
                      <div><h1>Development & Testing</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Sprint Planning</li>

                        <li>Coding</li>
                        <li>Quality Assurance & Testing</li>
                        <li>Integration with existing tools</li>
                        <li>Hardening Optimisations & Refactoring</li>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </Parallax>
            <Parallax
              strength={200}
              renderLayer={(percentage) => (
                <div>
                  <div
                    style={{
                      position: "absolute",
                      background: `rgba(245, 173, 131, ${percentage * 1})`,
                      left: "50%",
                      top: "50%",
                      borderRadius: "50%",
                      transform: "translate(-50%,-50%)",
                      width: percentage * 2000,
                      height: percentage * 2000
                    }}
                  />

                </div>
              )}
            >
              <div style={{ minHeight: 100 }}>
                <div className={Mstyles.insideStyles}>
                  <div className={Mstyles.WebhWItem}>

                    <div className={Mstyles.WebhWItemB}>
                      <div><h1>Launch & Traction</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Publishing your App</li>
                        <li>User Guidlines</li>
                        <li>Education & Training</li>
                      

                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </Parallax>
            <Parallax
              strength={200}
              renderLayer={(percentage) => (
                <div>
                  <div
                    style={{
                      position: "absolute",
                      background: `rgba(249, 231, 159, ${percentage * 1})`,
                      left: "50%",
                      top: "50%",
                      borderRadius: "50%",
                      transform: "translate(-50%,-50%)",
                      width: percentage * 2000,
                      height: percentage * 2000
                    }}
                  />

                </div>
              )}
            >
              <div style={{ minHeight: 100 }}>
                <div className={Mstyles.insideStyles}>
                  <div className={Mstyles.WebhWItem} style={{ color: 'black' }}>

                    <div className={Mstyles.WebhWItemB}>
                      <div><h1>Maintain & Iterate</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Support & Maintenance</li>
                        <li>New feature updates & iterations</li>
                        <li>Manage Optimisations and user experience</li>
                        <li>All Done 👍</li>

                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </Parallax>
            
          </div>
        </div>

        <div style={{ height: '20px' }}></div>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.MainTitleCenter}>
            <h1>Usage of latest technology</h1>
            <div className={Mstyles.MainTitleCenterDesc}>
              <span>
                Our experts employ the latest state-of-the-art fast-paced, fun and immersive technology to deliver a world-class user experience for all App. Our technical team of experts are fully conversant with the newest technologies such as <i>React native, Java,Swift, Dart, Node Js</i> to make the App very relevant and with the times. We have an eye towards building awareness, greater conversions and boosting customer retention.
              </span>
            </div>
          </div>

          <div className={Mstyles.OnlyDesktop}>
            <div style={{ height: '30px' }}></div>
          </div>
          <div className={Mstyles.vSCounterbox}>
            <div className={Mstyles.VasGrid3}>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/reactnative.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/swift.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/Flutter.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/java.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/dart.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/node-js.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/laravel.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/microsoft-dot-net.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/php.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
             
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/css.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/html.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/js.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/react.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/jquery.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>
              <div className={Mstyles.VasGrid3item} >
                <div className={Mstyles.VasGrid3itemimg} >
                  <Image
                    src={`/img/angular.png`}
                    alt="image"
                    layout="responsive"
                    placeholder='blur'
                    width={100}
                    height={50}
                    quality={100}
                    blurDataURL={blurredImageData}

                  />

                </div>
              </div>


            </div>
            <div style={{ height: '50px' }}></div>
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
                <img src={`/img/ecommerce-app.gif`} width='100%' />
                </div>
              </div>
            </div>
            <div className={Mstyles.vShowitworksflexboxB}>
              <div>

                <div className={Mstyles.TitleCenter}>
                  <h1>Let's build Your Dream Project together</h1>
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

      </Layout>
    </ThemeProvider>
  );
}
