/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './style'

interface BtnProps {
  icon?: any
  text: string
  color: string
  size: string
  onClick?: any
  disabled?: boolean
}

const ButtonNormal = (props: BtnProps) => {
  return (
    <S.ButtonNormal onClick={props.onClick}>
      <button
        className={props.color + ' ' + props.size}
        disabled={props.disabled}
      >
        <div className="icon">
          {props.text}
          {props.icon && <S.Icon>{props.icon}</S.Icon>}
        </div>
      </button>
    </S.ButtonNormal>
  )
}

export default ButtonNormal
