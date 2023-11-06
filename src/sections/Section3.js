import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Mstyles from '../../Style/home.module.css';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';
import { jsx, Box, Flex, Container, } from 'theme-ui';
import { FiArrowRight } from "react-icons/fi";
import Lottie from 'react-lottie'
import * as animationData from '../../Data/Lottie/arrowani.json'
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import ServicesGridlist from '../components/List/ServicesGridlist'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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




  return (<div className={Mstyles.ColorServices}>

    <div >
    <div className={Mstyles.OnlyDesktop}>
        <div style={{ height: '40px' }}></div>
      </div>
      <div className={Mstyles.TitleCenter}>
        <h1>What We Offer ?</h1>
        <div>
          <span>
            Our services cover a wide range of areas, from administrative support to lead generation, calendar management, personal assistance, graphic design, and social media management. Let us handle the details while you focus on the big picture
          </span>
        </div>
      </div>
      <div className={Mstyles.OnlyDesktop}>
        <div style={{ height: '20px' }}></div>
      </div>
      <div className={Mstyles.MyContainer80}>
         
          <ServicesGridlist />
          <div className={Mstyles.OnlyDesktop}>
        <div style={{ height: '20px' }}></div>
      </div>
          </div>
      <div style={{height:'30px'}}></div>
    </div>

  </div>


  );
}

export default RecentOrders;


