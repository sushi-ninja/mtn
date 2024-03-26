'use client'
import React, { useEffect, useState } from 'react'
import { fetchReplayVideoList } from '@/app/utils/replayUtils'
import style from '@/app/replay/replay.module.css'
import MainVideo from '@/app/components/replay/MainVideo'
import { type VideoItem } from '@/app/types/videoDataType'

function Page (props: any) {
  // const [replayInfo, setReplayInfo] = useState<VideoResponse[]>([])
  const [videoList, setVideoList] = useState<VideoItem[]>([])
  const [mainVideo, setMainVideo] = useState<VideoItem>({
    contents: '',
    createdAt: undefined,
    createdDate: undefined,
    directLink: '',
    originExt: '',
    originName: '',
    originSize: undefined,
    originType: '',
    playKey: '',
    playTime: '',
    programId: 0,
    programTitle: '',
    publishDate: undefined,
    startedAt: undefined,
    subject: '',
    tags: '',
    thumbnailUrl: '',
    vodId: 0
  })
  // const [pageNo, setPageNo] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0) // 총 페이지 수

  // URL에서 페이지 번호를 읽어오는 함수
  const getPageFromUrl = () => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search)
      return parseInt(searchParams.get('page') ?? '1', 10)
    }

    return 1 // 서버 사이드에서는 기본값 반환
  }

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 보장
    const page = getPageFromUrl()
    setPageNo(page)
  }, [])

  // 페이지 번호 상태
  const [pageNo, setPageNo] = useState<number>(getPageFromUrl())

  // URL 쿼리 파라미터를 기반으로 페이지 번호 설정
  useEffect(() => {
    const handlePopState = () => {
      setPageNo(getPageFromUrl())
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // 페이지 번호에 따라 데이터를 가져오고 URL을 업데이트
  useEffect(() => {
    fetchReplayVideoList(pageNo).then((result) => {
      setVideoList(result.data.results)
      setMainVideo(result.data.results[0])
      setTotalPages(Math.ceil(result.data.totalRecordCount / result.data.recordsPerPage))
    }).catch((error) => {
      console.error(error)
    })

    const newUrl = new URL(window.location.href)
    newUrl.searchParams.set('page', pageNo.toString())
    window.history.pushState({}, '', newUrl.toString())
  }, [pageNo])

  //= =======
  // 비디오 클릭 이벤트
  const selectVideo = (video: VideoItem) => {
    setMainVideo(video)
  }

  if (videoList.length > 0) {
    return (
    <>
      <main className="w-[1210px] m-auto text-center">
        <h2 className="main-title">방송 다시보기</h2>

        <section className={style.replay_video_wrapper}>
          {/* 첫영상 */}
          <MainVideo videoInfo={mainVideo}/>

          {/* 영상 리스트 */}
          <article className="grid grid-cols-4 gap-x-[45px] gap-y-[30px] mt-[60px] mb-[40px]">
            {videoList.map((item: VideoItem, i: number) => (
              <div onClick={ () => { selectVideo(item) } } className="cursor-pointer" key={i}>
                <div >
                  <img src={item?.thumbnailUrl}/>
                  <p className="text-left text-sm mt-[10px]">{item?.subject}</p>
                </div>
              </div>
            ))}
          </article>

          <hr className="bg-black"/>
        </section>

        {/* 페이지네이션 */}
        <div className="mt-[40px] flex justify-center gap-4 text-xl font-light">
          {/* 첫 페이지로 가기 버튼 */}
          {pageNo > 1 && (
            <button onClick={() => { setPageNo(1) }}>◀◀</button>
          )}

          {/* 이전 페이지로 가기 버튼 */}
          {pageNo > 1 && (
            <button onClick={() => { setPageNo(pageNo - 1) }}>◀</button>
          )}

          {/* 페이지 번호 버튼들 */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => { setPageNo(page) }}
              style={{ fontWeight: pageNo === page ? 'bold' : 'normal' }}
            >
              {page}
            </button>
          ))}

          {/* 다음 페이지로 가기 버튼 */}
          {pageNo < totalPages && (
            <button onClick={() => { setPageNo(pageNo + 1) }}>▶</button>
          )}

          {/* 마지막 페이지로 가기 버튼 */}
          {pageNo < totalPages && (
            <button onClick={() => { setPageNo(totalPages) }}>▶▶</button>
          )}
        </div>
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
