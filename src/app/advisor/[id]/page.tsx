'use client'
import React, { useEffect, useState } from 'react'
import Advisor from '@/app/components/advisor/Advisor'
import { useRouter } from 'next/navigation'
import { fetchBroadCastsList } from '@/app/utils/broadcastUtils'
import { type Castors } from '@/app/types/castors'

function Page (props: any) {
  const router = useRouter()
  // const [isLoading, setIsLoading] = useState<boolean>(true)
  const [castorInfo, setCastorInfo] = useState<Castors | undefined>(undefined)
  const [careera, setCareera] = useState<string[]>([])
  const id = props.params.id

  useEffect(() => {
    fetchBroadCastsList().then((result) => {
      const item: Castors = result.data.results.find((item: Castors) => item.spCode === id)
      if (item === undefined) {
        alert('캐스터 정보가 존재하지 않습니다.')
        router.back()
        return
      }
      setCastorInfo(item)
      const career = result.data.results.find((item: Castors) => item.spCode === id)?.spCareer.split('\r\n')
      setCareera(career)
      // setIsLoading(false) // 데이터 로딩이 완료되면 isLoading을 false로 설정
    }).catch((error) => {
      console.error(error)
    })
  }, []) // 빈 배열을 전달하여 이펙트가 컴포넌트가 처음으로 렌더링될 때만 실행되도록 함

  if (castorInfo !== undefined) {
    return (
      <>
        <main className="w-[1210px] m-auto text-center">
          <Advisor castorInfoProps={castorInfo} careeraListProps={careera} />
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
