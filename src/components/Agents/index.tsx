import { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

import { http } from '../../axios/request'
import CardAgent from '../Card/card'
import * as S from './style'

const Agents = () => {
  const [agent, setAgent] = useState<any[]>([])
  const carousel = useRef(null)

  const getAgent = async () => {
    const response = await http.get('/agents')
    setAgent(response.data.data)
    console.log(response.data.data)
  }

  useEffect(() => {
    getAgent()
  }, [])

  const handleLeftClick = e => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = e => {
    e.preventDefault()

    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  if (!agent || !agent.length) return null

  return (
    <>
      <S.Carousel ref={carousel}>
        {agent &&
          agent?.map(item => (
            <CardAgent
              key={item?.uuid}
              name={item?.displayName}
              description={item?.description}
              image={item?.bustPortrait}
            />
          ))}
      </S.Carousel>
      <S.Buttons>
        <S.Icon onClick={handleLeftClick}>
          <HiOutlineChevronLeft />
        </S.Icon>
        <S.Icon onClick={handleRightClick}>
          <HiOutlineChevronRight />
        </S.Icon>
      </S.Buttons>
    </>
  )
}

export default Agents
