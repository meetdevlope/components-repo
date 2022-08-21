import React from 'react'
import Button from '../components/Button'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import Header from '../components/Header'

const index = () => {
  return (
    <div className='h-screen w-screen bg-sec'>
      <Header />
      {/* <Button appearance={'pri'} icon={<HiOutlineSpeakerphone />} /> */}
      {/* <Button appearance={'sec'} /> */}
      {/* <Button appearance={'disabled'} /> */}
      <div className='h-screen w-screen ' ></div>
    </div>
  )
}

export default index