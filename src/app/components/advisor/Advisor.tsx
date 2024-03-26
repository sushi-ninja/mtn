'use client'
import React from 'react'
import style from '@/app/advisor/[id]/advisor.module.css'
import Link from 'next/link'
import { type Castors } from '@/app/types/castors'

interface advisorProps {
  castorInfoProps: Castors | undefined
  careeraListProps: string[]
}
const Advisor: React.FC<advisorProps> = ({ castorInfoProps, careeraListProps }) => {
  return (
    <>
        <h2 className="main-title">어드바이저 상세보기</h2>
        <section className="flex gap-5 m-auto w-[960px]">
        <article className="w-1/4">
          <div className=" text-center mb-[40px]">
            {/* 이미지 wrpper */}
            <div className="broad-castor-bg">
              <img className="broad-castor-img" src={castorInfoProps?.imgBroadProfileUrl} alt='broadCastorProfile' />
            </div>
            {/*  */}
            {castorInfoProps?.broBroadState === '1'
              ? (
                <Link href={'https://www.youtube.com/watch?v=' + castorInfoProps?.broProgramYtId}
                      className="broad-castor-button-on-air">방송입장</Link>)
              : <div className="broad-castor-button">방송종료</div>}
          </div>
        </article>
        <article className="w-3/4">
          <div className={style.advisorRecordWrapper}><span> {'<' + castorInfoProps?.spNickname + '>' + ' '}</span> 어드바이저 이력</div>
           <ul className={style.advisorCareeraList}>
            {
              careeraListProps.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))
            }
           </ul>
        </article>
        </section>
    </>
  )
}

export default Advisor
