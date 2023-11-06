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
  const [Pname, setPname] = useState('Webiste Development');
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
          title="Website development & design services : Hunt VAS"
          description="Create Your Web Identity and Be 10X Accessible To New Customers"
        />
        <div className={Mstyles.OnlyDesktop}>
          <img src='/img/s5.jpg' width='100%' />
        </div>
        <div className={Mstyles.OnlyMobile}>
          <img src='/img/sm5.jpg' width='100%' />
        </div>
        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.MainTitleCenter}>
            <h1>Create Your Web Identity and Be 10X Accessible To New Customers, Hire Experienced Web Developers</h1>
            <div className={Mstyles.MainTitleCenterDesc}>
              <span>
                In today's digital landscape, a professional and user-friendly website is essential for expanding your reach and connecting with a global audience. Our Website Development services are designed to help you make a seamless transition to the online world.

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
            <div style={{ height: '20px' }}></div>
          </div>
          <div className={Mstyles.OnlyDesktop}>
            <div style={{ height: '30px' }}></div>
          </div>



        </div>
        <Parallax bgImage={`/img/19366.jpg`} strength={300}>
          <div style={{ height: '20px' }}></div>
          <div className={Mstyles.ParalaxContainerFull}>
            <div className={Mstyles.ParalaxContainer}>
              <h1>We build all types of websites for your business growth</h1>
              <span>One of our many award-winning services include website design and development, which essentially encompasses building websites and deploying them on the web. This entails the use of scripting languages at both the server end as well as at the client’s end.</span>
              <div style={{ height: '50px' }}></div>
              <div className={Mstyles.vSCounterbox}>
                <div className={Mstyles.VasGrid1}>
                  <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#fef0cc' }}>
                    <div className={Mstyles.VasGrid1ItemA}>
                      <div className={Mstyles.VasGrid1ItemAImg}>
                        <Image
                          src={`/img/web-development.png`}
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
                      <span>Website Development and Custom Designing</span>
                      <small>We build professional website for clients as well as control and manage the contents within the website.</small>

                    </div>
                  </div>
                  <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#e9dfff' }}>
                    <div className={Mstyles.VasGrid1ItemA}>
                      <div className={Mstyles.VasGrid1ItemAImg}>
                        <Image
                          src={`/img/website-maintenance.png`}
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
                      <span>Website Maintenance</span>
                      <small>We add features, fix bug and provide improvement for clients apps.We also engage in Help/Consultation.</small>

                    </div>
                  </div>
                  <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#fef0cc' }}>
                    <div className={Mstyles.VasGrid1ItemA}>
                      <div className={Mstyles.VasGrid1ItemAImg}>
                        <Image
                          src={`/img/search-engine-optimization.png`}
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
                      <span>Search Engine Optimization</span>
                      <small>SEO is the process of affecting the visibility of a website or a web page in a web search engine’s results.</small>

                    </div>
                  </div>
                  <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#b7ffe5' }}>
                    <div className={Mstyles.VasGrid1ItemA}>
                      <div className={Mstyles.VasGrid1ItemAImg}>
                        <Image
                          src={`/img/cloud-server.png`}
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
                      <span>Web Servers and Cloud Computing</span>
                      <small>We Provide complete Web Apps Hosting and Cloud Computing with 99.9% uptime.</small>

                    </div>
                  </div>
                  <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#fef0cc' }}>
                    <div className={Mstyles.VasGrid1ItemA}>
                      <div className={Mstyles.VasGrid1ItemAImg}>
                        <Image
                          src={`/img/security.png`}
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
                      <span>Website and Servers Security</span>
                      <small>Focus on your Business let us handle your website and server Security, we have experienced cyber security team to make feel you secure online</small>

                    </div>
                  </div>
                  <div className={Mstyles.VasGrid1Item} style={{ backgroundColor: '#ffd9d8' }}>
                    <div className={Mstyles.VasGrid1ItemA}>
                      <div className={Mstyles.VasGrid1ItemAImg}>
                        <Image
                          src={`/img/traffic.png`}
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
                      <span>Pay Per Click</span>
                      <small>Helps to increase the traffic on the website and relatively increase prospective buyers.</small>

                    </div>
                  </div>
                </div>
                <div style={{ height: '50px' }}></div>
              </div>

             
            </div>
          </div>


        </Parallax>

      

        <div className={Mstyles.MyContainer80}>
          <div className={Mstyles.vShowitworksflexbox}>
            <div className={Mstyles.vShowitworksflexboxA}>
              <div className={Mstyles.vShowitworksflexboxAImg}>
                <Image
                  src={`/img/bohemian-man-with-his-arms-crossed.jpg`}
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


                <span>Functioning as one of the premier website developers for over two decades, we have been instrumental in delivering top-notch innovative, mobile responsive websites that not only yields results but grows with the organization. We have so far delivered 10,000+ projects successfully for our happy clients spread all over India and overseas as well.</span>
                <div style={{ height: '20px' }}></div>
                <h2>We are at your service when it comes to delivering any type of websites, be it:</h2>
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
                    <span>Corporate website</span>
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
                    <span>eCommerce website</span>
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
                    <span>Ed. Tech Webiste</span>
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
                    <span>News website</span>
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
                    <span>Blog website</span>
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
                    <span>Personal website</span>
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
                    <span>Portfolio website</span>
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
                    <span>Event website</span>
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
                    <span>Non-profit website</span>
                  </div>
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
                      <div><h1>1 ) Planning</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Define your goals and objectives for the website.</li>
                        <li>Identify your target audience and their needs.</li>
                        <li>Create a sitemap and wireframes to outline the website's structure and layout.</li>
                        <li>Decide on the technologies and tools you will use for development.</li>

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
                      <div><h1>2 ) Domain and Hosting</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Register a domain name that reflects your website's identity.</li>
                        <li>Choose a web hosting best Hosting to store your website's files and make it accessible on the internet.</li>

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
                      <div><h1>3 ) Front-End Development</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Design the user interface (UI) and user experience (UX) of your website.</li>
                        <li>Write HTML to structure the content of the web pages.</li>
                        <li>Use CSS to style and format the content, making it visually appealing.</li>
                        <li>Incorporate JavaScript for interactivity and dynamic features.</li>

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
                      <div><h1>3 ) Back-End Development</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Set up a server to handle requests and responses from the client-side (front-end).</li>
                        <li>Choose a programming language (e.g., Python, Ruby, PHP, Node.js) for server-side development</li>
                        <li>Design and build a database to store and manage data.</li>
                        <li>Develop server-side scripts or applications to process data and perform server-side operations.</li>

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
                      background: `rgba(233, 223, 255, ${percentage * 1})`,
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
                      <div><h1>4 ) Testing</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Thoroughly test your website for functionality, performance, and security.</li>
                        <li>Debug and fix any issues or bugs that arise during testing.</li>
                        <li>Perform cross-browser and cross-device testing to ensure compatibility.</li>


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
                      background: `rgba(46, 204, 113, ${percentage * 1})`,
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
                  <div className={Mstyles.WebhWItem} >
                    
                    <div className={Mstyles.WebhWItemB}>
                      <div><h1>5 ) Deployment</h1></div>
                      <div className={Mstyles.Subtext}>
                        <li>Configure the hosting environment, including server settings, security measures, and domain name settings..</li>
                        <li>Set up and configure databases on the hosting server, ensuring they mirror your development environment's database structure and content.</li>
                        <li>Test the deployed web application on the hosting server to ensure that all components are functioning correctly.
                        </li>

                        <li>All Done 👍
                        </li>


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
                 Our experts employ the latest state-of-the-art fast-paced, fun and immersive technology to deliver a world-class user experience for all websites. Our technical team of experts are fully conversant with the newest technologies such as <i>JQuery, CSS3, HTML5, Node Js</i> and <i>Angular Js</i> to make the websites very relevant and with the times. We have an eye towards building awareness, greater conversions and boosting customer retention.
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
                    src={`/img/wordpress.png`}
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
                    src={`/img/code-igniter.png`}
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
                    src={`/img/bootstrap.png`}
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
                  <Image
                    src={`/img/imgftdtr.png`}
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
