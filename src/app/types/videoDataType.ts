export interface VideoItem {
  vodId: number
  subject: string
  contents: string
  playKey: string
  playTime: string
  originName: string
  originSize: any
  originType: string
  originExt: string
  thumbnailUrl: string
  directLink: string
  programId: number
  programTitle: string
  createdAt: any
  startedAt: any
  tags: string
  publishDate: any
  createdDate: any
}

export interface VideoResponse {
  firstPage: number
  lastPage: number
  totalPageCount: number
  pageSize: number
  recordsPerPage: number
  results: VideoItem[]
  totalRecordCount: number
  currentPageNo: number
}
