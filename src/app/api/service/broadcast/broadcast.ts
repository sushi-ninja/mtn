'use client'
import service from '../../config/request'

const API_PATH_LOCAL_BROADCAST_LIST = 'https://api.mtn.co.kr/api/v1/public/broadcast-splist/TP'

/** 모든캐스터 데이터 */
const getBroadCastList = async () => {
  return await service.get(API_PATH_LOCAL_BROADCAST_LIST)
}

const broadCastService = {
  getBroadCastList

}

export default broadCastService
