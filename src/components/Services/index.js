import React from 'react'
import styled from 'styled-components';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'


const ServicesContainer = styled.div `
height: 965px;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
background: linear-gradient(to bottom, #000000 0%, #093927 100%);

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`

const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content:flex-start;
align-items:center;
border-radius: 10px;
max-height: 340px;
padding:30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
}
`
const ServicesIcon = styled.img `
height:160px;
width:160px;
margin-bottom: 10px;
`
const ServicesH1 = styled.h1 `
font-size: 56px;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 36px;
}
`
const ServicesH2 = styled.h2`
font-size: 16px;
margin-bottom: 10px;
`

const ServicesP = styled.p`
font-size:16px;
text-align:center;
`
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
