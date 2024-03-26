import replayService from '@/app/api/service/replay/replayVideos'

/** replay 비디오 관련 모든 데이터 호출 함수 */
export const fetchReplayVideoList = async (pageNo: number) => {
  try {
    const result: any = await replayService.getReplayVideoList(pageNo)
    return result
  } catch (error) {
    console.error(error)
  }
}
