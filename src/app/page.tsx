// In App.js
'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchBroadCastsList } from '@/app/utils/broadcastUtils'
import { type Castors } from '@/app/types/castors'

const Home = () => {
  const [castorList, setCastorList] = useState<Castors[]>([])
  const [onAirCostorList, setOnairCoasotrList] = useState<Castors[]>([])

  useEffect(() => {
    fetchBroadCastsList().then((result) => {
      /** 모든 캐스터 데이터 */
      setCastorList(result.data.results)
      /** 방송 중인 캐스터 데이터 */
      setOnairCoasotrList(result.data.results.filter((item: Castors) => item.broBroadState === '1'))
    }).catch(error => {
      console.error('Error fetching broadcast list:', error)
    })
  }, []) // 빈 배열을 전달하여 이펙트가 컴포넌트가 처음으로 렌더링될 때만 실행되도록 함

  if (
    castorList.length > 0
  ) {
    return (
    <main className="flex flex-col items-center justify-between">
      {/* 방송중인 리스트 */}
      <section>
        {onAirCostorList.length > 0 ? (<h2 className=" text-center text-[44px] mt-[100px] mb-[35px]">오늘의 공개방송 어드바이저</h2>) : null}
        {onAirCostorList.map((item: Castors, i: number) => (
          <Link key={i} target="_blank" href={'https://www.youtube.com/watch?v=' + item.broProgramYtId}>
            <div className=" text-center mb-[40px]">
              {/* 이미지 wrpper */}
              <div className="broad-castor-bg">
                  <img className="broad-castor-img" src={item.imgBroadOnairUrl} alt='broadCastorProfile'/>
              </div>
              <a className="broad-castor-button-on-air">방송중</a>
            </div>
          </Link>
        ))}
      </section>

      <h2 className="text-[44px] mt-[100px] mb-[35px]">어드바이저 소개</h2>
      <section className="flex justify-center">
        <article className="flex flex-wrap gap-5 w-[1190px]">
          {castorList.map((item: Castors, i: number) => (
            <div key={i} className=" text-center mb-[40px]">
              {/* 이미지 wrpper */}
              <div className="broad-castor-bg">
                <Link href={'/advisor/' + item?.spCode}>
                  <img className="broad-castor-img" src={item.imgBroadProfileUrl} alt='broadCastorProfile'/>
                </Link>
              </div>
              {/* 이름 */}
              <p className="broad-castor-name">{item.spNickname}</p>
              {/*  */}
              {item.broBroadState === '1' ? (<Link href={'https://www.youtube.com/watch?v=' + item.broProgramYtId} className="broad-castor-button-on-air">방송입장</Link>) : <div className="broad-castor-button">방송종료</div>}
            </div>
          ))}

        </article>
      </section>
    </main>
    )
  } else {
    return (
      <>
        <div className="h-[100vh]"></div>
      </>
    )
  }
}

export default Home
