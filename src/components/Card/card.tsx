import Image from 'next/image'

import * as S from './style'

interface CardProps {
  name: string
  description: string
  image?: string
}

const CardAgent = (props: CardProps) => {
  return (
    <>
      <S.Card>
        <S.Box>
          <S.Item>
            {props.image && (
              <Image src={props.image} alt="agent" width={337} height={337} />
            )}
            <S.Name>{props.name}</S.Name>
            <S.Description>{props.description}</S.Description>
          </S.Item>
        </S.Box>
      </S.Card>
    </>
  )
}

export default CardAgent
