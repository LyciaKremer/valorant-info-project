/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

import * as S from './style'

const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.Box>
          <S.Item>
            <S.FooterImage>
              <S.ReactRotate>
                <Image src="/React.svg" alt="img" width={45} height={45} />
              </S.ReactRotate>
            </S.FooterImage>
            <S.Details>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              molestias perspiciatis a corporis? Similique, sunt. Natus sint
              quibusdam est quam harum velit aspernatur iusto! Corrupti fugiat
              at facilis exercitationem ea.
            </S.Details>
          </S.Item>
        </S.Box>
      </S.Footer>
    </>
  )
}

export default Footer
