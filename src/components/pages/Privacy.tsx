import React from 'react'
import styled from 'styled-components'


const PrivacyWrapper = styled.div`
    background-color:  ${({ theme }) => theme.background.secondary};;
    height: 100%;
    width: 90%;
    margin: auto;
    margin-top: 5%;
    color:  ${({ theme }) => theme.text.primary};
    border-radius: ${({ theme }) => theme.card.borderRadius};
    box-shadow: ${({ theme }) => theme.card.boxShadow};
`
const PrivacyTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: ${({ theme }) => theme.card.borderRadius};
    text-align: center;
    padding: 40px;
`


const Privacy = () => {
    return (
        <PrivacyWrapper>
            <PrivacyTextWrapper id="privacy" >
                <h1>Privacy Policy</h1>
                <h3>Information that is gathered from visitors</h3>
                <p>In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit.

                    Cookies may be used to remember visitor preferences when interacting with the website.

                    Where registration is required, the visitor's email and a username will be stored on the server.
                </p>
                <h3>How the Information is used</h3>
                <p>
                    The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising.

                    E-mail addresses will not be sold, rented or leased to 3rd parties.

                    E-mail may be sent to inform you of news of our services or offers by us or our affiliates.
                </p>
                <h3> Visitor Options</h3>
                <p>
                    If you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in e-mail that you receive.

                    You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.
                </p>
                <h3>Cookies</h3>
                <p>
                    Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website.

                    3rd party advertising companies may also use cookies for tracking purposes.
                </p>
                <h3>Google Ads</h3>
                <p>
                    Google, as a third party vendor, uses cookies to serve ads.

                    Google's use of the DART cookie enables it to serve ads to visitors based on their visit to sites they visit on the Internet.

                    Website visitors may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.

                </p>
            </PrivacyTextWrapper>
        </PrivacyWrapper>
    )
}

export default Privacy
