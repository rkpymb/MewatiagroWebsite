import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Mstyles from '../../Style/home.module.css';

import { jsx, Box, Flex, Container, } from 'theme-ui';
import { FiPhoneCall, FiArrowRight } from "react-icons/fi";
import Lottie from 'react-lottie'
import * as animationData from '../../Data/Lottie/arrowani.json'
import BrandsLogoMarque from '../components/Homepage/BrandsLogoMarque'
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
    <div className={Mstyles.TitleCenter}>
      <h1>Trusted by leading startups and entrepreneurs</h1>
      <div>
        <span>
        Our clients include some of the leading startups and entrepreneurs in the us and other global markets.
        </span>
      </div>
    </div>
    <div className={Mstyles.OnlyDesktop}>
        <div style={{ height: '20px' }}></div>
      </div>
  <div className={Mstyles.MarqueBoxBrand}>

  </div>
    <div className={Mstyles.CounterBox}>
          <div className={Mstyles.CounterBoxItem} style={{ backgroundColor: '#e8dfff' }}>
            <div>
              <span>500+</span>
            </div>
            <div>
              <small>Satisfied Businessmen owners</small>
            </div>
          </div>
          <div className={Mstyles.CounterBoxItem}  style={{ backgroundColor: '#fff0cb' }}>
            <div>
              <span>4.8 🤩</span>
            </div>
            <div>
              <small>Average Service rating</small>
            </div>
          </div>
          <div className={Mstyles.CounterBoxItem}  style={{ backgroundColor: '#b6ffe4' }}>
            <div>
              <span>400+</span>
            </div>
            <div>
              <small>Virtual Assistant</small>
            </div>
          </div>
          <div className={Mstyles.CounterBoxItem}  style={{ backgroundColor: '#fce4ec' }}>
            <div>
              <span>200+</span>
            </div>
            <div>
              <small>Social Media Assistant</small>
            </div>
          </div>
          <div className={Mstyles.CounterBoxItem}  style={{ backgroundColor: '#fff0e9' }}>
            <div>
              <span>100+</span>
            </div>
            <div>
              <small>Accountants and Bookkeepers</small>
            </div>
          </div>
          <div className={Mstyles.CounterBoxItem}  style={{ backgroundColor: '#cddeff' }}>
            <div>
              <span>100+</span>
            </div>
            <div>
              <small>Software tester and QA Engineer</small>
            </div>
          </div>
       </div>
  </div>
  );
}

export default RecentOrders;
