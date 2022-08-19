import React from 'react'
import Button from '../components/Button'
import { HiOutlineSpeakerphone } from 'react-icons/hi'

const index = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen' >
      <Button appearance={'pri'} icon={<HiOutlineSpeakerphone />} />
      <Button appearance={'sec'} />
      <Button appearance={'disabled'} />
    </div>
  )
}

export default index