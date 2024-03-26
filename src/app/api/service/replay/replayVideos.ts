'use client'

import service from '../../config/request'

// https://toppick.mtn.co.kr/mtn/api/v1/public/broadcast-vod-list
// https://api.mtn.co.kr/v1/public/broadcast-vod-list

const API_PATH_LOCAL_REPLAY_VIDEO_LIST = 'https://api.mtn.co.kr/api/v1/public/broadcast-vod-list'

/** 모든캐스터 데이터 */
const getReplayVideoList = async (paging: number) => {
  const pageNo = paging
  return await service.post(API_PATH_LOCAL_REPLAY_VIDEO_LIST, { broadcastIdList: [569], currentPageNo: pageNo, recordsPerPage: 8 })
}

const replayService = {
  getReplayVideoList

}

export default replayService
