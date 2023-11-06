import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Mstyles from '../../Style/home.module.css';

import { jsx, Box, Flex, Container, } from 'theme-ui';
import { FiPhoneCall, FiArrowRight } from "react-icons/fi";
import Lottie from 'react-lottie'
import * as animationData from '../../Data/Lottie/arrowani.json'
import EnqDialog from '../components/ModalsDialog/EnqDialog'
function RecentOrders() {

  const router = useRouter()
  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
  useEffect(() => {

  }, [router.query])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }


  return (<div className={Mstyles.MyContainer80}>

    <div className={Mstyles.Sec1}>
      <div className={Mstyles.TitleCenter}>
        <h1>Welcome to Hunt VAS - Your Trusted Virtual Assistant Partner. Simplify Your Workload with a Free Trial</h1>
        <div className={Mstyles.TitleCenterDescCenter} >
          <span>
            At Hunt VAS, we're on a mission to help businesses of all sizes streamline their operations and boost productivity. Our virtual assistant experts are here to take the hassle out of your daily tasks, so you can focus on what truly matters – growing your business.
          </span>
        </div>
      </div>
      <div className={Mstyles.OnlyDesktop}>
        <div style={{ height: '20px' }}></div>
      </div>
      <div className={Mstyles.sec1itemBox}>
        <div className={Mstyles.sec1item}>
          <div className={Mstyles.sec1itemImg}>
            <Image
              src={`/img/documentation.png`}
              alt="image"
              layout="responsive"
              placeholder='blur'
              width={100}
              height={100}
              quality={100}
              blurDataURL={blurredImageData}

            />
          </div>
          <div className={Mstyles.sec1itemTitle}>
            <span>Wishup manages all legal finance payments and contracts</span>
          </div>
        </div>
        <div className={Mstyles.sec1item}>
          <div className={Mstyles.sec1itemImg}>
            <Image
              src={`/img/quality.png`}
              alt="image"
              layout="responsive"
              placeholder='blur'
              width={100}
              height={100}
              quality={100}
              blurDataURL={blurredImageData}

            />
          </div>
          <div className={Mstyles.sec1itemTitle}>
            <span>Assured quality Services and best Support</span>
          </div>
        </div>
        <div className={Mstyles.sec1item}>
          <div className={Mstyles.sec1itemImg}>
            <Image
              src={`/img/clock.png`}
              alt="image"
              layout="responsive"
              placeholder='blur'
              width={100}
              height={100}
              quality={100}
              blurDataURL={blurredImageData}

            />
          </div>
          <div className={Mstyles.sec1itemTitle}>
            <span>Choose the number of hours that you need. Full time or Part time.</span>
          </div>
        </div>
      </div>


      <div>
        <div style={{ height: '20px' }}></div>
        <div className={Mstyles.sec1itemBoxButonbox}>

          <EnqDialog Type={false} product={null} />
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
  );
}

export default RecentOrders;
