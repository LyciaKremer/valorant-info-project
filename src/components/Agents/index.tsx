import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import { http } from '../../axios/request'
import CardAgent from '../Card/card'
import * as S from './style'

const Agents = () => {
  const [agent, setAgent] = useState<any[]>([])

  const getAgent = async () => {
    const response = await http.get('/agents')
    setAgent(response.data.data)
    console.log(response.data.data)
  }

  useEffect(() => {
    getAgent()
  }, [])

  return (
    <>
      {agent &&
        agent?.map(item => (
          <CardAgent
            key={item?.uuid}
            name={item?.displayName}
            description={item?.description}
            image={item?.bustPortrait}
          />
        ))}
    </>
  )
}

export default Agents
