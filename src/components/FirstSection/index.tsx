import { Container } from 'react-bootstrap'

import Image from 'next/image'
import Link from 'next/link'

import Agents from '../Agents'
import * as S from './style'

const FirstSection = () => {
  return (
    <>
      <S.Section>
        <Container>
          <S.Content>
            <S.Infos>
              <S.Title>Valorant</S.Title>
              <S.Details>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                molestias perspiciatis a corporis? Similique, sunt. Natus sint
                quibusdam est quam harum velit aspernatur iusto! Corrupti fugiat
                at facilis exercitationem ea.
              </S.Details>
              <Link href="/">Link</Link>
            </S.Infos>
            <Image src="/trio-agentes.png" alt="img" width={789} height={704} />
          </S.Content>
          <Agents />
        </Container>
      </S.Section>
    </>
  )
}

export default FirstSection
