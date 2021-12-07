import styled from 'styled-components'
import React from 'react'

const AboutWrapper = styled.div`
    color: ${({ theme }) => theme.colors.textSecondary};
    width:80%;
    padding:20px;
     margin:auto;
`

const About = () => {
    return (
        <AboutWrapper id="aboutwrapper">
            This is a website template, built by Joshua Hendrix. It is for easy grab and go setup. It has styled-components, react-router, cypress and themes already setup so you can hit the ground running!
        </AboutWrapper>
    )
}

export default About
