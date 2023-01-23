import { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'

import Image from 'next/image'
import Link from 'next/link'

import { http } from '../../axios/request'
import Agents from '../Agents'
import * as S from './style'

const AgentSection = () => {
  const [agent, setAgent] = useState<any[]>([])

  const getAgent = async () => {
    const response = await http.get('/agents')
    setAgent(response.data.data)
    console.log(response.data.data)
  }

  useEffect(() => {
    getAgent()
  }, [])

  if (!agent || !agent.length) return null

  return (
    <>
      <S.Section>
        <Container>
          <S.Content>
            {/* <S.Infos>
              <S.Title>Agentes</S.Title>
            </S.Infos> */}
            <S.Card>
              <S.ContentCard>
                <S.ImagesAgent>
                  <S.BackgroundImageAgent>
                    <Image
                      src={agent[8].background}
                      alt="background agent"
                      layout="fill"
                    />
                  </S.BackgroundImageAgent>
                  <S.ImageAgent>
                    <Image
                      src={agent[8].fullPortrait}
                      alt="agent"
                      layout="fill"
                    />
                  </S.ImageAgent>
                </S.ImagesAgent>
                <S.Partition></S.Partition>
                <S.InfosCard>
                  <S.MainInfos>
                    <S.NameAgent>{agent[8].displayName}</S.NameAgent>
                    <S.DetailsAgent>{agent[8].description}</S.DetailsAgent>
                    <S.AbilitiesCard>
                      <S.SkillCard>
                        <Image
                          src={agent[8].abilities[0].displayIcon}
                          alt="skill icon"
                          width={44}
                          height={44}
                        />
                      </S.SkillCard>
                      <S.SkillCard>
                        <Image
                          src={agent[8].abilities[1].displayIcon}
                          alt="skill icon"
                          width={44}
                          height={44}
                        />
                      </S.SkillCard>
                      <S.SkillCard>
                        <Image
                          src={agent[8].abilities[2].displayIcon}
                          alt="skill icon"
                          width={44}
                          height={44}
                        />
                      </S.SkillCard>
                      <S.SkillCard>
                        <Image
                          src={agent[8].abilities[3].displayIcon}
                          alt="skill icon"
                          width={44}
                          height={44}
                        />
                      </S.SkillCard>
                    </S.AbilitiesCard>
                  </S.MainInfos>
                  <S.SecondaryInfos>
                    <S.DeveloperAgent>
                      Desenvolvido por: <br></br>
                      <span>{agent[8].developerName}</span>
                    </S.DeveloperAgent>
                    <S.TagsAgent>
                      Tags: <br></br> <span>{agent[8].characterTags}</span>
                    </S.TagsAgent>
                  </S.SecondaryInfos>
                </S.InfosCard>
              </S.ContentCard>
            </S.Card>
          </S.Content>
        </Container>
      </S.Section>
    </>
  )
}

export default AgentSection
