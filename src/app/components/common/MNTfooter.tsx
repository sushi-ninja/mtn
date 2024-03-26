'use client'
import React from 'react'
import Image from 'next/image'
import BottomLogo from '../../../../public/assets/image/white_logo.webp'
import Link from 'next/link'

function MNTfooter (props: any) {
  return (
   <>
     <section className="footer-wrapper">
      <article className="footer">
        {/* 이미지 */}
        <div className="flex items-center">
          <Image src={BottomLogo} alt={'bottom_logo'} />
        </div>
        {/* 정보 */}
        <div>

          <div className="footer-sub-menu">
            <div>
              <Link href={'https://company.mtn.co.kr/'} prefetch={false}>
                회사소개
              </Link>
            </div>
            <div>
              <Link href={'https://www.mtn.co.kr/terms/privacy-policy'} prefetch={false}>
                개인정보취급방침
              </Link>
            </div>
            <div>
              <Link href={'https://www.mtn.co.kr/terms/tou?t='} prefetch={false}>
                이용약관
              </Link>
            </div>
            <div>
              <Link href={'https://www.mtn.co.kr/terms/protection-policy'} prefetch={false}>
                청소년보호정책
              </Link>
            </div>
            <div>
              <Link href={'https://company.mtn.co.kr/pages/contact.html'} prefetch={false}>
                제휴방침
              </Link>
            </div>
            <div>
              <Link href={'https://company.mtn.co.kr/pages/contact.html'} prefetch={false}>
                오시는길
              </Link>
            </div>
          </div>

          <div className="footer-address">
            <div className="footer-address-sub">
              <div>(주)머니투데이방송 대표이사 유승호</div>
              <div>(07328) 서울특별시 영등포구 여의나루로 60 (여의도동,여의도우체국) 2,4층</div>
              </div>
            <div className="footer-address-sub">
              <div>사업자등록번호 : 107-86-00057</div>
              <div>방송 02)2077-6221~3</div>
              <div>팩스 02)2077-6300~6301</div>
            </div>
          </div>

          <div className="footer-copyright">
            <div>Copyright ⓒ MTN 머니투데이방송 All Rights Reserved.</div>
          </div>
        </div>
      </article>
     </section>
   </>
  )
}

export default MNTfooter
