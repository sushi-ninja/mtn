'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '@/app/program_info/program_info.module.css'
import { fetchBroadCastsList } from '@/app/utils/broadcastUtils'
import { type Castors } from '@/app/types/castors'

function Page (props: any) {
  const [castorList, setCastorList] = useState<Castors[]>([])

  useEffect(() => {
    fetchBroadCastsList().then((result) => {
      /** 모든캐스터 데이터 */
      setCastorList(result.data.results)
    }).catch((error) => {
      console.error(error)
    })
  }, []) // 빈 배열을 전달하여 이펙트가 컴포넌트가 처음으로 렌더링될 때만 실행되도록 함

  if (castorList.length > 0) {
    return (
    <>
      <main className="flex justify-center text-center">
        <section>
          <h2 className="main-title">프로그램 소개</h2>
          <p className={style.intro}>위험한 발상, 위대한 도전 탑픽전쟁</p>
          <p className="mt-[10px] text-lg">최선의 종목으로 최고의 수익률을 차지하라</p>
          <p className="text-lg">이기는 자만 살아남은 치열한 종목전쟁!</p>
          <div className={style.introTime}>방송시간 : 매주 월~금 18:00 ~ 18:50</div>
          {/**/}
          <h2 className="main-title">프로그램 구성</h2>
          <p>어떤 종목에 투자해야할지 헷갈리는 시장에서 살아남는 법!</p>
          <p>저녁 6시, 최고의 수익률을 겨루는 종목전쟁의 세계로 초대합니다!</p>
          {/**/}
          <h2 className="main-title">출연진 소개</h2>
          <table className={style.broadCastTable}>
            <tbody>
            <tr>
              <th>연출</th>
              <td><p>박진성 PD</p></td>
            </tr>

            <tr>
              <th>진행자</th>
              <td>
                <div className={style.broadCastorWrapper}>
                  <div className={style.broadCastor}>
                      <img src='https://toppick.mtn.co.kr/_next/image?url=%2Fimages%2Fthumb.png&w=3840&q=75' alt='broad-castor'/>
                  </div>
                  <div className={style.programInfoCastorName}>
                    <p>김예솔 앵커</p>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>어드바이저</th>
              <td>
                <div className="flex flex-wrap gap-5">
                  {castorList.map((item: Castors, i: number) => (
                    <Link href={'../advisor/' + item.spCode} key={i}>
                      <div className={style.broadCastorWrapper}>
                        <div className={style.broadCastor}>
                          <img src={item?.imgBroadProfileUrl} alt='broad-castor'/>
                        </div>
                        <div className={style.programInfoCastorName}>
                          <p>{item?.spNickname}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
    )
  } else {
    return (
      <>
        <div className="h-[100vh]"></div>
      </>
    )
  }
}

export default Page
