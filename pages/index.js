import React from 'react'
import { useRouter } from 'next/router'
import ButtonComponent from '../components/Button'
import TypeComponent from '../components/TypeComponent';

const Index = () => {

  const router = useRouter();

  return (
    <div>
      <div className='mx-auto flex flex-col gap-4 justify-center items-center mt-36' >
        <ButtonComponent appearance={'pri'} buttonText='Hero Section' onClick={() => router.push('/hero')} />
        <ButtonComponent appearance={'pri'} buttonText='Buttons' onClick={() => router.push('/button')} />
        <ButtonComponent appearance={'pri'} buttonText='SVGs' onClick={() => router.push('/svgs')} />
        <ButtonComponent appearance={'pri'} buttonText='Accordian' onClick={() => router.push('/accordian')} />
        <ButtonComponent appearance={'pri'} buttonText='Newsletter' onClick={() => router.push('/newsletter')} />
        <ButtonComponent appearance={'pri'} buttonText='Forms' onClick={() => router.push('/forms')} />
        <ButtonComponent appearance={'pri'} buttonText='Slider' onClick={() => router.push('/slider')} />
        <ButtonComponent appearance={'pri'} buttonText='Footer' onClick={() => router.push('/footer')} />
        <ButtonComponent appearance={'pri'} buttonText='Type' onClick={() => router.push('/type')} />
      </div>
    </div>
  )
}

export default Index