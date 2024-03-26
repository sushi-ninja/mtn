import React from 'react'
import Image from 'next/image'
import ConsultImg from '../../../public/assets/image/banner_sms_8200.gif'

function Page (props: any) {
  return (
    <>
      <main className="w-[1210px] m-auto text-center">
        <h2 className="text-[44px] mt-[100px] mb-[35px]">종목상담</h2>
        <Image className="m-auto" src={ConsultImg} alt={'bottom_logo'} />
      </main>
    </>
  )
}

export default Page
