import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Mstyles from '../../../Style/home.module.css';
import Marquee from "react-fast-marquee";
import { jsx, Box, Flex, Container, } from 'theme-ui';
function RecentOrders() {

    const router = useRouter()
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    useEffect(() => {

    }, [router.query])


    return (<div className={Mstyles.MyContainer80}>
 <div className={Mstyles.TitleCenter}>
        <h1>Welcome to Hunt VAS - Your Trusted Virtual Assistant Partner. Simplify Your Workload with a Free Trial</h1>
          <div>
            <span>
            At Hunt VAS, we're on a mission to help businesses of all sizes streamline their operations and boost productivity. Our virtual assistant experts are here to take the hassle out of your daily tasks, so you can focus on what truly matters – growing your business.
            </span>
          </div>
       </div>
        <div className={Mstyles.MarqueeBodx}>
            <Marquee
                gradient={true}
                gradientWidth={100}
                gradientColor={[255, 255, 255]}
            >

                <div className={Mstyles.MaarueLogo}>
                    <Image
                      src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116329.svg`}
                        alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={100}
                        height={50}
                        quality={100}
                        blurDataURL={blurredImageData}

                    />


                </div>
                <div className={Mstyles.MaarueLogo}>
                    <Image
                     src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116342.svg`}
                        alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={100}
                        height={50}
                        quality={100}
                        blurDataURL={blurredImageData}

                    />


                </div>
                <div className={Mstyles.MaarueLogo}>
                    <Image
                      src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116329.svg`}
                        alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={100}
                        height={50}
                        quality={100}
                        blurDataURL={blurredImageData}

                    />


                </div>
                <div className={Mstyles.MaarueLogo}>
                    <Image
                      src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116329.svg`}
                        alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={100}
                        height={50}
                        quality={100}
                        blurDataURL={blurredImageData}

                    />


                </div>
                <div className={Mstyles.MaarueLogo}>
                    <Image
                      src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116329.svg`}
                        alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={100}
                        height={50}
                        quality={100}
                        blurDataURL={blurredImageData}

                    />


                </div>
                
                <div className={Mstyles.MaarueLogo}>
                    <Image
                      src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116329.svg`}
                        alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={100}
                        height={50}
                        quality={100}
                        blurDataURL={blurredImageData}

                    />


                </div>
                <div className={Mstyles.MaarueLogo}>
                    <Image
                      src={`https://programs.expertrons.com/wp-content/uploads/2022/11/Group-116329.svg`}
                        alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={100}
                        height={50}
                        quality={100}
                        blurDataURL={blurredImageData}

                    />


                </div>
                

              
            </Marquee>
        </div>

    </div>
    );
}

export default RecentOrders;
