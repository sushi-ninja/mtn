export interface Castors {
  spCode: string
  spName: string
  spNickname: string
  spIntro: string
  spCareer: string
  broStartdate: string | null
  broEnddate: string | null
  broBroadState: string
  broProgramYtId: string | null
  programSubCode: string | null
  imgBroadProfileUrl: string
  imgBroadOnairUrl: string
}

export interface Advisor {
  spCode: string
  imgBroadProfileUrl: string
  spNickname: string
}
