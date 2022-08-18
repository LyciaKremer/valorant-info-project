import { Container } from 'react-bootstrap'

import Image from 'next/image'
import Link from 'next/link'

import Agents from '../Agents'
import * as S from './style'

const AgentSection = () => {
  return (
    <>
      <S.Section>
        <Container>
          <S.Content>
            <S.Infos>
              <S.Title>Agents</S.Title>
            </S.Infos>
          </S.Content>
          <Agents />
        </Container>
      </S.Section>
    </>
  )
}

export default AgentSection
