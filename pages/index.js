import React from 'react'
import Button from '../components/Button'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import Header from '../components/Header'
import FormComponent from '../components/FormComponent'
import FooterComponent from '../components/FooterComponent'
import NewsletterComponent from '../components/NewsletterComponent'
import AccordianComponent from '../components/Accordian/AccordianComponent'
import { useRouter } from 'next/router'

const Index = () => {

  const router = useRouter();

  return (
    <div className='h-screen w-screen'>
      <Header />
      <NewsletterComponent variant={'1'} />
      <p className='cursor-pointer' onClick={() => router.push('/accordian')} >Accordian</p>
      <FooterComponent variant={'1'} />
      {/* <Button appearance={'pri'} icon={<HiOutlineSpeakerphone />} /> */}
      {/* <Button appearance={'sec'} /> */}
      {/* <Button appearance={'disabled'} /> */}
      <div className='h-screen w-screen ' ></div>
    </div>
  )
}

export default Index