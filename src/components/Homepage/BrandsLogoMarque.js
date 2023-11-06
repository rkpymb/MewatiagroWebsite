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


  return (<div className={Mstyles.MarqueeBodx}>
    <Marquee
      pauseOnHover
      
      autoFill
      gradient
      gradientColor={[248, 251, 253]}
      gradientWidth={100}
     
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
  );
}

export default RecentOrders;
