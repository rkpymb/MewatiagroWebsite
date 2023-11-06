import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Mstyles from '../../../Style/home.module.css';
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";
const ServicesGridlist = () => {

    const router = useRouter()
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    useEffect(() => {

    }, [router.query])

    const data = [
        {
            id: 1,
            icon: '/img/customer-service.png',
            path: '/services/virtual-assistant',
            title: 'Virtual Assistant',
            description: `Unlock Efficiency with Our Virtual Assistant Services. Our skilled virtual assistants can handle administrative tasks, lead generation, calendar management, and more, allowing you to focus on the big picture. Learn how we can simplify your workload and boost productivity`,
        },
        {
            id: 2,
            icon: '/img/webpage.png',
            path: '/services/website-development',
            title: 'Website Development',
            description: `Expand Your Reach with Professional Website Development. Take your business worldwide with a custom website. Our web development services ensure your online presence matches your vision. Discover how we can help you switch to online and grow your brand `,
        },
        {
            id: 3,
            icon: '/img/user-interface.png',
            path: '/services/app-development',
            title: 'App Development',
            description: `Bring Your App Idea to Life with Our Development Team. Turn your concept into a reality with our expert mobile app development services. We specialize in both IOS and Android app development. Learn how we can transform your idea into a fully functional app`
        },
        {
            id: 4,
            icon: '/img/vector.png',
            path: '/services/graphics-designing',
            title: 'Graphics Designing',
            description: `Elevate Your Brand with Stunning Graphics Design. Our team of Graphics Designers is dedicated to creating eye-catching visuals that capture your brand's essence. From logos to marketing materials, we offer complete Graphics Design services. Explore how our designers can enhance your brand's image`,
        },
        {
            id: 5,
            icon: '/img/social-media.png',
            path: '/services/social-media-management',
            title: 'Social Media Management',
            description: `Boost Your Online Presence with Effective Social Media Management. Our social media management services are designed to deliver your brand's message to your target audience. Learn how we can help you engage with your customers and elevate your online presence.`,
        },
        {
            id: 6,
            icon: '/img/video-call.png',
            path: '/services/video-solution',
            title: 'Video Solutions',
            description: `Elevate Your Brand with Engaging Videos. We create videos with real human voice overs to give your brand a unique and captivating appeal. Find out how our video services can help you connect with your audience and leave a lasting impression"`,
        },
    ];

    return (
        <div className={Mstyles.ServicesGrid} >
            {data?.map((item, index) => {
                return <div key={index}>
                    <Link href={`${item.path}`} >
                        <div className={Mstyles.ServicesItems} >
                            <div className={Mstyles.ServisesIcon}>
                                <Image
                                    src={item.icon}
                                    alt="image"
                                    layout="responsive"
                                    placeholder='blur'
                                    width={100}
                                    height={100}
                                    quality={100}
                                    blurDataURL={blurredImageData}

                                />
                            </div>
                            <div className={Mstyles.ServicesItemBoxContent}>
                                <h2> {item.title}</h2>
                                <small> {item.description}</small>
                                <div style={{ height: '10px' }}></div>
                                <div className={Mstyles.Learnmorebtn}>
                                    <div className={Mstyles.LearnmorebtnText}>
                                        <span>learn more</span>
                                    </div>
                                    <div className={Mstyles.LearnmorebtnIcon}>
                                        <FiArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>



                </div>

            }

            )}
        </div>
    )
}

export default ServicesGridlist
