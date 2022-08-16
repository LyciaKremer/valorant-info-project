/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './style'

interface BtnProps {
  id?: string
  color: string
  text: string
  size: string
  onClick?: any
  value?: any
  disabled?: boolean
  className?: string
  name?: string
}

const ButtonSubmit = (props: BtnProps) => {
  return (
    <>
      <S.ButtonSubmit
        htmlFor={props.id ? props.id : 'submit'}
        className={props.className}
      >
        <div className={props.color + ' ' + props.size + ' '}>{props.text}</div>
      </S.ButtonSubmit>
      <input
        value={props.value}
        type="submit"
        id={props.id ? props.id : 'submit'}
        name={props.name ? props.name : 'submit'}
        onClick={props.onClick}
        style={{ display: 'none' }}
        disabled={props.disabled}
      />
    </>
  )
}

export default ButtonSubmit
