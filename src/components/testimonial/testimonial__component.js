import styled from 'styled-components'

const Testi = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(to bottom, transparent 75%, black 75%);
`
const Card = styled.div`
  margin: 0;
  width: 250px;
  height: auto;
  min-height: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${props => 
    props.background ? props.background : 'white'
  };
 `

export {
  Testi,
  Card
}