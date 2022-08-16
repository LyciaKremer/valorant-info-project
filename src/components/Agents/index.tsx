import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import { http } from '../../axios/request'
import CardAgent from '../Card/card'
import * as S from './style'

const Agents = () => {
  const [agent, setAgent] = useState<any[]>([])

  const getAgent = async () => {
    const response = await http.get('https://valorant-api.com/v1/agents')
    setAgent(response.data.data)
    console.log(response.data)
  }

  useEffect(() => {
    getAgent()
  }, [])

  return (
    <>
      <S.Section>
        <Container>
          {agent?.map(item => (
            <CardAgent
              key={item.uuid}
              name={item.displayName}
              description={item.description}
            />
          ))}
        </Container>
      </S.Section>
    </>
  )
}

export default Agents
