import styled from 'styled-components'

const HomeWrapper = styled.div`
    background-color:  ${({ theme }) => theme.background.secondary};;
    height: 60vh;
    width: 100%;
    color:  ${({ theme }) => theme.text.primary};
    border-radius: ${({theme})=> theme.card.borderRadius};
    box-shadow: ${({theme})=> theme.card.boxShadow};
`
const HomeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: ${({theme})=> theme.card.borderRadius};
`

const Home = () => {
    return (
        <HomeWrapper>
            <HomeTextWrapper id="main" style={{padding: '30px', margin: 'auto', textAlign:'center' }}><h1>Welcome to the Main Page</h1></HomeTextWrapper>
        </HomeWrapper>
    )
}

export default Home
