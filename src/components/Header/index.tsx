import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

import Image from 'next/image'
import Link from 'next/link'

import * as S from './style'

const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <S.Header>
        <Link href="/">
          <a>
            <Image src="/valorant-logo.svg" alt="logo" width={80} height={80} />
          </a>
        </Link>
        <S.Nav>
          <S.Ul>
            <S.LinkMenu href="/agents">Agentes</S.LinkMenu>
            <S.LinkMenu href="/">Mapas</S.LinkMenu>
            <S.LinkMenu href="/">Armas</S.LinkMenu>
          </S.Ul>
        </S.Nav>
        {/* <S.Menu>
          <div
            className="menuApps p-1"
            onClick={() => {
              setActive(!active)
            }}
          >
            {active ? <FiX fontSize={30} /> : <FiMenu fontSize={25} />}
          </div>
        </S.Menu> */}
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
      </S.Header>
      <div className={active ? null : 'd-none'}>
        <S.MenuMobile>
          <div className="d-flex flex-column gap-5">
            <ul>
              <S.LinkMenu href="/agents">Agentes</S.LinkMenu>
              <S.LinkMenu href="/">Mapas</S.LinkMenu>
              <S.LinkMenu href="/">Armas</S.LinkMenu>
            </ul>
          </div>
        </S.MenuMobile>
      </div>
    </>
  )
}

export default Header
