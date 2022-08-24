import Image from 'next/image'
import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
import cn from "classnames";


const FooterComponent = ({ variant }) => {

    const footerLinks = [
        { label: "Home", link: "#" },
        { label: "Services", link: "#" },
        { label: "About Us", link: "#" },
        { label: "Contact Us", link: "#" },
    ]
    const socialHandles = [
        { socialIcon: <BsFacebook />, link: "#" },
        { socialIcon: <BsInstagram />, link: "#" },
        { socialIcon: <BsTwitter />, link: "#" },
        { socialIcon: <BsLinkedin />, link: "#" },
    ]

    return (
        <footer>
            <div className={cn('flex gap-6',
                {
                    'justify-center items-center flex-col': variant === '1',
                    'justify-between items-center': variant === '2',
                }
            )} >
                <div className="h-8 w-24 relative">
                    <Image
                        src={
                            "https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-svg-vector.svg"
                        }
                        layout="fill"
                        objectFit="cover"
                        objectPosition={"center"}
                        alt="logo"
                    />
                </div>
                <div className='flex justify-center items-center gap-2' >
                    {
                        footerLinks.map((footerLink, i) => (
                            <a href={footerLink.link} key={i} >{footerLink.label}</a>
                        ))
                    }
                </div>
                <div className='flex justify-center items-center gap-4' >
                    {
                        socialHandles.map((socialHandle, i) => (
                            <a key={i} href={socialHandle.link} className="opacity-50" >{socialHandle.socialIcon}</a>
                        ))
                    }
                </div>
            </div>
            <p className='opacity-30 text-center mt-14' >All Rights Reserved.</p>
        </footer>
    )
}

export default FooterComponent