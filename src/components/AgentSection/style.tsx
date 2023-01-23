import styled from 'styled-components'

import { breakpoints, sizes } from '../../styles/breakpoints'

export const Section = styled.section`
  padding: 2.8rem 0;
  background: ${({ theme }) => theme.colors.black};

  @media ${breakpoints.lessThan(sizes.widescreen)} {
    padding: 1rem 8vw;
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    flex-direction: column;
  }
`
export const Card = styled.h1`
  max-width: 1239px;
  padding: 35px 74px;

  background: radial-gradient(
    100.52% 234.62% at 0% 0%,
    #5589bd 0%,
    #18344c 100%
  );
  box-shadow: 14px 10px 7px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
`
export const Title = styled.h1`
  line-height: 112.61%;
  max-width: 34.375rem;
  font-weight: 500;
  font-size: 2.938rem;
  color: ${({ theme }) => theme.colors.background};
  line-height: 3.219rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    padding-top: 1.875rem;
    font-size: ${({ theme }) => theme.typography.big};
  }
`
export const NameAgent = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  line-height: 3.219rem;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.lessThan(sizes.tablet)} {
    padding-top: 1.875rem;
    font-size: ${({ theme }) => theme.typography.big};
  }
`
export const DetailsAgent = styled.p`
  text-align: left;
  max-width: 364px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 24px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.lessThan(sizes.tablet)} {
    font-size: ${({ theme }) => theme.typography.normal};
    flex-direction: column;
  }
`
export const DeveloperAgent = styled.p`
  text-align: left;
  max-width: 364px;
  font-size: 20px;
  line-height: 22px;
  color: #ffffffa1;

  span {
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    font-size: ${({ theme }) => theme.typography.normal};
    flex-direction: column;
  }
`
export const TagsAgent = styled.p`
  text-align: left;
  max-width: 364px;
  font-size: 20px;
  line-height: 22px;
  color: #ffffffa1;

  span {
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.white};
  }
  @media ${breakpoints.lessThan(sizes.tablet)} {
    font-size: ${({ theme }) => theme.typography.normal};
    flex-direction: column;
  }
`
export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    margin-bottom: 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 30px;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    margin-bottom: 3.75rem;
    flex-direction: column;
    gap: 1.25rem;
  }
`
export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  position: relative;
  bottom: 0.813rem;

  @media ${breakpoints.lessThan(sizes.tablet)} {
    position: relative;
    bottom: 2.313rem;
  }
`
export const AgentsCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const ImagesAgent = styled.div`
  display: flex;
  max-width: 460px;
  max-height: 691px;
  flex-direction: column;
  justify-content: center;
`
export const BackgroundImageAgent = styled.div`
  z-index: 0;
  position: relative;
  width: 615px;
  height: 900px;
  margin-left: -100px;
  transform: scale(1.5);
  object-fit: contain;
`
export const ImageAgent = styled.div`
  position: absolute;
  z-index: 1;
  width: 790px;
  height: 700px;
  margin-left: -170px;
`
export const InfosCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 16px;
  max-width: 78px;
  max-height: 88px;
  background: rgba(255, 255, 255, 0.09);
  border-radius: 6px;
  :hover {
    animation: scaleShadow 0.1s linear 0s 1 normal forwards;
  }
`
export const AbilitiesCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const MainInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
`
export const SecondaryInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
`
export const Partition = styled.div`
  width: 0px;
  height: 668px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  transform: rotate(180deg);
  margin: 0 46px;
`
