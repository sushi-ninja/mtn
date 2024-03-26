import BroadCastService from '@/app/api/service/broadcast/broadcast'

/** 모든 캐스터 데이터 호출 함수 */
export const fetchBroadCastsList = async () => {
  try {
    return await BroadCastService.getBroadCastList()
  } catch (error) {
    console.error('Error fetching broadcast list:', error)
    throw error // 에러를 다시 throw하여 다른 곳에서 적절히 처리할 수 있도록 합니다.
  }
}
