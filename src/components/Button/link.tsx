/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'

import * as S from './style'

interface BtnProps {
  icon?: any
  text: string
  url?: string
  color: string
  size: string
  onClick?: any
  disabled?: boolean
}

const ButtonLink = (props: BtnProps) => {
  return (
    <S.ButtonLink onClick={props.onClick}>
      <Link href={props.url} passHref>
        <button
          className={props.color + ' ' + props.size}
          disabled={props.disabled}
        >
          <div className="link">
            {props.text}
            {props.icon && <S.Icon>{props.icon}</S.Icon>}
          </div>
        </button>
      </Link>
    </S.ButtonLink>
  )
}

export default ButtonLink
