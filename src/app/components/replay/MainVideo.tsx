import React from 'react'
import { type VideoItem } from '@/app/types/videoDataType'

interface replayProps {
  videoInfo: VideoItem
}

const MainVideo: React.FC<replayProps> = ({ videoInfo }) => {
  return (
    <article>
      <video className="w-full m-auto" controls poster={videoInfo?.thumbnailUrl} src={videoInfo?.directLink} />
      <p className="text-left text-lg font-bold mt-[10px]">{videoInfo?.subject}</p>
    </article>
  )
}

export default MainVideo
