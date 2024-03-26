'use client'

import React, { useEffect, useState } from 'react'
import toppick_logo from '../../../../public/assets/image/logo.webp'
import banner_img from '../../../../public/assets/image/main_visual.webp'
import banner_img_sub from '../../../../public/assets/image/sub_visual.webp'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MNTheader = (props: any) => {
  const router = usePathname()
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    setCurrentUrl(router)
  }, [router])

  return (
  //   color: #333;
  // font-size: 1.25rem;
  // font-weight: 600;

    <>
      <div className="w-full ">
        {/* top */}
        <div className="flex m-auto items-end w-[1020px] h-[88px] text-center py-[10px]">
          <div className="w-1/5 text-xl text-left font-semibold text-[#333]">
            <Link href={'https://www.mtn.co.kr/tv-live'} prefetch={false}>
              TV LIVE
            </Link>
            </div>
          <div className="w-1/5 text-xl text-left font-semibold text-[#333]">
            <Link href={'https://news.mtn.co.kr/'} prefetch={false}>
              뉴스
            </Link>
          </div>
          <div className="w-1/5">
            <Image className="m-auto" src={toppick_logo} alt={'toppick_logo'}/>
          </div>
          <div className="w-1/5"></div>
          <div className="w-1/5"></div>
        </div>
        {/* nav */}
        <div className="navber_wrapper">
          <div className="flex m-auto justify-between items-center w-[1020px] h-[60px] px-[10px]">
            <div className="navber_list">
              <Link href="/" prefetch={true}>
                탑픽전쟁 홈
              </Link>
            </div>
            <div className="navber_list">
              <Link href="../../program_info" prefetch={true}>
                프로그램 소개
              </Link>
            </div>
            <div className="navber_list">
              <Link href="../../replay" prefetch={true}>
                방송 다시보기
              </Link>
            </div>
            <div className="navber_list">
              <Link href="../../consult" prefetch={true}>
                종목상담
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* img */}
      <div className={currentUrl === '/' ? 'banner_wrppaer' : 'banner_wrppaer_sub'}>
        <Image className={currentUrl === '/' ? 'visual_img' : 'visual_img_sub'} src={currentUrl === '/' ? banner_img : banner_img_sub} alt={'banner_img'}/>
      </div>
    </>
  )
}

export default MNTheader
