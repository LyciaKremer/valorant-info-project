import Image from 'next/image'

import * as S from './style'

interface CardProps {
  name: string
  description: string
}

const CardAgent = (props: CardProps) => {
  return (
    <>
      <S.Card>
        <S.Box>
          <S.Item>
            <S.Name>{props.name}</S.Name>
            <S.Description>{props.description}</S.Description>
          </S.Item>
        </S.Box>
      </S.Card>
    </>
  )
}

export default CardAgent
