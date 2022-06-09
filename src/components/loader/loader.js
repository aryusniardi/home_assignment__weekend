import styled, {keyframes} from 'styled-components'
import { Container } from '../base__components'

const spin = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    
    100% { 
        transform: rotate(360deg); 
    }
`

const Loader = styled.div`
    margin: auto;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
`

const Loading = () => {
    return (
        <Container style={{background: 'black'}}>
            <Loader />
        </Container>
    )
}

export default Loading