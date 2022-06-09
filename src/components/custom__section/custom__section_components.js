import styled from 'styled-components'

const ImageSection = styled.div`
  height: ${props => props.height ? `${props.height}px` : '100%'};
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : ''};
  position: ${props => props.absolute ? 'absolute' : 'relative'};
  top: ${props => props.absolute ? '0' : ''};

  @media (max-width: 768px) {
    padding-top: ${props => props.absolute ? '67px' : ''};
    position: relative;
    height: fit-content;
  }
  
  @media (min-width: 768px) and (max-width: 1200px) {
    margin-top: ${props => props.absolute ? '0' : '67px'};
    position: relative;
    height: fit-content;
  }
`

const Text = styled.p`
  margin: 0;
  font-size: 21px;
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  font-weight: ${props => props.bold ? '700' : '500'};
  line-height: 32px;
  letter-spacing: -0.75px;
  text-align: right;
  color: ${props => props.color ? props.color : 'black'};

  `

const SpanText = styled.span`
  font-weight: 700;
  color: #0B24FB;
`

const HelpAndTipsContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`

export {
  ImageSection,
  Text,
  SpanText,
  HelpAndTipsContainer
}